import React from 'react';
import Im1 from "../../assets/img2/im1.png";
import Im2 from "../../assets/img2/im2.png";
import Im3 from "../../assets/img2/im3.png";
import './footer.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="footer__title">Corporativo</h4>
                        <ul className="list-unstyled">
                            <li>Historia</li>
                            <li>Trabaja con nosotros</li>
                            <li>Ética y cumplimiento</li>
                            <li>Política de Privacidad</li>
                            <li>Términos y Condiciones</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer__title">Canales de Atención</h4>
                        <ul className="list-unstyled">
                            <li>yoPAG</li>
                            <li>Sucursales</li>
                            <li>APP Servipag</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer__title">Te ayudamos</h4>
                        <ul className="list-unstyled">
                            <li>Preguntas Frecuentes</li>
                            <li>Recupera tu comprobante</li>
                            <li>Recupera tu póliza SOAP</li>
                            <li>Contáctanos</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer__title">Aplicaciones disponibles</h4>
                        <div className="footer__apps mb-3">
                            <img src={Im1} alt="image21" className="img-fluid" />
                            <img src={Im2} alt="image23" className="img-fluid" />
                            <img src={Im3} alt="image22" className="img-fluid" />
                        </div>
                        <div className="footer__certifications">
                            {/* Aquí puedes agregar las certificaciones si las tienes */}
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <i className="fab fa-facebook-f mx-2"></i>
                        <i className="fab fa-twitter mx-2"></i>
                        <i className="fab fa-youtube mx-2"></i>
                        <i className="fab fa-instagram mx-2"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;