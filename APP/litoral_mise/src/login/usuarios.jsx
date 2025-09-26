import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [formEdicao, setFormEdicao] = useState({ nome: '', email: '', telefone: '', senha: '' });

  const fetchUsuarios = async () => {
    try {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleEditClick = (user) => {
    setEditandoId(user.id);
    setFormEdicao({ nome: user.nome, email: user.email, telefone: user.telefone, senha: user.senha });
  };

  const handleInputChange = (e) => {
    setFormEdicao({ ...formEdicao, [e.target.name]: e.target.value });
  };

  const salvarEdicao = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formEdicao),
      });

      if (!res.ok) throw new Error('Erro ao atualizar usuário');

      setEditandoId(null);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao salvar edição:', error);
    }
  };

  const excluirUsuario = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;

    try {
      await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <>
      {/* NAV */}
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

      {/* CONTEÚDO */}
      <div className="login-page" style={{ alignItems: 'flex-start' }}>
        <div className="login-box" style={{ flexDirection: 'column', width: '100%', maxWidth: '960px', padding: '30px' }}>
          <h2 style={{ color: '#2b6e7b', marginBottom: '20px', textAlign: 'center' }}>Usuários Cadastrados</h2>

          {usuarios.length === 0 ? (
            <p>Nenhum usuário encontrado.</p>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              width: '100%'
            }}>
              {usuarios.map((user) => (
                <div key={user.id} style={{
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {editandoId === user.id ? (
                    <>
                      <input name="nome" value={formEdicao.nome} onChange={handleInputChange} placeholder="Nome" className="form-input" />
                      <input name="email" value={formEdicao.email} onChange={handleInputChange} placeholder="Email" className="form-input" />
                      <input name="telefone" value={formEdicao.telefone} onChange={handleInputChange} placeholder="Telefone" className="form-input" />
                      <input name="senha" value={formEdicao.senha} onChange={handleInputChange} placeholder="Senha" className="form-input" />

                      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button onClick={() => salvarEdicao(user.id)} className="btn azul">Salvar</button>
                        <button onClick={() => setEditandoId(null)} className="btn cinza">Cancelar</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p><strong>Nome:</strong> {user.nome}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Telefone:</strong> {user.telefone}</p>

                      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button onClick={() => handleEditClick(user)} className="btn azul">Editar</button>
                        <button onClick={() => excluirUsuario(user.id)} className="btn vermelho">Excluir</button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
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

export default Usuarios;
