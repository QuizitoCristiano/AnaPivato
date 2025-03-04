import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Importando useNavigate
import "./header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Button } from "@mui/material";
import Anapivato01 from "../logoImg/ana0.png";

const myLink = [
  { label: "Home", link: "/" },
  { label: "Sobre Nós", link: "/IndexAboutUs" },
  { label: "Contato", link: "/ContactForm" },
];

export const MyHeader = () => {
  const navigate = useNavigate();
  const [abreMeno, setAbreMeno] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Estado para detectar o scroll

  const handleMenuClick = (link) => {
    setAbreMeno(false); // Fecha o menu
    navigate(link); // Navega para o link
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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

      <Stack className="myNaveLink">
        <div className="logo-links">
          {myLink.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              aria-label={item.label}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#d90429" : "#fff",
              })}
              onClick={() => handleMenuClick(item.link)} // Fecha o menu ao clicar no link
            >
              <p>{item.label}</p>
            </NavLink>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="logo-icons">
          <span onClick={() => setAbreMeno(!abreMeno)} aria-label="Abrir menu">
            {abreMeno ? <CloseIcon /> : <DehazeIcon />}
          </span>
        </div>

        {abreMeno && (
          <div className="menu-celular">
            <div className="icone-fechar">
              <span onClick={() => setAbreMeno(false)} aria-label="Fechar menu">
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
                    color: isActive ? "#d90429" : "#fff",
                  })}
                  onClick={() => handleMenuClick(item.link)} // Fecha o menu ao clicar no link
                >
                  <p>{item.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </Stack>

      <Stack direction="row" alignItems="center">
        
        <Button
           onClick={() => window.location.href = "/SingniIn"}
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
