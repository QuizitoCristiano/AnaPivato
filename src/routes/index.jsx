import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../mylayouts";
import { MyHome } from "../pages/home";
import IndexAboutUs from "../components/About/AboutUs";
import { SingniIn } from "../Singni_In/login";

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MyHome />} />
         <Route path="/IndexAboutUs" element={<IndexAboutUs />} /> 
          <Route path="/SingniIn" element={<SingniIn />} /> 
      </Routes>
    </MainLayout>
  );
};

export default MainRoutes;
