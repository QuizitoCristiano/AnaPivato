import { Box, Stack } from "@mui/material";
import "../../components/Profile.css";
import "../../pages/styles.css";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Anapivato01 from "../../logoImg/ana0.png";
export const MyFooter = () => {
  return (
    <div className="section_container footer_container">
  <span className="bg_bllurs"></span>
  <span className="bg_bllurs footer_bllurs"></span>

  <div className="footer_col">
    <div className="footer_logo">
      <img src={Anapivato01} alt="logo" />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
   
      tellus gravida. Sed nec lacus non ipsum malesuada congue.
    </p>
    <div className="footer_social">
      <a href="#"><FacebookIcon /></a>
      <a href="#"><WhatsAppIcon /></a>
      <a href="#"><InstagramIcon /></a>
      <a href="#"><LinkedInIcon /></a>
    </div>
  </div>

  <div className="footer_col">
    <h4>Company</h4>
    <a href="#">Home</a>
    <a href="#">Sobre</a>
    <a href="#">Contato</a>
    <a href="#">FAQ</a>
  </div>

  <div className="footer_col">
    <h4>About Us</h4>
    <a href="#">Blogs</a>
    <a href="#">Security</a>
    <a href="#">Careers</a>
  </div>

  <div className="footer_col">
    <h4>Contact</h4>
    <a href="#">Contact Us</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms & Conditions</a>
    <a href="#">BMI Calculator</a>
  </div>
</div>

  );
};
