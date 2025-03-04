import { useState } from 'react';
import './App.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

import { MyFooter } from './layout/Footer/Footer';



function App() {
  return (
    
    <BrowserRouter>
      <MainRoutes />
     
    </BrowserRouter>
  
  );
}

export default App;
