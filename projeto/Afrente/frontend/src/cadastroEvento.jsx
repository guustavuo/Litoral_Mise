import React, { useState } from 'react';
import './home/index.css';
import { Link } from 'react-router-dom';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Evento cadastrado:', formData);
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
  };

  return (
    <>
      {/* HEADER IGUAL AO APP */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            <img src="src/assets/logo_escura.png" alt="Logo" />
          </a>
          <a href="#" className="nome">Litoral mise-en-scène</a>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
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

      <main className="container">
        {/* TÍTULO CENTRALIZADO */}
        <h2 className="section-title" style={{ textAlign: 'center', marginTop: '30px' }}>
          Cadastrar Novo Evento
        </h2>

        <form className="formulario-evento" onSubmit={handleSubmit}>
          <label>
            Nome do Evento:
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </label>

          <label>
            Data do Evento:
            <input type="datetime-local" name="data" value={formData.data} onChange={handleChange} required />
          </label>

          <label>
            Tipo do Evento:
            <input type="text" name="tipo" value={formData.tipo} onChange={handleChange} required />
          </label>

          <label>
            Local:
            <input type="text" name="local" value={formData.local} onChange={handleChange} required />
          </label>

          <label>
            Faixa Etária:
            <input type="text" name="faixaEtaria" value={formData.faixaEtaria} onChange={handleChange} required />
          </label>

          <label>
            Preço:
            <input type="number" name="preco" value={formData.preco} onChange={handleChange} required />
          </label>

          <label>
            Descrição:
            <textarea name="descricao" rows="4" value={formData.descricao} onChange={handleChange} required />
          </label>

          {/* BOTÕES ALINHADOS À DIREITA */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px', fontSize: '10px' }}>
            <Link to="/" className="btn">← Voltar para Home</Link>
            <button type="submit" className="btn">Cadastrar Evento</button>
          </div>
        </form>
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
