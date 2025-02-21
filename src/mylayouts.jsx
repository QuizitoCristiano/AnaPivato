import React from "react";
import { Stack } from "@mui/material";
import { MyHeader } from './Header/Header';

export const MainLayout = ({ children }) => {
  return (
    <Stack sx={{ width: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <MyHeader /> {/* Se necessário, descomente o MyHeader aqui */}
      <Stack sx={{ width: "100%", flexGrow: 1, mt: 0, height: 'auto' }}>
        {children}  {/* Passando o conteúdo das rotas */}
      </Stack>
    </Stack>
  );
};

