import React, { Profiler, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import "./Profile.css";
import "../pages/styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
export const ProfileCard = () => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "",
        margin: "auto",
        padding: "1rem",

        borderRadius: "10px",
       
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
        marginBottom: "1rem",
      }}
    >
      <Stack className="explore_container">
        <div className="explore_header">
          <h2 className="section_header">EXPLORE OUR PROGRAM</h2>

          <div className="explore_nav">
            <span>
              <ArrowBackIcon />
            </span>
            <span>
              <ArrowForwardIcon />
            </span>
          </div>
        </div>

        <div className="explore_grid">
          <div className="explore_card">
            <span>
              <AddHomeWorkIcon />
            </span>
            <h4>Uma Escolha Perfeita</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              sx={{
                background: "#d90429",
                border: "none !important",
                outline: "none !important",
                color: "#fff",
                padding: "8px 5px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
                transition: "all 0.3s",
                "&:hover": { background: "#e83c4a" },
                "&:disabled": { background: "#ccc" },
                "@media (max-width: 900px)": {
                  minWidth: "100px",
                },
              }}
            >
              Saiba mais
            </Button>
          </div>

          <div className="explore_card">
            <span>
              <SportsKabaddiIcon />
            </span>
            <h4>Um Ótimo Planejamene</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              sx={{
                background: "#d90429",
                border: "none !important",
                outline: "none !important",
                color: "#fff",
                padding: "8px 5px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
                transition: "all 0.3s",
                "&:hover": { background: "#e83c4a" },
                "&:disabled": { background: "#ccc" },
                "@media (max-width: 900px)": {
                  minWidth: "100px",
                },
              }}
            >
              Saiba mais
            </Button>
          </div>

          <div className="explore_card">
            <span>
              <Diversity1Icon />
            </span>
            <h4>Novas Plataforma</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              sx={{
                background: "#d90429",
                border: "none !important",
                outline: "none !important",
                color: "#fff",
                padding: "8px 5px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
                transition: "all 0.3s",
                "&:hover": { background: "#e83c4a" },
                "&:disabled": { background: "#ccc" },
                "@media (max-width: 900px)": {
                  minWidth: "100px",
                },
              }}
            >
              Saiba mais
            </Button>
          </div>

          <div className="explore_card">
            <span>
              <SchoolIcon />
            </span>

            <h4>Ana claudia</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              sx={{
                background: "#d90429",
                border: "none !important",
                outline: "none !important",
                color: "#fff",
                padding: "8px 5px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
                transition: "all 0.3s",
                "&:hover": { background: "#e83c4a" },
                "&:disabled": { background: "#ccc" },
                "@media (max-width: 900px)": {
                  minWidth: "100px",
                },
              }}
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};
