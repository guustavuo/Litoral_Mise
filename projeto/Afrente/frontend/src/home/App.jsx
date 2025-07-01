import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'; // <-- Adicione isto


function App() {
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
            {[
              {
                date: "25 de Junho, 2025 • 20:00",
                title: "Festival de Música",
                location: "Parque da Cidade",
                img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
              },
              {
                date: "30 de Junho, 2025 • 19:30",
                title: "Exposição de Arte Moderna",
                location: "Galeria Central",
                img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
              },
              {
                date: "2 de Julho, 2025 • 16:00",
                title: "Festival Gastronômico",
                location: "Praça das Artes",
                img: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852",
              },
              {
                date: "5 de Julho, 2025 • 21:00",
                title: "Show de Jazz",
                location: "Blue Note Club",
                img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf",
              },
              {
                date: "10 de Julho, 2023 • 19:00",
                title: "Peça de Teatro",
                location: "Teatro Municipal",
                img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
              },
              {
                date: "15 de Julho, 2023 • 14:00",
                title: "Festival de Cinema",
                location: "Cinemark Shopping",
                img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
              }
            ].map((event, index) => (
              <div className="event-card" key={index}>
                <div
                  className="event-image"
                  style={{ backgroundImage: `url('${event.img}')` }}
                ></div>
                <div className="event-details">
                  <div className="event-date">{event.date}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-location">
                    <i className="fas fa-map-marker-alt"></i> {event.location}
                  </div>
                  <a href="#" className="btn">Ver Detalhes</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="box">
          <h2 className="section-title">Eventos por categoria</h2>
        </div>

        <div className="carousel">
          <div className="carousel-images">
            {["Cinema", "Teatro", "Musica", "Pintura", "Shows", "Dança"].map((cat) => (
              <div className="image-wrapper">
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
