import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // reutilizando o mesmo CSS

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Usuário cadastrado com sucesso!');
        navigate('/Login');
      } else {
        alert('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <>
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

      <div className="login-page">
        <div className="login-box">
          <div className="login-left">
            <div className="lock-icon">📝</div>
          </div>
          <div className="login-right">
            <h2>Crie sua conta</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              <button type="submit">Cadastrar</button>
            </form>
            <Link to="/Login" className="back-home-btn">← Já tem conta? Entrar</Link>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <p>&copy; litoralmisenscene2025. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Cadastro;
