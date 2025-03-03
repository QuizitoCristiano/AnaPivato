import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// Cambia el nombre de este componente para evitar conflictos
const CounterComponent = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // Duración de la animación en milisegundos
          const increment = parseFloat(endValue) / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= parseFloat(endValue)) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <h2 ref={ref} style={{ color: "#fff", fontSize: "3rem" }}>
      {count.toLocaleString()}
    </h2>
  );
};

const Achievements = () => {
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
        "@media (max-width: 1343px)": {
          flexDirection: "column",
          margin: "1rem",
          padding: "2rem",
        },
        "@media (max-width: 480px)": {
          padding: "0rem",
          margin: "0.3rem",
          gap: "1rem",
        },
      }}
    >
      <Stack
        sx={{
          width: "640px",
          height: "420px",
          bgcolor: "gray",
          borderRadius: "2rem",
          margin: "2rem",
          padding: "3rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          transition: "all 0.3s ease-in-out",

          background:
            "linear-gradient(135deg, rgba(20, 12, 12, 0.9) 35%,rgb(99, 16, 30) 100%)",
          "@media (max-width: 768px)": {
            width: "100%",
            height: "auto",
            margin: "1rem",
            padding: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: "4rem",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "2rem",
            },
          }}
        >
          <h1 style={{ color: "#d90429", fontSize: "9rem" }}>25</h1>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2.4rem",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              "@media (max-width: 768px)": {
                fontSize: "2rem",
              },
            }}
          >
             Anos de experiência
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
              "@media (max-width: 768px)": {
                fontSize: "1rem",
              },
            }}
          >
            Consultoria empresarial, consultores especializados oferecendo
            aconselhamento e guiando as empresas para melhorar sua eficiência e
            desempenho.
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "2rem",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",

          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            gridGap: "1rem",
          },
          "@media (max-width: 480px)": {
            gridTemplateColumns: "1fr",
            gridGap: "1.5rem",
            marginBottom: "2rem",
          },
        }}
      >
        {[
          { endValue: "100K+", subtitle: "Nossos projetos concluídos" },
          { endValue: "10K+", subtitle: "Nossos produtos naturais" },
          { endValue: "200+", subtitle: "Avaliações de clientes" },
          { endValue: "1000+", subtitle: "Nossos clientes satisfeitos" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              borderRadius: "15px",
              height: "190px",
              background: "rgba(20, 20, 20, 0.9)",
              textAlign: "center",
              transition: "all 0.3s ease-in-out",
              overflow: "hidden",
              "&:hover": {
                transform: "scale(1.04)",

                border: "1px solid #d90429",
              },
              "@media (max-width: 768px)": {
                height: "150px",
                padding: "1rem",
              },
            }}
          >
            <CounterComponent
              sx={{
                color: "#d90429",
                fontSize: "1.3rem",
                fontFamily: "Poppins, sans-serif",
              }}
              endValue={item.endValue}
            />
            <Typography
              sx={{
                color: "#aaa",
                fontSize: "1.3rem",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Achievements;
