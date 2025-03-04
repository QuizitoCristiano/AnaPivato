import React, { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  Modal,
  IconButton,
  TextField,
} from "@mui/material";

import {
  Person as PersonIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Textarea from "@mui/joy/Textarea"; // Verifique se essa importação está correta

import { Email, Phone } from "@mui/icons-material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import "./ContactStyles.css";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"; // Ícone do botão para abrir o modal

const emojiList = [
  { name: "Riso com Lágrimas", emoji: "🤣" },
  { name: "Coração com Flecha", emoji: "💞" },
  { name: "Cerveja", emoji: "🍺" },
  { name: "Macaco", emoji: "🙈" },
  { name: "Deslumbrado", emoji: "🤩" },
  { name: "Amor", emoji: "😍" },
  { name: "Carinha Apaixonada", emoji: "🥰" },
  { name: "Festa", emoji: "🥳" },
  { name: "Raio", emoji: "⚡" },
  { name: "Fogo", emoji: "🔥" },
  { name: "Ilha", emoji: "🏝" },
  { name: "Praia", emoji: "🏖" },
  { name: "Fogos de Artifício", emoji: "🎇" },
  { name: "Fogos", emoji: "🎆" },
  { name: "Chorando", emoji: "😢" },
  { name: "Anel", emoji: "💍" },
  { name: "Troféu", emoji: "🏆" },
  { name: "Medalha de Ouro", emoji: "🥇" },
  { name: "Coração Vermelho", emoji: "❤" },
  { name: "Coração Verde", emoji: "💚" },
  { name: "Coração Azul", emoji: "💙" },
  { name: "Polegar para Cima", emoji: "👍" },
  { name: "Ilha", emoji: "🏝" },
  { name: "Festa", emoji: "🥳" },
  { name: "Bolo", emoji: "🎂" },
  { name: "Flores", emoji: "💐" },
  { name: "Champanhe", emoji: "🍾" },
  { name: "Festa com Confetes", emoji: "🎉" },
  { name: "Coração com Laço", emoji: "💝" },
  { name: "Cerveja", emoji: "🍻" },
  { name: "Prato", emoji: "🍽" },
  { name: "Vinho", emoji: "🍷" },
  { name: "Coquetel", emoji: "🍹" },
  { name: "Avião", emoji: "✈" },
  { name: "Carrinho de Compras", emoji: "🛒" },
  { name: "Presente", emoji: "🎁" },
  { name: "Envelope", emoji: "📩" },
  { name: "Laço", emoji: "🎀" },
  { name: "Estetoscópio", emoji: "🩺" },
  { name: "Ímã", emoji: "🧲" },
  { name: "Cadeado", emoji: "🔐" },
  { name: "Relógio", emoji: "🕘" },
];

const ContactForm = () => {
  const [textSon, setTextSon] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
   
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
   
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const AddEmoji = (emoji) => () => {
    setTextSon((prevText) => `${prevText}${emoji}`);
    handleCloseModal();
  };

  const filteredEmojis = emojiList.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Se o campo de nome for obrigatório, valide
    if (!formData.name) {
      errors.name = "Informe o nome completo"; // Mantenha essa linha se o nome for obrigatório
    }

    // Validação de email
    if (!formData.email) {
      errors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Por favor, digite um e-mail válido";
    }

    // Validação de mensagem

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Aqui você pode realizar a ação de envio do formulário
      console.log("Formulário enviado com sucesso!", formData);
      // Limpar o formulário após o envio
      setFormData({ name: "", email: "" });
      setFormErrors({ name: "", email: "" });
    }
  };

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          minHeight: "100vh", // Permite crescer
          marginTop: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // background: "grey",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1500px",
            padding: "10px",
            marginTop: "2rem",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "0.3s",
          }}
        >
          <Typography
            sx={{
              fontWeight: "medium",
              fontSize: "1.4rem",
              color: "#fff",
            }}
          >
            Valorizamos a transparência e a satisfação do cliente. Se você não
            estiver satisfeito com sua experiência, estamos aqui para ajudar.
            Sua opinião é importante e estamos constantemente trabalhando para
            melhorar nossos serviços.
          </Typography>
        </Box>

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
            <Typography
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "1.5rem",
                marginTop: "2.3rem",
              }}
            >
              Entre em contato conosco para mais informações.
            </Typography>
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
                marginTop: "2rem",
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
            <form onSubmit={handleSubmit}>
              <div className="input_container">
                <PersonIcon className="iconField" />
                <input
                  type="text"
                  placeholder="Digite o seu nome..."
                  name="name" // O nome do campo deve corresponder ao estado
                  value={formData.name}
                  onChange={handleChange}
                  // Remova a propriedade required se o campo de nome não for obrigatório
                />
                {formErrors.name && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {formErrors.name}
                  </p>
                )}{" "}
                {/* Exibir erro apenas se houver */}
              </div>
              <div className="input_container">
                <ReplyAllIcon className="iconField" />
                <input
                  type="email"
                  placeholder="Digite o seu E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {formErrors.email}
                  </p>
                )}
              </div>
              <Textarea
                placeholder="Digite sua mensagem aqui…"
                value={textSon}
                minRows={2}
                maxRows={4}
                required
                endDecorator={
                  <Button onClick={handleOpenModal}>
                    <EmojiEmotionsIcon />
                  </Button>
                }
                sx={{
                  minWidth: 300,
                  backgroundColor: "#262626",
                  color: "#fff",
                  fontSize: "1.2rem",

                  fontWeight: 500,
                  transition: "all 0.3s",
                }}
              />
              {formErrors.message && (
                <p
                  style={{ color: "red", fontSize: "1rem", marginTop: "1rem" }}
                >
                  {formErrors.message}
                </p>
              )}{" "}
              {/* Exibir erro apenas se houver */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  type="submit"
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
                    marginTop: "2.5rem",
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

        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              width: {
                xs: "99%", // 100% de largura em telas pequenas
                sm: 400, // 400px em telas médias e maiores
              },
              padding: 2,
              backgroundColor: "white",
              borderRadius: 2,
              margin: "auto",

              marginTop: "27%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Selecione um Emoji
            </Typography>
            <TextField
              sx={{
                width: "100%",

                marginTop: 1,
                padding: "10px",

                backgroundColor: "#f5f5f5",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: "#e6e6e6",
                },
              }}
              variant="outlined"
              placeholder="Pesquisar..."
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: 1 }}>
              {filteredEmojis.map((emoji) => (
                <IconButton key={emoji.name} onClick={AddEmoji(emoji.emoji)}>
                  <span style={{ fontSize: "24px" }}>{emoji.emoji}</span>
                </IconButton>
              ))}
            </Box>
          </Box>
        </Modal>
      </Stack>
    </>
  );
};

export default ContactForm;
