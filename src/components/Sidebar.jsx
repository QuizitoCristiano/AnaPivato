import React from "react";
import { Box, Stack } from "@mui/material";
import "./Profile.css";
import "../pages/styles.css";
import anapsjpg from "../logoImg/SaveClip.App.jpg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
export const MySidebar = () => {
  return (
    <>
      <div className="section_container join_container">
        <h2 className="section_Fortheader">AMOR, CONEXÕES E FAMILIARIDADE</h2>
        <p className="section_subheader">
          Construímos pontes entre pessoas, ideias e sonhos. Com confiança e
          proximidade, criamos experiências autênticas que fortalecem laços e
          transformam histórias. ✨
        </p>

        

        <div className="join_image">
          <img src={anapsjpg} alt="Imagem representativa" />

          <div className="join_grid">
            <div className="join_card">
              <span>
                <VerifiedUserIcon />
              </span>

              <div className="join_card_content">
                <h4>🔒 Segurança e Performance</h4>
                <p>
                  Garantimos qualidade e eficiência para que cada experiência
                  seja única, segura e memorável. 🚀
                </p>
              </div>
            </div>

            <div className="join_card">
              <span>
                <VideoCameraBackIcon />
              </span>

              <div className="join_card_content">
                <h4>Disponibilidade Total</h4>
                <p>
                  Sempre prontos para atender às suas necessidades, com suporte
                  e presença constantes. 🕒
                </p>
              </div>
            </div>

            <div className="join_card">
              <span>
                <AssuredWorkloadIcon />
              </span>

              <div className="join_card_content">
                <h4>Facilidade Sem Limites</h4>
                <p>
                  Simplicidade e inovação andam juntas! Adaptamos soluções para
                  que tudo funcione de maneira intuitiva e eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
