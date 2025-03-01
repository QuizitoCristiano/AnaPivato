import React from "react";
import {
  Stack,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Box,
} from "@mui/material";

import {
  Person as PersonIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { Email, Phone } from "@mui/icons-material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import "./ContactStyles.css";
const ContactForm = () => {
  return (
    <>
      <Stack
        sx={{
            width: "100%",
            minHeight: "100vh", // Permite crescer
            marginTop: "1%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "grey",
            padding: "10px",
        }}
      >
        <div className="containerForm">
          <div className="contact-left">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#d90429",
              }}
            >
              Contact Me
            </h1>
            <p
              style={{
                fontWeight: "bold",
                color: "#fff",
                marginTop: "2.3rem",
              }}
            >
              Entre em contato conosco para mais informações.
            </p>
            <ul
              style={{
                marginTop: "2rem",
                gap: "2.5rem",
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                <Email
                  sx={{
                    color: "#d90429",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    color: "#fff",
                    marginLeft: "1rem",
                  }}
                >
                  info@quizitoto.com
                </span>
              </li>
              <li>
                <Phone
                  sx={{
                    color: "#d90429",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    color: "#fff",
                    marginLeft: "1rem",
                  }}
                >
                  +55 11 9999-9999
                </span>
              </li>
            </ul>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "1rem",

                marginBottom: "1rem",
              }}
              className="social-media"
            >
              <a href="#">
                <GoogleIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>

            <Button
              sx={{
                background: "#d90429",
                border: "none !important",
                outline: "none !important",
                color: "#fff",
                padding: "1rem 2.4rem",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: '2rem',
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
              Download cv
            </Button>
          </div>

          <div className="contact-right">
            <form>
              <div className="input_container">
                <PersonIcon className="iconField" />
                <input
                  type="text"
                  placeholder="Digite o seu nome..."
                  name="Nome"
                />
              </div>

              <div className="input_container">
                <ReplyAllIcon className="iconField" />
                <input
                  type="email"
                  placeholder="Digite o seu E-mail"
                  name="email"
                />
              </div>

              <textarea placeholder="Mensagem" required></textarea>

               <Box sx={{
                display: "flex",
                justifyContent: "space-between",
               }}>

              <Button
                sx={{
                  background: "#d90429",
                  border: "none !important",
                  outline: "none !important",
                  color: "#fff",
                  padding: "1rem 3.9rem",
                  borderRadius: "10px",
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
                Enviar
              </Button>
               </Box>
            </form>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default ContactForm;
