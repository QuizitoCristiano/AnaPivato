import React from "react";
import "./StylsAbout.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
const MemberCard = ({ img, name, role }) => {
  return (
    <div className="team_member">
      
      <div className="team_member_image">
        <img src={img} alt={name} />
      </div>

      <div className="team_member_info">
        <h3 style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "1rem",
            marginBottom: "1rem",
  
        }}>{name}</h3>
        <p style={{
            color: "#00a650",
            fontSize: "1.3rem",
            marginBottom: "1rem",
        }}>{role}</p>
      </div>

      <div className="team_membar_socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            sx={{
              color: "#fff",
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon
            sx={{
              color: "#fff",
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            sx={{
              color: "#fff",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
