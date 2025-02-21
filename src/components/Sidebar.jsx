import React from "react";
import { Box, Stack } from "@mui/material";
import "./Profile.css";
import "../pages/styles.css";
import anapsjpg from "../logoImg/SaveClip.App.jpg";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
export const MySidebar = () => {
  return (
    <>
      <div className="section_container join_container">
        <h2 className="section_Fortheader">AMOR, CONEXÕES E FAMILIARIDADE</h2>
        <p className="section_subheader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
          consectetur, 
          tellus  tristique.
        </p>

        <div className="join_image">
          <img src={anapsjpg} alt="" />

          <div className="join_grid">
            <div className="join_card">
              <span>
                <VerifiedUserIcon />
              </span>

              <div className="join_card_content">
                <h4>Careter e Performance</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="join_card">
              <span>
                <VideoCameraBackIcon />
              </span>

              <div className="join_card_content">
                <h4>Disponipilidade</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="join_card">
              <span>
              <AssuredWorkloadIcon/>
              </span>

              <div className="join_card_content">
                <h4>Facilidade Sem Limete</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
