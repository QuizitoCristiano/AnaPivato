import React from "react";
import "./StylsAbout.css";
import { Stack } from "@mui/material";

import Quizitoto from "../../logoImg/anapivato3.jpg";
import DuoIcon from "@mui/icons-material/Duo";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InsightsIcon from "@mui/icons-material/Insights";
import GrassIcon from "@mui/icons-material/Grass";
import Team from "./Team";
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
            <h1>Conquistas</h1>
            <p>
              Na jornada da vida, as conquistas desempenham um papel
              fundamental. Elas são os marcos que nos lembram do nosso
              potencial, perseverança e dedicação. Cada conquista, por menor que
              seja, é um passo em direção aos nossos sonhos e objetivos e Cada
              passo dado, cada desafio enfrentado e cada obstáculo superado nos
              transformam e nos impulsionam para o próximo nível.
            </p>

            <div className="achievements_cards">
              <div className="achievements-card">
                <span className="achievements_icon">
                  <i>
                    <DuoIcon />
                  </i>
                </span>
                <h3>450+</h3>
                <p>Cursos</p>
              </div>

              <div className="achievements-card">
                <span className="achievements_icon">
                  <i>
                    <VerifiedUserIcon />
                  </i>
                </span>
                <h3>79,000+</h3>
                <p>Estudante</p>
              </div>
              <div className="achievements-card">
                <span className="achievements_icon">
                  <i>
                    <InsightsIcon />
                  </i>
                 
                </span>
                <h3>26+</h3>
                <p>Prêmio</p>
              </div>
              
            </div>
          </div>
        </div>
      </Stack>

        <Team/>
    
    </Stack>
  );
};

export default IndexAboutUs;
