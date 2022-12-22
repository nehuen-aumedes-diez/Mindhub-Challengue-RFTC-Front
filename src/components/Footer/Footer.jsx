import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt" />
                  <div className="cta-text">
                    <h4>Dirección</h4>
                    <a href='https://goo.gl/maps/Vmau94WRA2449swaA' target="_blank">Caaguazú 7101, Liniers, CABA</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone" />
                  <div className="cta-text">
                    <h4>Teléfono</h4>
                    <a href='tel:+541126062011' target="_blank">+54 11 2606 2011</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open" />
                  <div className="cta-text">
                    <h4>Email</h4>
                    <a href='mailto:retrofootballtc@gmail.com?Subject=Contacto%20a%20RFTC' target="_blank">retrofootballtc@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <img
                      src="./logo.png"
                      className="img-fluid logoFooter"
                      alt="logo"
                    />
                  </div>
                  <div className="footer-text">
                    <p>
                      La camiseta no se mancha. Los valores no se negocian. Lo retro nunca pasa de moda. Sé parte del club de fans de la indumentaria deportiva estilo vintage.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f facebook-bg" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter twitter-bg" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g google-bg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Secciones</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>
                      <a href="/nosotros">Nosotros</a>
                    </li>
                    <li>
                      <a href="/camisetasF">Tienda</a>
                    </li>
                    <li>
                      <a href="/contacto">Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Sponsors</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Si tenés un club de fútbol y estás interesado en nuestros productos, mandanos un email o contactanos por teléfono.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </footer>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Retro Football Team Clothing © 2022 - Todos los derechos reservados{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Privacidad</a>
                  </li>
                  <li>
                    <a href="#">Políticas</a>
                  </li>
                  <li>
                    <a href="/contacto">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
