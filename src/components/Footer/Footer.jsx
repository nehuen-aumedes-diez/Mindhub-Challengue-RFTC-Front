import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt" />
              <div className="cta-text">
                <h4>Dirección</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-phone" />
              <div className="cta-text">
                <h4>Teléfono</h4>
                <span>9876543210 0</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="far fa-envelope-open" />
              <div className="cta-text">
                <h4>Email</h4>
                <span>mail@info.com</span>
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
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
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
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Nosotros</a>
                </li>
                <li>
                  <a href="#">Tienda</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Suscribite</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
             {/*  <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <i className="fab fa-telegram-plane" />
                  </button>
                </form>
              </div> */}
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
              <p>
                Copyright © 2022, All Right Reserved{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
