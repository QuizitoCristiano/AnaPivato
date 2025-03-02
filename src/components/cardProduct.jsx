import React, { Profiler, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import "./Profile.css";
import "../pages/styles.css";
;
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import anjpg from "../logoImg/an.jpg";
import anapsjpg from "../logoImg/ana03.jpg";
export const CardProduct = () => {
  return (
    <>
      <Stack>
        <div className="section_container class_container">
          <div className="class_image">
          <Box className="bgl_bllurs"></Box>
          <img src={anjpg} alt="" className="class_img-1" />
            <img src={anapsjpg} alt="" className="class_img-2"/>
          </div>

          <div className="class_content">
            <h2 className="section_header">THE CALASS YOU WILL GET HERE</h2>
            <p>
            Descubra um mundo de aprendizado e crescimento! Nossos cursos oferecem 
            uma abordagem prática para transformar sua experiência e potencial. 
            Junte-se a nós e comece sua jornada hoje!
          </p>

            <Button
              sx={{
                background: "#d90429",
                border: "none !important",
                outline: "none !important",
                color: "#fff",
                padding: "15px 12px",
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
              startIcon={<AddHomeWorkIcon />}
            >
                Comprar Agora
            </Button>
          </div>
        </div>
      </Stack>
    </>
  );
};
