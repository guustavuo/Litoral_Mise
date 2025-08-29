// src/pages/EventoDetalhes.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from './api';
import './home/index.css';

function EventoDetalhes() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/eventos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Evento não encontrado");
        return res.json();
      })
      .then(data => setEvento(data))
      .catch(err => setErro(err.message));
  }, [id]);

  if (erro) return <div className="container"><p>{erro}</p></div>;
  if (!evento) return <div className="container"><p>Carregando...</p></div>;

  return (
    <>
      {/* Reutilizando seu nav e footer */}
      <nav>
        <div className="nav-container">
          <a href="/" className='logo'><img src="/src/assets/logo_escura.png" alt="Logo" /></a>
          <a href="/" className="nome">Litoral mise-en-scène</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/eventos">Categorias</a></li>
            <li><a href="/cadastro/user">Cadastro</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/usuarios">Usuários</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <h2 className="section-title">{evento.nome}</h2>
        <div className="event-card">
          <div className="event-details">
            <p><strong>Data:</strong> {new Date(evento.data).toLocaleString('pt-BR')}</p>
            <p><strong>Tipo:</strong> {evento.tipo}</p>
            <p><strong>Local:</strong> {evento.local}</p>
            <p><strong>Faixa Etária:</strong> {evento.faixaEtaria}</p>
            <p><strong>Preço:</strong> R$ {evento.preco?.toFixed(2)}</p>
            <p><strong>Descrição:</strong> {evento.descricao}</p>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <p>&copy; 2023 Agenda Cultural. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default EventoDetalhes;
