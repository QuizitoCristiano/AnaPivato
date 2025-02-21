import { Stack } from "@mui/material";
import React from "react";
import Anapivato01 from "../logoImg/ana0.png"
export const NewLogoHeader = () => {
  return (
    <Stack>
     
      
      <img
        src={Anapivato01}
        alt="Logo"
        style={{
          height: "60%", 
          width: "auto", 
          cursor: "pointer",
     
          backgroundSize: "cover", 
        }}
      />
 
    </Stack>
  );
};
