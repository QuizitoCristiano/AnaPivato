import React, { useState } from "react";

import { Box, Button, Stack } from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { StyleClientNweLib } from "./newStylesLib";
import "./styles.css";
import Ana03remove from "../logoImg/ana03remove.png";

export const ControlledCarousel = () => {
  return (
    <div className="section_container header_container">
      <div className="header_content">
        <span className="bg_blur"></span>

        
        <span className="bg_blur header_blur"></span>
        <h4>NO TOPO DA PERFORMANCE.</h4>
        <h1>
          <span>PREPARE A SUA ESTRATÉGIA </span>PARA CHEGAR AO SEU OBJETIVO
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          facilisis nunc. Sed vulputate, ligula in fermentum fermentum, urna
          urna consectetur neque, vel malesuada velit ipsum non justo.
        </p>

        <Box className="socialMedia">
          <FacebookIcon className="SocialMidiaSon" />
          <WhatsAppIcon className="SocialMidiaSon" />
          <InstagramIcon className="SocialMidiaSon" />
        </Box>

        <Button
          sx={{
            background: "#d90429",
            border: "none !important",
            outline: "none !important",
            color: "#fff",
            padding: "8px 5px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            minWidth: "150px",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
            transition: "all 0.3s",
            "&:hover": { background: "#e83c4a" },
            "&:disabled": { background: "#ccc" },
            "@media (max-width: 900px)": {
              minWidth: "100px",
            },
          }}
        >
          Get Started
        </Button>
      </div>

      <div className="header_Image">
        <img src={Ana03remove} alt="header" />
      </div>
    </div>
  );
};
