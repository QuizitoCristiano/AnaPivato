import { useState } from 'react';
import './App.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { SingniIn } from './Singni_In/login';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
       {/* <SingniIn /> */}
    </BrowserRouter>
  );
}

export default App;
