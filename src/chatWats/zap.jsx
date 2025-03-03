import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Stack, Modal } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MicIcon from "@mui/icons-material/Mic";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./chatStyles.css";
import Textarea from "@mui/joy/Textarea"; // Verifique se essa importação está correta

const mensagensAutomaticas = [
  "Oi, meu querido! Bom dia! 😊 Como você está? Você está falando com Ana Cláudia. Como posso te ajudar hoje?",
  "Olá! Tudo ótimo por aqui, obrigado por perguntar! E você? Estou aqui para te ajudar com qualquer dúvida que você tenha.",
  "Boa tarde! Fico feliz que você veio falar comigo. Como posso ajudar você hoje? Seu sucesso é a nossa prioridade!",
  "Ótima pergunta! Nós oferecemos uma variedade de serviços de marketing digital, desde gestão de redes sociais até criação de conteúdo. O que você gostaria de saber mais? Estou aqui para te apoiar!",
  "Não se preocupe! É normal sentir-se assim às vezes. Vamos conversar sobre suas necessidades e objetivos? Juntos, podemos traçar um caminho claro e eficaz para você!",
  "Uma excelente pergunta! Melhorar a presença online é fundamental. Podemos discutir algumas estratégias personalizadas que se encaixam no seu negócio. Estou aqui para te guiar!",
  "É totalmente compreensível sentir-se assim. A boa notícia é que você não está sozinho! Vamos explorar juntos como os anúncios podem impulsionar o seu negócio. Tenho certeza de que você ficará surpreso com os resultados!",
  "Você é sempre bem-vindo! 😊 Se precisar de mais alguma coisa, não hesite em me chamar. Estou aqui para garantir que você tenha todo o suporte necessário!",
  "Claro! Pense com calma. Se precisar de mais informações ou tiver dúvidas, estarei aqui. Seu sucesso é o nosso compromisso!",
  "É super fácil! Você pode sempre voltar aqui, e eu estarei esperando para te ajudar. Além disso, fique à vontade para nos seguir nas redes sociais para dicas e novidades!",
];

export const ChatWhatsApp = () => {
  const messagesEndRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Olá, como posso ajudá-lo hoje?" },
  ]);
  const [isMicActive, setIsMicActive] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Adicione um novo estado para controlar o índice da mensagem automática
  const [automaticMessageIndex, setAutomaticMessageIndex] = useState(0);

  useEffect(() => {
    // Faz o scroll automático para a última mensagem sempre que messages for atualizado
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enviar mensagem de texto
  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = { type: "outgoing", text: message };
    const updatedMessages = [...messages, newMessage];


    setMessages(updatedMessages);

    saveMessagesToLocalStorage(updatedMessages); 

    setMessage("");

    setIsTyping(true);

    // Aguarda um pequeno tempo antes de enviar a resposta automática
    setTimeout(() => {
      responderMensagem();
    }, 3000); // Ajuste o tempo conforme necessário
  };

  // Função para responder na sequência correta
  const responderMensagem = () => {
    setIsTyping(false); // Remove "digitando..." antes de responder

    if (automaticMessageIndex < mensagensAutomaticas.length) {
      const newMessage = {
        type: "incoming",
        text: mensagensAutomaticas[automaticMessageIndex],
      };
      const updatedMessages = [...messages, newMessage];

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      saveMessagesToLocalStorage(updatedMessages);
      setAutomaticMessageIndex(automaticMessageIndex + 1); 
    } else {
      const newMessage = {
        type: "incoming",
        text: "Se precisar de mais alguma coisa, estou por aqui! 😊",
      };
      const updatedMessages = [...messages, newMessage];

      // Atualiza o estado das mensagens com a nova mensagem padrão
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      saveMessagesToLocalStorage(updatedMessages); // Salvar no localStorage
    }
  };

  // Função para carregar mensagens do localStorage ao iniciar
  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
  }, []);

  // Função para salvar mensagens no localStorage
  const saveMessagesToLocalStorage = (messages) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  // Função para alternar o chat
  const toggleChat = () => setIsChatOpen((prev) => !prev);

  // Enviar mensagem de áudio
  const handleMicPress = async () => {
    setIsMicActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const newRecorder = new MediaRecorder(stream);
      newRecorder.ondataavailable = (event) => setAudioBlob(event.data);
      newRecorder.start();
      setRecorder(newRecorder);
    } catch (error) {
      console.error("Erro ao acessar o microfone:", error);
      setIsMicActive(false);
    }
  };

  const handleMicRelease = () => {
    if (recorder) {
      recorder.stop();
      recorder.stream.getTracks().forEach((track) => track.stop());
      setRecorder(null);
      setIsMicActive(false);

      if (audioBlob) {
        const audioUrl = URL.createObjectURL(audioBlob);

        const newMessage = {
          type: "outgoing",
          audio: audioUrl,
        };

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        saveMessagesToLocalStorage(updatedMessages); // Salvar no localStorage
      }
    }
  };

  // Selecionar mídia
  const handleMediaClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*,video/*";
    fileInput.onchange = (e) => {
      if (e.target.files.length) {
        setMediaFile(e.target.files[0]);
        setIsModalOpen(true); // Abre o modal ao selecionar o arquivo
      }
    };
    fileInput.click();
  };

  // Cancelar envio de mídia
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setMediaFile(null);
  };

  // Confirmar envio de mídia
  const handleConfirmSend = () => {
    if (!mediaFile) return;

    const mediaUrl = URL.createObjectURL(mediaFile);
    const mediaType = mediaFile.type.startsWith("image/")
      ? "image"
      : mediaFile.type.startsWith("video/")
      ? "video"
      : "file";

    const newMessage = {
      type: "outgoing",
      media: mediaUrl,
      mediaType,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    saveMessagesToLocalStorage(updatedMessages); // Salvar no localStorage

    setMediaFile(null);
    setIsModalOpen(false);
  };

  return (
    <Stack
      sx={{
        display: "flex",
        maxWidth: "1290px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        // bgcolor: "#e3f2fd",
        gap: "2rem",
        padding: "20px 20px",
        position: "absolute",
        height: "100vh",
       
        zIndex: 9999,
      }}
    >
      <Stack className="show-chatbot">
        <button className="chatbot-toggler" onClick={toggleChat}>
          {isChatOpen ? (
            <CloseIcon
              sx={{ fontSize: "40px", color: "#fff", cursor: "pointer" }}
            />
          ) : (
            <WhatsAppIcon
              sx={{ fontSize: "30px", color: "#fff", cursor: "pointer" }}
            />
          )}
        </button>

        {isChatOpen && (
          <Box className="chatbot">
            <Box
              sx={{
                background: "#d90429",
                padding: "16px 0",
                textAlign: "center",
                position: "relative",
              }}
            >
              <h2 style={{ color: "#fff", fontSize: "1.4rem" }}>
                Fale com agente
              </h2>
            </Box>

            <ul className="chatbox">
              {messages.map((msg, index) => (
                <li
                  key={index}
                  className={`chat ${msg.type}`}
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent:
                      msg.type === "incoming" ? "flex-start" : "flex-end",
                  }}
                >
                  {msg.type === "incoming" && <WhatshotIcon />}
                  {msg.audio ? (
                    <audio controls src={msg.audio}></audio>
                  ) : msg.mediaType === "image" ? (
                    <img
                      src={msg.media}
                      alt="Arquivo enviado"
                      style={{ maxWidth: "200px", margin: "5px" }}
                    />
                  ) : msg.mediaType === "video" ? (
                    <video
                      controls
                      src={msg.media}
                      style={{ maxWidth: "200px", margin: "5px" }}
                    />
                  ) : (
                    <p>{msg.text}</p>
                  )}

                  {isTyping && (
                    <li
                   
                     
                    >
                    
                      <p>Digitando...</p>
                    </li>
                  )}
                </li>
              ))}
              {/* Div invisível para rolagem automática */}
              <div ref={messagesEndRef} />
            </ul>

            <div className="chat-input">
              <AddAPhotoIcon
                onClick={handleMediaClick}
                sx={{
                  color: "#3cb815",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  boxShadow: "0 0 5px #d90429",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": { boxShadow: "0 0 15px #d90429" },
                  "&:active": { boxShadow: "0 0 15px #d90429" },
                }}
              />
              <textarea
                className="TheNewtextarea"
                placeholder="Enviar Mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                onClick={handleSendMessage}
                onMouseDown={handleMicPress}
                onMouseUp={handleMicRelease}
              >
                {message.trim() ? (
                  <SendIcon
                    sx={{
                      color: "#3cb815",
                      fontSize: "1.4rem",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <MicIcon
                    sx={{
                      color: isMicActive ? "#3cb815" : "#ccc",
                      fontSize: "1.4rem",
                      cursor: "pointer",
                    }}
                  />
                )}
              </Button>
            </div>
          </Box>
        )}
      </Stack>

      {/* Modal para confirmar o envio da imagem ou vídeo */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            maxWidth: 450,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute", // Usar 'absolute' para centralizar o modal
            top: "50%", // Posiciona o topo do modal no meio da tela
            left: "50%", // Posiciona a esquerda do modal no meio da tela
            transform: "translate(-50%, -50%)", // Move o modal para o centro
            textAlign: "center",
          }}
        >
          <img
            src={mediaFile ? URL.createObjectURL(mediaFile) : ""}
            alt="Preview"
            style={{ maxWidth: "100%", margin: "10px 0" }}
          />

          <h5
            style={{
              fontWeight: 800,
              fontSize: "18px",
              marginBottom: "20px",
              color: "rgb(51, 191, 48)",
            }}
          >
            Confirmar envio de mídia
          </h5>
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleCloseModal}
              sx={{
                height: "50px",
                width: "40%",
                borderRadius: "15px 0px 15px 0px",
                bgcolor: "rgb(51, 191, 48)",
                color: "#fff",
                boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 15px 5px #3cb815",
                  background: "#3cb815",
                  transform: "scale(1.05)",
                },
              }}
            >
              Cancelar
            </Button>

            <Button
              onClick={handleConfirmSend}
              sx={{
                height: "50px",
                width: "40%",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "15px 0px 15px 0px",
                bgcolor: "rgb(51, 191, 48)",
                color: "#fff",
                boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 15px 5px #f75f1d",
                  background: "#3cb815",
                  transform: "scale(1.05)",
                  color: "#f75f1d",
                },
              }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
};
