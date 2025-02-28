import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";  // Usando NavLink
import "./header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Stack, Typography, Button } from "@mui/material";

import Anapivato01 from "../logoImg/ana0.png";

const myLink = [
  { label: "Home", link: "/" },
  { label: "Sobre Nós", link: "/IndexAboutUs" },
  { label: "Contato", link: "/SingniIn" },
];

export const MyHeader = () => {
  const [abreMeno, setAbreMeno] = useState(false);

  const abrirMenu = () => setAbreMeno(true);
  const fecharMenu = () => setAbreMeno(false);

  const [scrolling, setScrolling] = useState(false);  // Estado para detectar o scroll


  // Função para controlar o efeito da borda ao rolar
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true); // Ativa o estado de rolagem
    } else {
      setScrolling(false); // Desativa o estado de rolagem
    }
  };

  // Adiciona o listener de scroll quando o componente monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Remove o listener quando o componente desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Stack
      sx={{
        fontFamily: '"Almarai","Helvetica","Arial",sans-serif',
        width: "100%",
        height: "10vh",
        position: "fixed",
        padding: "20px 50px",
        top: "0",
        left: "0",
        right: "0",
        
        flexDirection: "row",
        display: "flex",
        background: "#111317",
        color: "#fff",
        // boxShadow: "0 9px 1rem rgb(14 55 54 / 65%)",
        borderBottom: scrolling ? "1px solid #323946" : "#323946", // Aplica a borda ao rolar

        transition: "0.5s",
        alignItems: "center",
      
        justifyContent: "space-between",
        zIndex: "2000",


        "@media only screen and (max-width: 800px)": {
          padding: "20px 10px",
          },
        
      }}
    >
      {/* Logo e título */}
      <Stack
        sx={{
          display: "flex",
          alignItems: "flex-start",
      
          justifyContent: "center",
          height: "60px",
          width: "20%",
       
          position: "relative",

          "@media only screen and (max-width: 800px)": {
            width: "45%",
            
            position: "relative",
          },
        
        }}
      >
        <img
          src={Anapivato01}
          alt="Logo"
          style={{
            height: "60%",
            width: "auto",
            cursor: "pointer",
            backgroundSize: "cover",
          }}
        />
      </Stack>

      {/* Links de navegação */}
      <Stack className="myNaveLink">
        <div className="logo-links">
          {myLink.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              aria-label={item.label}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#d90429" : "#fff", // Altere a cor do link ativo
              })}
            >
              <p>{item.label}</p>
            </NavLink>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="logo-icons">
          <span onClick={abrirMenu} aria-label="Abrir menu">
            {abreMeno ? <CloseIcon /> : <DehazeIcon />}
          </span>
        </div>

        {abreMeno && (
          <div className="menu-celular">
            <div className="icone-fechar">
              <span onClick={fecharMenu} aria-label="Fechar menu">
                Fechar
                <CloseIcon />
              </span>
            </div>
            <div className="itens-menu-celular">
              {myLink.map((item, index) => (
                <NavLink
                  to={item.link}
                  key={index}
                  aria-label={item.label}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#d90429" : "#fff", // Altere a cor do link ativo
                  })}
                >
                  <p>{item.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </Stack>

      {/* Avatar e Carrinho de Compras */}
      <Stack direction="row" alignItems="center">
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
          Join Now
        </Button>
      </Stack>
    </Stack>
  );
};
