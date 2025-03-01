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
import quizito7 from "../../logoImg/anapivato1.jpg";
import quizito8 from "../../logoImg/anapse.jpg";
import { Box } from "@mui/material";

const teamMembers = [
  { img: quizito1, name: "Quizito Cristiano", role: "Tutor Especialista" },
  { img: quizito2, name: "Quizito Cristiano", role: "Expert Tutor" },
  { img: quizito3, name: "Quizito Cristiano", role: "Expert Tutor" },
  { img: quizito4, name: "Quizito Cristiano", role: "Expert Tutor" },
  { img: quizito5, name: "Quizito Cristiano", role: "Expert Tutor" },
  { img: quizito6, name: "Quizito Cristiano", role: "Expert Tutor" },
  { img: quizito7, name: "Quizito Cristiano", role: "Expert Tutor" },
  { img: quizito8, name: "Quizito Cristiano", role: "Expert Tutor" },
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
