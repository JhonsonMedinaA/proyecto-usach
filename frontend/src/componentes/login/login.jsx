import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [userLoggeado, setUserLoggeado] = useState({});
  const [userLocal, setUserLocal] = useState({});
  const [userNavigate, setUserNavigate] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!email) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const user = { email };

    fetch('http://localhost:8080/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), // Debemos instalar npm install cors en el backend
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail('');
        setUserLoggeado(data);
        localStorage.setItem('token', JSON.stringify(data.token));
      })
      .catch((error) => {
        console.error('Error:', error);
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: '22rem' }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Ingresar</h1>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          </form>
          <div className="mt-3 text-center">
            <Link to="/forgotPassword" className="text-decoration-none">¿Olvidaste tu contraseña?</Link>
          </div>
          <div className="mt-3 text-center">
            <p>No tienes cuenta? <Link to="/registro" className="text-decoration-none">Regístrate</Link> </p>
          </div>
          <div className="mt-3 text-center">
            <Link to="/">
              <button className="btn btn-secondary w-100">Volver</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;