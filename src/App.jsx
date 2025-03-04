import { useState } from 'react';
import './App.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

import { MyFooter } from './layout/Footer/Footer';
import { AuthProvider } from './authcontext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <MainRoutes />
     
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
