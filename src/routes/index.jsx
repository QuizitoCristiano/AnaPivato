import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../mylayouts";
import { MyHome } from "../pages/home";

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MyHome />} />
      </Routes>
    </MainLayout>
  );
};

export default MainRoutes;
