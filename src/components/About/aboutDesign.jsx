import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// const skills = [
//   {
//     category: "Design Skill",
//     skills: [
//       { name: "PHOTOSHOP", percentage: 100 },
//       { name: "FIGMA", percentage: 85 },
//       { name: "ADOBE XD", percentage: 60 },
//       { name: "ADOBE ILLUSTRATOR", percentage: 70 },
//     ],
//   },
//   {
//     category: "Development Skill",
//     skills: [
//       { name: "HTML", percentage: 100, percentagetex: `${100}:%` },
//       { name: "CSS", percentage: 95 },
//       { name: "JavaScript", percentage: 60 },
//       { name: "PHP/WordPress", percentage: 75 },
//     ],
//   },
// ];

const skills = [
  {
    category: "Formação Acadêmica & Conhecimento",
    skills: [
      { name: "Comunicação & Persuasão", percentage: 100 },
      { name: "Gestão de Negócios & Estratégia", percentage: 90 },
      { name: "Psicologia do Consumo", percentage: 85 },
      { name: "Análise de Dados & Métricas", percentage: 80 },
      { name: "Comportamento do Usuário", percentage: 85 },
    ],
  },
  {
    category: "Habilidades em Marketing Digital",
    skills: [
      { name: "SEO & Posicionamento no Google", percentage: 90 },
      { name: "Tráfego Pago (Google Ads & Meta Ads)", percentage: 100 },
      { name: "Copywriting & Escrita Persuasiva", percentage: 85 },
      { name: "Funis de Venda & Automação", percentage: 80 },
      { name: "Marketing de Conteúdo & Branding", percentage: 85 },
    ],
  },
];

const ProgressBar = ({ name, percentagetex = "", percentage, delay }) => {
  const [progress, setProgress] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setProgress(percentage);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [percentage, delay]);

  return (
    <Box ref={barRef} sx={{ width: "100%", my: 2 }}>
      <Typography sx={{ color: "#fff", marginBottom: "2rem" }}>
        {name}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "10px",
          background: "#222",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: `${progress}%`,
            height: "100%",
            background: "red",
            borderRadius: "5px",
            transition: "width 2s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

const AboutDesignDeveloperSkill = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: "2rem",
        margin: "2rem",
        padding: "3rem",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
        "@media (max-width: 1291px)": {
          flexDirection: "column",
          margin: "1rem",
          padding: "1rem",
       
        },
        "@media (max-width: 480px)": {
          padding: "0rem",
          margin: "0.3rem",
          gap: "0.3rem",
     
        },
      }}
    >
      {skills.map((section, index) => (
        <Stack
          key={index}
          sx={{
            width: "50%",
            minWidth: "300px",
            "@media (max-width: 1291px)": {
              flexDirection: "column",
              margin: "1rem",
              padding: "1rem",
              bgcolor: "",
              width: "100%",
            },

            "@media (max-width: 820px)": {
              flexDirection: "column",
              margin: "1rem",
              padding: "1rem",
              bgcolor: "",
              width: "100%",
            },

            "@media (max-width: 480px)": {
              padding: "0rem",
              margin: "0.3rem",
              gap: "0.3rem",
              width: "100%",
            
            },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {section.category}
          </Typography>
          {section.skills.map((skill, i) => (
            <ProgressBar
              key={i}
              name={skill.name}
              percentage={skill.percentage}
              delay={i * 500}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default AboutDesignDeveloperSkill;
