import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_BASE_URL } from './api';
import './home/index.css';

function EventoDetalhes() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/eventos/${id}`)
      .then(res => res.json())
      .then(data => setEvento(data))
      .catch(err => console.error("Erro ao buscar evento:", err));
  }, [id]);

  if (!evento) return <p style={{ textAlign: 'center' }}>Carregando evento...</p>;

  return (
    <>
      {/* Header */}
      <nav>
        <div className="nav-container">
          <a href="/" className='logo'><img src="../src/assets/logo_escura.png" alt="Logo" /></a>
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

      {/* Capa do evento */}
      <header
        className="event-banner"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1200x400/?${evento.tipo}')`,
        }}
      >
        <div className="overlay">
          <h1 className="event-title-banner">{evento.nome}</h1>
        </div>
      </header>

      <main className="container evento-detalhes-container">
        <div className="evento-info">
          <p><i className="fas fa-calendar-alt"></i> <strong>Data:</strong> {new Date(evento.data).toLocaleString('pt-BR')}</p>
          <p><i className="fas fa-map-marker-alt"></i> <strong>Local:</strong> {evento.local}</p>
          <p><i className="fas fa-tag"></i> <strong>Categoria:</strong> {evento.tipo}</p>
        </div>

        <div className="evento-descricao">
          <h2>Descrição</h2>
          <p>{evento.descricao}</p>
        </div>

        <Link to="/" className="btn voltar-btn">← Voltar</Link>
      </main>

      {/* Footer */}
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

      <style>{`
        .event-banner {
          background-size: cover;
          background-position: center;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .event-title-banner {
          color: #fff;
          font-size: 2.5rem;
          background: transparent;
          text-align: center;
        }

        .evento-detalhes-container {
          max-width: 800px;
          margin: 40px auto;
        }

        .evento-info p {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #333;
        }

        .evento-info i {
          color: #416D78;
          margin-right: 8px;
        }

        .evento-descricao {
          margin-top: 30px;
        }

        .evento-descricao h2 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #2c3e50;
        }

        .evento-descricao p {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .voltar-btn {
          margin-top: 30px;
          background-color: #416D78;
        }

        .voltar-btn:hover {
          background-color: #2f5058;
        }
      `}</style>
    </>
  );
}

export default EventoDetalhes;
