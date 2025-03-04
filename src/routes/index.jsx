import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../mylayouts";
import { MyHome } from "../pages/home"; 
import IndexAboutUs from "../components/About/AboutUs";
import { AuthContext } from "../authcontext"; 
import { MyFooter } from "../layout/Footer/Footer"; 
import { SingniIn } from "../Singni_In/login"; 
import ContactForm from "../contact/ContactForm";



const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return isLoggedIn ? children : <Navigate to="/SingniIn" />; 
};

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext); 

  return isLoggedIn ? (
    <MainLayout>
      <Routes>
       
        <Route path="/" element={<MyHome />} />
        <Route path="/IndexAboutUs" element={<IndexAboutUs />} /> 
       
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <MyFooter /> 
    </MainLayout>
  ) : (
    <Routes>
      {/* Rotas públicas para usuários não autenticados */}
      <Route path="/SingniIn" element={<SingniIn />} />
    
      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<Navigate to="/SingniIn" />} />
    </Routes>
  );
};

export default MainRoutes;
