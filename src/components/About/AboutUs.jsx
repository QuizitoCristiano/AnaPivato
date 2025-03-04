import React from "react";
import "./StylsAbout.css";
import { Box, Stack } from "@mui/material";

import Quizitoto from "../../logoImg/anapivato3.jpg";
import DuoIcon from "@mui/icons-material/Duo";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InsightsIcon from "@mui/icons-material/Insights";
import GrassIcon from "@mui/icons-material/Grass";
import Team from "./Team";

const unlockedBadges = [
  {
    icon: <DuoIcon />,
    title: "450+",
    description: "Cursos transformando mentes",
  },

  {
    icon: <VerifiedUserIcon />,
    title: "79,000+",
    description: "Estudantes rumo ao sucesso",
  },

  {
    icon: <InsightsIcon />,
    title: "26+",
    description: "Prêmios reconhecendo excelência",
  },
];
const IndexAboutUs = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        marginTop: "6%",
        alignItems: "center",
        // background: "grey",
        padding: "10px",
      }}
    >
      <Stack className="about_achievements">
        <span className="bg_bllurs"></span>
        <span className="bg_bllurs footer_bllurs"></span>

        <div className="about_about_achievements-container">
          <div className="about_achievements-left">
            <img src={Quizitoto} alt="Logo Quizitoto" />
          </div>

          <div className="about_achievements-right">
            <h1>Conquistas: O que te separa do extraordinário?</h1>
            <p>
              Conquistar não é apenas sobre números. É sobre impacto, sobre
              deixar sua marca no mundo. Cada passo dado, cada desafio superado,
              aproxima você de um patamar que poucos ousam alcançar. Você já
              chegou longe, mas e se pudesse ir ainda além? O que está faltando
              para a sua próxima grande vitória?
            </p>

            <Stack
              sx={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",

                gap: "2rem",
                margin: "2rem",

                "@media (max-width: 408px)": {
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                  margin: "1rem",
                },

                "@media (max-width: 480px)": {
                  gridTemplateColumns: "1fr",
                  gap: "0.5rem",
                  margin: "0.5rem",
                },
              }}
            >
              {unlockedBadges.map((badge, index) => (
                <Box key={index} className="achievements-card">
                  <span className="achievements_icon">
                    <i>{badge.icon}</i>
                  </span>
                  <h3>{badge.title}</h3>
                  <p>{badge.description}</p>
                </Box>
              ))}
            </Stack>

            <p>
              Se você sente que ainda há mais para conquistar, talvez esteja a
              um único passo de algo grandioso. A pergunta é: você está pronto
              para dar esse passo?
            </p>
          </div>
        </div>
      </Stack>

      <Team />
    </Stack>
  );
};

export default IndexAboutUs;
