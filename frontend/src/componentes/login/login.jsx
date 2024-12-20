import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [userLoggeado, setUserLoggeado] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userNavigate, setUserNavigate] = useState(false);


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = () => {
    if (!email || !password) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const user = { email, password };

    fetch('http://localhost:8080/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(user), //Debemos intalar npm install cors en el backend
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail('');
        setPassword('');
        setUserLoggeado(data);
        localStorage.setItem('token', JSON.stringify(data.token));
      })
      .catch((error) => {
        console.error('error:', error);
      });
  };

  if (userLoggeado.status === 200) {
    setTimeout(() => {
      setUserNavigate(true);
    }, 3000);
  }
  useEffect(() => {
    if (userLoggeado.status === 200) {
      localStorage.setItem('user', JSON.stringify(userLoggeado.data));
    }
  }, [userLoggeado]);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUserLocal(JSON.parse(localStorage.getItem('user')));
    }
  }, [userLoggeado]);

  useEffect(() => {
    if (userNavigate) {
      navigate('/proyectos-caseros');
    }
  }, [navigate, userNavigate]);

  return (
    <div className="login-container">
      {/* Header con título y botón de cierre */}
      <div className="login-header">
        <h2 className="login-title">Ingresar a mi Servipag</h2>
        <button className="close-button">X</button>
      </div>

      {/* Formulario */}
      <div className="login-form">
        <div className="input-group">
          <label>Correo</label>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={handlePassword}
          />
          <div className="show-password">
            <input type="checkbox" onChange={togglePasswordVisibility} />
            <label>Mostrar contraseña</label>
          </div>
        </div>

        {/* Botón Ingresar */}
        <button onClick={handleSubmit} className="submit-button">
          Ingresar
        </button>
      </div>

      {/* Footer con enlaces */}
      <div className="login-footer">
        <Link to="/forgotPassword" className="footer-link">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link to="/registro" className="footer-link">
          ¿Aún no tienes tu registro?
        </Link>
      </div>
    </div>
  );
}

export default Login;