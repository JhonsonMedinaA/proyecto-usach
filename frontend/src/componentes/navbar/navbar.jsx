import React from 'react';
import Img1 from '../../assets/img2/img1.png';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fon">
        <div className="container-fluid">
          <img src={Img1} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link color" href="#">Servipag Empresas</a>
              </li>
              <li className="nav-item cambio">
                <Link to="/main1" className="nav-link color">Comentarios</Link>
              </li>
              <li className="nav-item">
                <Link to="/pagos" className="nav-link bg-warning color">Mi Servipag</Link>
              </li>
              <li className="nav-item">
                <Link to="/registro" className="nav-link bg-dark ml-3 color">Registrate</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link color">Ir a Inicio</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;