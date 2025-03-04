import React from "react";
import { Stack, Box } from "@mui/material";
import { StyleClientNweLib } from "./newStylesLib";
import { ControlledCarousel } from "./AdminPost";
import "./styles.css";
import { ProfileCard } from "../components/Profile";
import { CardProduct } from "../components/cardProduct";
import { MySidebar } from "../components/Sidebar";
import { SmallFooter } from "../components/smollFooter";
import { MyFooter } from "../layout/Footer/Footer";
import { ChatWhatsApp } from "../chatWats/zap";
import AboutDesignDeveloperSkill from "../components/About/aboutDesign";

export const MyHome = () => {
  return (
    <>
      <Stack
        sx={{
          minHeight: "100vh",
          // bgcolor: '#fff !important',
          marginTop: "5rem",
          width: "100%",
          gap: "0.1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "@media only screen and (max-width: 800px)": {
            width: "100%",
            marginTop: "4rem",
            position: "relative",
          },
        }}
      >
        <ControlledCarousel />
        <ProfileCard />
   
        <CardProduct />
      
        <MySidebar />
        <SmallFooter />
      </Stack>
      <ChatWhatsApp />
    </>
  );
};
