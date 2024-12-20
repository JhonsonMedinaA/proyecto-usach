import React from 'react';
import image21 from "../../../../src/assets/img/image21";
import image23 from "../../../../src/assets/img/image23";
import image22 from "../../../../src/assets/img/image22";
import './footer.css';

function Footer() {
    return (
      <>

<footer className="footer">
  <div className="footer__container">
      </div>

      <div className="footer__columns">

          <div className="footer__column">
              <h4 className="footer__title">Corporativo</h4>
              <ul className="footer__list">
                  <li>Historia</li>
                  <li>Trabaja con nosotros</li>
                  <li>Ética y cumplimiento</li>
                  <li>Política de Privacidad</li>
                  <li>Términos y Condiciones</li>
              </ul>
          </div>

          <div className="footer__column">
              <h4 className="footer__title">Canales de Atención</h4>
              <ul className="footer__list">
                  <li>yoPAG</li>
                  <li>Sucursales</li>
                  <li>APP Servipag</li>
              </ul>
          </div>


          <div className="footer__column">
              <h4 className="footer__title">Te ayudamos</h4>
              <ul className="footer__list">
                  <li>Preguntas Frecuentes</li>
                  <li>Recupera tu comprobante</li>
                  <li>Recupera tu póliza SOAP</li>
                  <li>Contáctanos</li>
              </ul>
          </div>


          <div className="footer__column">
              <h4 className="footer__title">Aplicaciones disponibles</h4>
              <div className="footer__apps">
                  <img src={image21} alt="image21" />
                  <img src={image23} alt="image23" />
                  <img src={image22} alt="image22" />
              </div>
              
              <div className="footer__certifications">

              </div>
          </div>
      </div>

      <div className="footer__social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
      </div>
</footer>
</>
);
}

export default Footer;