import React, { Profiler, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import "./Profile.css";
import "../pages/styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

const NewArrayBox = [
  {
    icon: <SportsKabaddiIcon />,
    title: "✅ Uma Escolha Perfeita",
    text: `Cada decisão molda o seu futuro! Escolher a estratégia certa é o
              primeiro passo para alcançar o topo. 🔥 Seja no digital ou no
              presencial, garanta que sua marca se destaque da concorrência!
              `,
  },
  {
    icon: <SportsKabaddiIcon />,
    title: "📊 Um Ótimo Planejamento",
    text: `
       O sucesso começa com um plano estratégico! Com uma abordagem bem definida, você transforma
        desafios em oportunidades e constrói uma presença digital sólida. 🚀
         Está pronto para dar o próximo passo?
    `,
  },
  {
    icon: <Diversity1Icon />,
    title: "🌐 Novas Plataformas",
    text: `
       A revolução digital está acontecendo agora! Descubra novas plataformas 
       e ferramentas para expandir sua marca e alcançar públicos que realmente importam. 
       📢 Inovação é a chave para o crescimento!

    `,
  },
  {
    icon: <SchoolIcon />,
    title: "👩‍💼 Ana Claudia",
    text: `
       Histórias de sucesso inspiram e motivam! Conheça a trajetória de Ana
        Claudia e descubra como estratégias bem aplicadas podem transformar 
        desafios em conquistas. ✨ O próximo grande case pode ser o seu!
    `,
  },
];
export const ProfileCard = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "",
        margin: "auto",
        padding: "1rem",

        borderRadius: "10px",

        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
        marginBottom: "1rem",
      }}
    >
      <Stack className="explore_container">
        <div className="explore_header">
          <h2 className="section_header">EXPLORE NOSSO PROGRAMA</h2>

          <div className="explore_nav">
            <span>
              <ArrowBackIcon />
            </span>
            <span>
              <ArrowForwardIcon />
            </span>
          </div>
        </div>

        <div className="explore_grid">
          {NewArrayBox.map((item) => {
            return (
              <Box key={item} className="explore_card">
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "12px 18px",
                    marginBottom: "1rem",
                    color: "var(--white)",
                    backgroundColor: "var(--pink-active-border-color)",
                    borderRadius: "1rem",
                  }}
                >
                  {item.icon}
                </Box>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <Button
                  sx={{
                    background: "#d90429",
                    border: "none !important",
                    outline: "none !important",
                    color: "#fff",
                    padding: "15px 40px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    minWidth: "100px",
                    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
                    transition: "all 0.3s",
                    "&:hover": { background: "#e83c4a" },
                    "&:disabled": { background: "#ccc" },
                    "@media (max-width: 900px)": {
                      minWidth: "100px",
                    },
                  }}
                >
                  Saiba mais
                </Button>
              </Box>
            );
          })}
        </div>
      </Stack>
    </Stack>
  );
};
