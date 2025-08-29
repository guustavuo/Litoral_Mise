import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './home/App.jsx';
import CadastroEvento from './cadastroEvento';
import Login from './login/Login.jsx'; // Importando o componente de Login
import Eventos from './eventos.jsx';
//import EventoDetalhes from './EventoDetalhes.jsx';
import Cadastro from './login/cadastro.jsx'; // Importando o componente de Cadastro
import Usuarios from './login/usuarios.jsx'; // Importando o componente de Usuários
import EventoDetalhes from './EventoDetalhes.jsx'; // Importando o componente de detalhes do evento

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<CadastroEvento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventos" element={<Eventos />} />
        {/*<Route path="/eventos/:id" element={<EventoDetalhes />} />*/}
        <Route path="/cadastro/user" element={<Cadastro />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/evento/:id" element={<EventoDetalhes />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
