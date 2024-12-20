import React from 'react';
import logo from "../../../assets/img/logo.png";
import banner from "../../../assets/img/banner.png";
import './section.css';

function Section() {
  return (
    <>

      <header className="header">
        <div className="header__container">
          <img src={logo} alt="Logo" className="header__logo" />
          <nav className="header__nav">
            <a href="#" className="header__link">Cómo funciona</a>
            <a href="#" className="header__link">Servipag Empresas</a>
            <a href="#" className="header__link">Sucursales y YO PAG</a>
          </nav>
          <div className="header__buttons">
            <button className="header__button header__button--dark">Mi Servipag</button>
            <button className="header__button header__button--yellow">Regístrate</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <h1 className="hero__title">Paga tus cuentas</h1>
            <p className="hero__description">de forma directa, fácil y sencilla.</p>
            <button className="hero__button">Pago rápido</button>
          </div>
          <div className="hero__image">
            <img src={banner} alt="Banner" />
          </div>
        </div>
      </section>

      <section className="process">
        <h2 className="process__title">¿Cómo pagar una cuenta sin registro?</h2>
        <div className="process__steps">
          <div className="process__step">
            <i className="fas fa-search process__icon"></i>
            <p className="process__description">Buscar el servicio</p>
          </div>
          <div className="process__step">
            <i className="fas fa-building process__icon"></i>
            <p className="process__description">Selecciona la empresa</p>
          </div>
          <div className="process__step">
            <i className="fas fa-dollar-sign process__icon"></i>
            <p className="process__description">Realizar el pago</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
