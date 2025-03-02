import React from "react";
import "./Profile.css";
import "../pages/styles.css";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import anapsjpg from "../logoImg/quizito1.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


export const SmallFooter = () => {
  return (
    <div className="review">
    <div className="section_container review_container">
      <span className="review_icons">
        <DoubleArrowIcon
          sx={{
            fontSize: "6rem",
          }}
        />
      </span>
  
      <div className="review_content">
       
        <h4>✨ AVALIAÇÃO DO MEMBRO</h4>
  
        <p>
          Uma experiência incrível! O suporte, a qualidade e a inovação fazem toda a 
          diferença. Desde o primeiro contato, pude perceber o compromisso com a excelência. 
          Recomendo para todos que buscam profissionalismo e resultados! 🚀
        </p>
  
        <div className="review_rating">
          <span>
            <GradeIcon />
          </span>
          <span>
            <GradeIcon />
          </span>
          <span>
            <GradeIcon />
          </span>
          <span>
            <GradeIcon />
          </span>
          <span>
            <StarHalfIcon />
          </span>
        </div>
  
        <div className="review_footer">
          <div className="review_member">
            <img src={anapsjpg} alt="Foto do membro" />
            <div className="review_member_details">
              <h4>Quizito Cristiano Agostinho</h4>
              <p>Software Developer</p>
            </div>
          </div>
  
          <div className="review_nav">
            <span>
              <ArrowBackIcon />
            </span>
            <span>
              <ArrowForwardIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};
