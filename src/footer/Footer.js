import React from "react";
import './footer.css'
import Redes from "../redes-sociales/Redes";

export default function Footer() {
    return(
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta">
                <div className="prueba">
                        <div className="single-cta">
                            <div className="cta-text">
                                <h4>Visítanos</h4>
                                <span>Rivadavia 2000, CABA</span>
                               <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7881145068586!2d-58.39696988437013!3d-34.60951906531297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae823bdbf49%3A0x4dc9eb037dfee9bf!2sRivadavia%202000%2C%20C1033AAW%20CABA!5e0!3m2!1ses!2sar!4v1670968961908!5m2!1ses!2sar" width="250" height="50"></iframe></div> 
                            </div>
                        </div>
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Teléfono de contacto</h4>
                                <span>11-2252-5301</span>
                            </div>
                        </div>
                        <div className="single-cta">
                            <div className="cta-text">
                                <h4>Envíanos un correo</h4>
                                <span>rftc@info.com</span>
                            </div>
                        </div>
                    </div>    
                     <div className="single-img">
            <img className="image-footer" src="./logo_el_posta_posta.png"></img>
            </div>
            </div>
            
            <div className="footer-content">
                <div>
                    <div className="">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Síguenos en nuestras redes</h3>
                                <Redes></Redes>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="footer-widgeta">
                            <div className="footer-widget-heading">
                                <h3>Enlaces útiles</h3>
                            </div>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Contacto</a></li>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Tienda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}