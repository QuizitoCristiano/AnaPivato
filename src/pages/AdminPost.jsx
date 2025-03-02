import React, { useState } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { StyleClientNweLib } from "./newStylesLib";
import "./styles.css";
import Ana03remove from "../logoImg/ana03remove.png";

const messages = [
  // { id: 1, text: "🙏 Seu empenho faz a diferença! Obrigado pelo trabalho incrível, Ana! 🌟", top: "0%", left: '3%' },
  // { id: 2, text: "🤝 Nova oportunidade! Recebemos uma proposta de parceria. Vamos conversar?", top: "70%", left: "5%" },
  { id: 3, text: "🎯🥳🍾 Meta batida! Nossa empresa agradece imensamente. Parabéns, seu time é incrível! 👏",top: "90%", left: "0%" },
];


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
          O segredo das grandes marcas?
          <strong style={{ color: "#00a650" }}>
            Marketing que gera desejo e vendas
          </strong>
          . Com as estratégias certas, você pode criar uma presença
          irresistível, atrair leads qualificados e
          <strong style={{ color: "#00a650" }}>
            converter oportunidades em lucro
          </strong>
          . O mercado está cheio de concorrência. Você está preparado para
          assumir a liderança? 🚀
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
      <div className="header_Image" style={{ position: "relative" }}>
  <img src={Ana03remove} alt="header" style={{ width: '100%', height: 'auto' }} />
  {messages.map((msg) => (
    <Box
      key={msg.id}
      className="floating-message"
      sx={{
        position: "absolute",
        top: msg.top,
        left: msg.left,
        background: "rgba(0, 0, 0, 0.8)", // Escurecer um pouco mais
        color: "#fff",
        padding: "12px 8px", // Ajustar o padding
        borderRadius: "8px",
        fontSize: { xs: "16px", sm: "14px" }, // Tamanhos de fonte responsivos
        boxShadow: 2, // Sombra para destaque
        zIndex: 10, // Para garantir que as mensagens fiquem acima da imagem
      }}
    >
      <Typography>{msg.text}</Typography>
    </Box>
  ))}
</div>

    </div>
  );
};
