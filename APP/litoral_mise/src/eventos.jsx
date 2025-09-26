import React, { useEffect, useState } from 'react';
import './home/index.css';
import { API_BASE_URL } from './api';
import { Link } from 'react-router-dom';

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [filtro, setFiltro] = useState('todos');

  const tipos = [
    'gastronomia',
    'musical',
    'concerto',
    'literatura',
    'teatro',
    'cinema',
    'religião'
  ];

  useEffect(() => {
    const buscarEventos = async () => {
      try {
        let url;
        if (filtro === 'todos') {
          url = `${API_BASE_URL}/eventos`;
        } else {
          url = `${API_BASE_URL}/eventos/tipo/${encodeURIComponent(filtro)}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setEventos(data);
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
      }
    };
    buscarEventos();
  }, [filtro]);

  return (
    <>
      {/* HEADER */}
      <nav>
        <div className="nav-container">
          <a href="/" className='logo'><img src="src/assets/logo_escura.png" alt="Logo" /></a>
          <a href="/" className="nome">Litoral mise-en-scène</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/eventos">Categorias</a></li>
            <li><a href="/cadastro/user">Cadastro</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/usuarios">Usuários</a></li>
          </ul>
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <main>
        <div className="container">
          <h2 className="section-title">Eventos por categoria</h2>

          <div className="category-filters">
            <button
              className={`filter-btn ${filtro === 'todos' ? 'active' : ''}`}
              onClick={() => setFiltro('todos')}
            >
              Todos
            </button>
            {tipos.map(tipo => (
              <button
                key={tipo}
                className={`filter-btn ${filtro === tipo ? 'active' : ''}`}
                onClick={() => setFiltro(tipo)}
              >
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
              </button>
            ))}
          </div>

          <div className="events-grid">
            {Array.isArray(eventos) && eventos.length > 0 ? (
              eventos.map((event, index) => (
                <div className="event-card" key={index}>
                  <div className="event-details">
                    <div className="event-date">
                      {new Date(event.data).toLocaleString('pt-BR')}
                    </div>
                    <h3 className="event-title">{event.nome}</h3>
                    <div className="event-location">
                      <i className="fas fa-map-marker-alt"></i> {event.local}
                    </div>
                    {event.descricao && <p>{event.descricao}</p>}
                    <a href="#" className="btn">Ver Detalhes</a>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum evento encontrado.</p>
            )}
          </div>
        </div>
      </main>

      {/* FOOTER */}
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

export default Eventos;
