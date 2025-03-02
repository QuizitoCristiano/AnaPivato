import React from "react";
import "./StylsAbout.css";
import MemberCard from "./MemberCard";

// Importação das imagens
import quizito1 from "../../logoImg/anaClaudia.jpg";
import quizito2 from "../../logoImg/anapivato3.jpg";
import quizito3 from "../../logoImg/anacoll.jpg";
import quizito4 from "../../logoImg/anapivato2.jpg";
import quizito5 from "../../logoImg/ana03.jpg";
import quizito6 from "../../logoImg/anapt.jpg";
import quizito7 from "../../logoImg/quizito2.jpg";
import quizito8 from "../../logoImg/anaanaGestor.jpg";
import { Box } from "@mui/material";

const teamMembers = [
  { img: quizito1, name: "Ana Cláudia Pivato", role: "Especialista em Marketing Digital" },
  { img: quizito2, name: "Quizito Cristiano", role: "Captador de Oportunidades e Leads" }, 
  { img: quizito3, name: "Carlos Mendes", role: "CEO | Especialista em Estratégia de Tráfego" },
  { img: quizito4, name: "Quizito Cristiano", role: "Desenvolvedor de Experiências Digitais" }, 
  { img: quizito5, name: "Eduardo Lima", role: "Analista de Performance e Conversão" },
  { img: quizito6, name: "Ana Cláudia Pivato", role: "Especialista em SEO e Posicionamento" },
  { img: quizito7, name: "Quizito Cristiano", role: "CIO | Consultor de Marketing Estratégico" },
  { img: quizito8, name: "Ana Cláudia Pivato", role: "Gestora de Mídias Sociais e Engajamento" },
];




const Team = () => {
  return (
    <section className="team">
      
      <Box
        sx={{
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#d90429",
        }}
      >
        <h1>Conheça o nosso time</h1>
      </Box>

      <div className="team_container">
        
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            img={member.img}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
