import React, { useState } from "react";
// quizitocristiano10@gmail.com
// Agostinho25

// Ana Cláudia Pivato
// anaclaudia@gmail.com
// AnaPivato2465

// Lina Cristiano
// lynacristiano28@gmai.com
// lhyna258

import { Link, useNavigate } from "react-router-dom";
import {
  Stack,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  Box,
  Modal,
  Button,
  Typography,
} from "@mui/material";
import {
  Person as PersonIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import "./styleSingni.css";
import { StyleEmptyLoader } from "./emptyLoader";

export const SingniIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formDatalogin, setFormDatalogin] = useState({
    fullemail: "",
    fullpassword: "",
  });

  const [formErrorsLogin, setFormErrorsLogin] = useState({
    fullemail: "",
    fullpassword: "",
  });

  const handleChangeLogin = (e) => {
    const { name, value } = e.target; // Captura o nome e o valor do input
    setFormDatalogin((prevData) => ({ ...prevData, [name]: value })); // Atualiza o estado com o novo valor
    setFormErrorsLogin((prevErrors) => ({ ...prevErrors, [name]: "" })); // Limpa o erro correspondente
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Limpa o erro do nome apenas se estiver no login
    if (!isRegistering && name === "name") {
      setFormErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    let errors = {};

    if (isRegistering) {
      if (!formData.name.trim() || formData.name.length < 3) {
        errors.name = "O nome deve ter pelo menos 3 caracteres.";
      }
    }

    if (!formData.email.trim()) {
      errors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "E-mail inválido.";
    }

    if (!formData.password.trim()) {
      errors.password = "A senha é obrigatória.";
    } else if (formData.password.length < 6) {
      errors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setFormErrorsLogin({});

    const errors = {};

    // Validação de login
    if (!formDatalogin.fullemail.trim()) {
      errors.fullemail = "O e-mail é obrigatório do login.";
    } else if (!/\S+@\S+\.\S+/.test(formDatalogin.fullemail)) {
      errors.fullemail = "E-mail inválido.";
    }

    if (!formDatalogin.fullpassword.trim()) {
      errors.fullpassword = "A senha é obrigatória.";
    } else if (formDatalogin.fullpassword.length < 6) {
      errors.fullpassword = "A senha deve ter pelo menos 6 caracteres.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrorsLogin(errors);
      return;
    }
   
    const loginUser = async (email, password) => {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Navegue para a página inicial ou outra página após o login bem-sucedido
        navigate("/"); // Altere conforme necessário
      } catch (error) {
        alert("Erro ao fazer login: " + error.message);
      }
    };
    
   
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      const auth = getAuth();
      const firestore = getFirestore();
      const usersCollection = collection(firestore, "users");

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: formData.name });

        const userDocRef = doc(usersCollection, user.uid);
        await setDoc(userDocRef, {
          id: user.uid,
          email: formData.email,
          name: formData.name,
        });

        setSuccessMessage("Usuário cadastrado com sucesso!");

        setTimeout(() => {
          setFormData({
            name: "",
            email: formData.email,
            password: "",
          });

          setIsRegistering(false);
        }, 2000);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("E-mail já cadastrado. Faça login!");
        } else {
          alert("Erro: " + error.message);
        }
      }
    } else {
      console.log("Formulário inválido, corrigir erros.");
    }
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <StyleEmptyLoader.containerCardLoader>
          <StyleEmptyLoader.loader
            sx={{ animation: "rotation 1s linear infinite" }}
          >
            <StyleEmptyLoader.loaderAfter />
          </StyleEmptyLoader.loader>
          <div>Logando...</div>
        </StyleEmptyLoader.containerCardLoader>
      )}

      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "2rem",
          margin: "2rem",
          padding: "3rem",
          borderRadius: "10px",
          width: "100%",
          height: "100vh",
          // bgcolor: "red",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",

          "@media (max-width: 1291px)": {
            flexDirection: "column",
            margin: "1rem",
            padding: "1rem",
          },
          "@media (max-width: 480px)": {
            padding: "0rem",
            margin: "0.3rem",
            gap: "0.3rem",
          },
        }}
      >
        <div className={`container ${isRegistering ? "active" : ""}`}>
          {/* LOGIN */}
          <div className="form-box login">
            <form onSubmit={handleLoginSubmit}>
              <h2 className="primariH1Clor">Login</h2>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="fullemail" // Deve corresponder ao estado formDatalogin
                  value={formDatalogin.fullemail} // Deve ser o valor correto
                  onChange={handleChangeLogin}
                />
                <PersonIcon className="iconFilde" />

                <p
                  className={`error-message ${
                    formErrorsLogin.fullemail ? "show" : ""
                  }`}
                >
                  {formErrorsLogin.fullemail}
                </p>
              </div>

              <div className="input-box">
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel>Senha</InputLabel>
                  <Input
                    name="fullpassword" // Deve corresponder ao estado formDatalogin
                    type={showPasswordLogin ? "text" : "password"}
                    value={formDatalogin.fullpassword} // Deve ser o valor correto
                    onChange={handleChangeLogin}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowPasswordLogin(!showPasswordLogin)
                          }
                        >
                          {showPasswordLogin ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <p
                  className={`error-message ${
                    formErrorsLogin.fullpassword ? "show" : ""
                  }`}
                >
                  {formErrorsLogin.fullpassword}
                </p>
              </div>

              <div className="forgot-link">
                <a
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                  href="#"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <button className="btn" type="submit">
                Logar
              </button>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Ou cadastre-se nas plataformas sociais
              </p>

              <div className="social-media">
                <a href="#">
                  <GoogleIcon />
                </a>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </form>
          </div>

          {/* CADASTRO */}
          <div className="form-box register">
            <form onSubmit={handleRegisterSubmit}>
              <h1 className="primariH1Clor">Cadastro</h1>

              <div className="input-box">
                <TextField
                  sx={{ width: "100%" }}
                  label="Nome"
                  variant="outlined"
                  size="small"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!formErrors.name}
                />
                <p className={`error-message ${formErrors.name ? "show" : ""}`}>
                  {formErrors.name}
                </p>
              </div>

              <div className="input-box">
                <TextField
                  sx={{ width: "100%" }}
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  size="small"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!formErrors.email}
                />
                {formErrors.email && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div className="input-box">
                <TextField
                  sx={{ width: "100%" }}
                  label="Senha"
                  variant="outlined"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!formErrors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {formErrors.password && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {formErrors.password}
                  </p>
                )}
              </div>

              <div className="forgot-link">
                <a
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#00000",
                  }}
                  href="#"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <button className="btn">Cadastre-se</button>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Ou cadastre-se nas plataformas sociais
              </p>

              <div className="social-media">
                <a href="#">
                  <GoogleIcon />
                </a>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </form>
          </div>
          {/* TOGGLE LOGIN / CADASTRO */}
          <div className="toggle-box">
            <div className="toggle-panel toggle-right">
              <h1
                style={{
                  color: "#fff",
                  marginBottom: "10px",

                  "@media (max-width:650px)": {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "20px",
                  },
                }}
              >
                Olá, bem-vindo!
              </h1>
              <p>Não tem uma conta?</p>
              <button className="btn login-btn" onClick={toggleForm}>
                Cadastre-se
              </button>
            </div>

            <div className="toggle-panel toggle-left">
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: "5px",
                }}
              >
                {" "}
                Bem-vindo de volta!
              </h1>
              <p>Já tem uma conta?</p>
              <button className="btn registr-btn" onClick={toggleForm}>
                {" "}
                Login
              </button>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
};
