import { useState } from 'react';
import './App.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { SingniIn } from './Singni_In/login';
import { MyFooter } from './layout/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
       <MyFooter />
    </BrowserRouter>
  );
}

export default App;
