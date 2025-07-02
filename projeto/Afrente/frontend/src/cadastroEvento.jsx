import React, { useEffect, useState } from 'react';
import './home/index.css';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from './api';

function CadastroEvento() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    tipo: '',
    local: '',
    faixaEtaria: '',
    preco: '',
    descricao: '',
  });

  const [eventos, setEventos] = useState([]);

  // Buscar eventos ao carregar a página
  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/eventos`);
      const data = await response.json();
      setEventos(data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/eventos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar evento.");
      }

      alert("Evento cadastrado com sucesso!");
      setFormData({
        nome: '',
        data: '',
        tipo: '',
        local: '',
        faixaEtaria: '',
        preco: '',
        descricao: '',
      });

      fetchEventos(); // Atualizar lista de eventos

    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert("Erro ao cadastrar evento.");
    }
  };

  return (
    <>
      {/* HEADER IGUAL AO APP */}
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

      <main className="container">
        {/* TÍTULO CENTRALIZADO */}
        <h2 className="section-title" style={{ textAlign: 'center', marginTop: '30px' }}>
          Cadastrar Novo Evento
        </h2>

        <form className="formulario-evento" onSubmit={handleSubmit}>
          <label>Nome do Evento:
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </label>

          <label>Data do Evento:
            <input type="datetime-local" name="data" value={formData.data} onChange={handleChange} required />
          </label>

          <label>Tipo do Evento:
            <input type="text" name="tipo" value={formData.tipo} onChange={handleChange} required />
          </label>

          <label>Local:
            <input type="text" name="local" value={formData.local} onChange={handleChange} required />
          </label>

          <label>Faixa Etária:
            <input type="text" name="faixaEtaria" value={formData.faixaEtaria} onChange={handleChange} required />
          </label>

          <label>Preço:
            <input type="number" name="preco" value={formData.preco} onChange={handleChange} required />
          </label>

          <label>Descrição:
            <textarea name="descricao" rows="4" value={formData.descricao} onChange={handleChange} required />
          </label>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
            <Link to="/" className="btn">← Voltar para Home</Link>
            <button type="submit" className="btn">Cadastrar Evento</button>
          </div>
        </form>

        {/* LISTAGEM DE EVENTOS */}
        {/*<h3 style={{ marginTop: '50px' }}>Eventos cadastrados:</h3>
        <div className="events-grid">
          {eventos.length === 0 ? (
            <p style={{ textAlign: 'center' }}>Nenhum evento cadastrado ainda.</p>
          ) : (
            eventos.map((event, index) => (
              <div className="event-card" key={index}>
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
                  {event.descricao && <p>{event.descricao}</p>}

                </div>
              </div>
            ))
          )}
        </div>*/}
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

export default CadastroEvento;
