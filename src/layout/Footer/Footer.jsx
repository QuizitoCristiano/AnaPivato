import { Box, Stack } from "@mui/material";
import "../../components/Profile.css";
import "../../pages/styles.css";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Anapivato01 from "../../logoImg/ana0.png";

export const MyFooter = () => {
  return (
    <div className="section_container footer_container">
      <span className="bg_bllurs"></span>
      <span className="bg_bllurs footer_bllurs"></span>

      <div className="footer_col">
        <div className="footer_logo">
          <img src={Anapivato01} alt="Logo da empresa" />
        </div>
        <p>
          Conectamos pessoas, ideias e oportunidades. Nossa missão é transformar
          desafios em soluções inovadoras, promovendo um impacto positivo no
          mundo digital. 🚀
        </p>
        <div className="footer_social">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <WhatsAppIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="footer_col">
        <h4>Institucional</h4>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>

      <div className="footer_col">
        <h4>Explorar</h4>
        <a href="#">Blog</a>
        <a href="#">Segurança</a>
        <a href="#">Carreiras</a>
      </div>

      <div className="footer_col">
        <h4>Atendimento</h4>
        <a href="#">Fale Conosco</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos & Condições</a>
        <a href="#">Calculadora BMI</a>
      </div>
    </div>
  );
};
