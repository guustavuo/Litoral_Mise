import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './home/App.jsx';
import CadastroEvento from './cadastroEvento';

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<CadastroEvento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
