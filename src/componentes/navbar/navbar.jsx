import React from 'react';
import logo from "../../../src/assets/img/logo.png";
import banner from "../../../src/assets/img/banner.png";
import './navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={logo} alt="Logo" className="header__logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Como funciona</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servipag Empresas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sucursales y Yo PAG</a>
        </li>
        <li className="nav-item">
        <button className="header__button header__button--dark">Mi Servipag</button>
        </li>
        <li className="nav-item">
        <button className="header__button header__button--yellow">Regístrate</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </>
  );
}

export default Navbar;
