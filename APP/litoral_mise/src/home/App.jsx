import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './index.css';
import { API_BASE_URL } from '../api';

function App() {
  const [eventos, setEventos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [formEdicao, setFormEdicao] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/eventos`)
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error("Erro ao buscar eventos:", err));
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Tem certeza que deseja excluir este evento?')) {
      try {
        await fetch(`${API_BASE_URL}/eventos/${id}`, {
          method: 'DELETE'
        });
        setEventos(prev => prev.filter(e => e.id !== id));
      } catch (err) {
        console.error('Erro ao deletar evento:', err);
      }
    }
  };

  const handleEdit = (evento) => {
    setEditandoId(evento.id);
    setFormEdicao({ ...evento });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEdicao(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await fetch(`${API_BASE_URL}/eventos/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formEdicao)
      });
      setEventos(prev => prev.map(e => e.id === editandoId ? formEdicao : e));
      setEditandoId(null);
    } catch (err) {
      console.error('Erro ao atualizar evento:', err);
    }
  };

  return (
    <>
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

      <section className="hero">
        <div className="container">
          <h1>Descubra os Melhores Eventos da Cidade</h1>
          <p>Sua agenda cultural completa com shows, exposições, teatro, gastronomia e muito mais.</p>
          <a href="/eventos" className="btn">Explorar Eventos</a>
        </div>
      </section>

      <main>
        <div className="container">
          <h2 className="section-title">Próximos Eventos</h2>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <Link to="/cadastro" className="btn">+ Adicionar Evento</Link>
          </div>

          {/*<div className="category-filters">
            <button className="filter-btn active">Todos</button>
            <button className="filter-btn">Música</button>
            <button className="filter-btn">Arte</button>
            <button className="filter-btn">Teatro</button>
            <button className="filter-btn">Gastronomia</button>
            <button className="filter-btn">Cinema</button>
          </div>*/}

          <div className="events-grid">
            {eventos.length === 0 ? (
              <p>Nenhum evento encontrado.</p>
            ) : (
              eventos.map((event, index) => (
                <div className="event-card" key={index}>
                  
                  <div className="event-details">
                    {editandoId === event.id ? (
                      <div className="edit-form">
                        <input name="nome" value={formEdicao.nome} onChange={handleChange} />
                        <input name="data" value={formEdicao.data} onChange={handleChange} />
                        <input name="tipo" value={formEdicao.tipo} onChange={handleChange} />
                        <input name="local" value={formEdicao.local} onChange={handleChange} />
                        <textarea name="descricao" value={formEdicao.descricao} onChange={handleChange} />
                        <button onClick={handleUpdate} className="btn edit-btn">Salvar</button>
                      </div>
                    ) : (
                      <>
                        <div className="event-date">
                          {new Date(event.data).toLocaleString('pt-BR')}
                        </div>
                        <h3 className="event-title">{event.nome}</h3>
                        <div className="event-location">
                          <i className="fas fa-map-marker-alt"></i> {event.local}
                        </div>
                        {event.descricao && <p>{event.descricao}</p>}
                        <Link to={`/evento/${event.id}`} className="btn">Ver Detalhes</Link>

                        <div className="btn-group">
                          <button onClick={() => handleEdit(event)} className="btn edit-btn">Editar</button>
                          <button onClick={() => handleDelete(event.id)} className="btn delete-btn">Excluir</button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/*<div className="box">
          <h2 className="section-title">Eventos por categoria</h2>
        </div>

        <div className="carousel">
          <div className="carousel-images">
            {["Cinema", "Teatro", "Musica", "Pintura", "Shows", "Dança"].map((cat, index) => (
              <div className="image-wrapper" key={index}>
                <a href="teste.html">
                  <img src={`src/assets/${cat}.png`} alt={cat} />
                </a>
              </div>
            ))}
          </div>
        </div>*/}

        <section className="newsletter">
          <div className="container">
            <h2>Receba as Novidades</h2>
            <p>Inscreva-se para receber informações sobre os próximos eventos.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Seu e-mail" />
              <button type="submit">Inscrever</button>
            </form>
          </div>
        </section>
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

      <style>{`
        .edit-btn {
          background-color: #007bff;
          color: white;
          margin-right: 10px;
        }
        .delete-btn {
          background-color: #dc3545;
          color: white;
        }
        .edit-form input,
        .edit-form textarea {
          display: block;
          margin: 5px 0;
          width: 100%;
          padding: 8px;
        }
        .btn-group {
          margin-top: 10px;
          display: flex;
          gap: 10px;
          background-color: #CFEEF7;
        }
      `}</style>
    </>
  );
}

export default App;
