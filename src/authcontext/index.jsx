import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseconfig/firebaseconfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const firestore = getFirestore();
  const provider = new GoogleAuthProvider();

  // Estados principais
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [carinho, setCarinho] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);
  const [dadosFormulario, setDadosFormulario] = useState(null);
  const [purchaseData, setPurchaseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const salvarDadosCarrinho = (dados) => setPurchaseData(dados);
  const salvarDadosFormulario = (dados) => setDadosFormulario(dados);

  const adicionarNovoItem = (produto) => {
    setCarinho((prevCarinho) => {
      const novoCarrinho = [...prevCarinho];
      const itemExistenteIndex = novoCarrinho.findIndex(
        (item) => item.nome === produto.nome && item.price === produto.price
      );

      if (itemExistenteIndex !== -1) {
        novoCarrinho[itemExistenteIndex].quantidade++;
      } else {
        novoCarrinho.push({ ...produto, quantidade: 1 });
      }

      return novoCarrinho;
    });
  };

  const incrementarQuantidade = (index) => {
    setCarinho((prevCarinho) => {
      const novoCarrinho = [...prevCarinho];
      novoCarrinho[index].quantidade++;
      return novoCarrinho;
    });
  };

  const removerItem = (index) => {
    setCarinho((prevCarinho) => prevCarinho.filter((_, i) => i !== index));
  };

  const decrementarQuantidade = (index) => {
    setCarinho((prevCarinho) => {
      const novoCarrinho = [...prevCarinho];
      if (novoCarrinho[index].quantidade > 1) {
        novoCarrinho[index].quantidade--;
      } else {
        novoCarrinho.splice(index, 1);
      }
      return novoCarrinho;
    });
  };

  const handlePesquisar = () => {
    const produtos = [...ProductItem, ...ProductItemLegume];
    const resultadosFiltrados = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    setResultados(
      resultadosFiltrados.length > 0
        ? resultadosFiltrados
        : [{ id: -1, nome: `Nenhum resultado para "${termoPesquisa}".` }]
    );
  };

  useEffect(() => {
    const fetchUserData = async (authUser) => {
      if (!authUser?.uid) return null;

      try {
        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, where("id", "==", authUser.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          return {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data(),
          };
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
      return null;
    };

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        console.log("Usuário autenticado:", authUser.uid);
        const userData = await fetchUserData(authUser);
        if (userData) {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("isLoggedIn", "true");
          setIsLoggedIn(true);
        }
      } else {
        console.log("Nenhum usuário autenticado.");
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    setError(null); // Reseta o erro antes de tentar login
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      setUser(userCredential.user);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login error:", error);
      setError("Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loginWithEmailAndPassword,
        logout,
        user,
        carinho,
        setCarinho,
        adicionarNovoItem,
        incrementarQuantidade,
        decrementarQuantidade,
        removerItem,
        totalItensCarrinho: carinho.length,
        termoPesquisa,
        setTermoPesquisa,
        resultados,
        setResultados,
        handlePesquisar,
        salvarDadosCarrinho,
        dadosFormulario,
        salvarDadosFormulario,
        purchaseData,
        setPurchaseData,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
