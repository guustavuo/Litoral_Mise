import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../api';

function App() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/eventos`)
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error("Erro ao carregar eventos:", err));
  }, []);

  const deletarEvento = async (id) => {
    const confirmar = window.confirm('Tem certeza que deseja deletar este evento?');
    if (!confirmar) return;

    try {
      const response = await fetch(`${API_BASE_URL}/eventos/${id}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Evento deletado com sucesso.');
        setEventos(eventos.filter(e => e.id !== id));
      } else {
        const erro = await response.json();
        alert('Erro ao deletar: ' + erro.error);
      }
    } catch (error) {
      alert('Erro ao deletar evento.');
    }
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="#" className='logo'><img src="src/assets/logo_escura.png" alt="Logo" /></a>
          <a href="#" className="nome">Litoral mise-en-scène</a>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Locais</a></li>
            <li><a href="contato.html">Contato</a></li>
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
          <a href="#" className="btn">Explorar Eventos</a>
        </div>
      </section>

      <main>
        <div className="container">
          <h2 className="section-title">Próximos Eventos</h2>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <Link to="/cadastro" className="btn">+ Adicionar Evento</Link>
          </div>

          <div className="category-filters">
            <button className="filter-btn active">Todos</button>
            <button className="filter-btn">Música</button>
            <button className="filter-btn">Arte</button>
            <button className="filter-btn">Teatro</button>
            <button className="filter-btn">Gastronomia</button>
            <button className="filter-btn">Cinema</button>
          </div>

          <div className="events-grid">
            {eventos.length === 0 ? (
              <p>Nenhum evento encontrado.</p>
            ) : (
              eventos.map((event) => (
                <div className="event-card" key={event.id}>
                  <div
                    className="event-image"
                    style={{
                      backgroundImage: `url('https://source.unsplash.com/400x250/?${event.tipo}')`
                    }}
                  ></div>
                  <div className="event-details">
                    <div className="event-date">{new Date(event.data).toLocaleString('pt-BR')}</div>
                    <h3 className="event-title">{event.nome}</h3>
                    <div className="event-location">
                      <i className="fas fa-map-marker-alt"></i> {event.local}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                      <Link to={`/editar/${event.id}`} className="btn">Editar</Link>
                      <button className="btn" onClick={() => deletarEvento(event.id)}>Deletar</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="box">
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
        </div>

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
    </>
  );
}

export default App;
