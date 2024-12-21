import React from 'react';
import Img1 from '../../assets/img2/img1.png'
import './navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg fon">
  <div className="container-fluid">
 <img src={Img1} alt=""  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link color" href="#">Como funciona</a>
        </li>
        <li className="nav-item">
          <a className="nav-link color" href="#">Servipag Empresas</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link color" href="#">Sucursales y Yo PAG</a>
        </li>
        <Link to="/pagos">
        <li className="nav-item">
        <a  className="nav-link bg-warning">Mi Servipag</a>
        </li>
        </Link>
        <Link to="/registro">
        <li className="nav-item">
        <a  className="nav-link bg-dark ml-3">Registrate</a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>


      
    </>
  );
}

export default Navbar;