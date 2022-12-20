import React from "react";
import "./CardHome.css";
import { Link, Link as LinkRouter } from 'react-router-dom';

export default function CardHome() {
  return (
    <div id="containerGeneralCardHome">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <section className="hero-section">
      <h2 className="tituloNuestrosProductos">- Catálogo de Productos -</h2>
        <div className="card-grid" data-aos="zoom-in" data-aos-duration="1000" >
          <LinkRouter className="cardHome" to='/camisetasF'>
            <div className="card__background"
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/WOMEN-SQUARE-SOL_720x.png?v=1603886812)",
              }}
            />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Camisetas Mujer</h3>
            </div>
          </LinkRouter>
          <LinkRouter className="cardHome" to='/camisetasM'>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/MODEL-SOL-ALBI_720x.png?v=1571493500)",
              }}
            />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Camisetas Hombre</h3>
            </div>
          </LinkRouter>
          <LinkRouter className="cardHome" to='/buzos'>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/MODEL-HOODIE-DIABLO_720x.png?v=1571518856)",
              }}
            />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Buzos</h3>
            </div>
          </LinkRouter>
          <LinkRouter className="cardHome" to='/gorras'>
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/IMG_0121_720x.jpg?v=1654540849)",
              }}
            />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Gorras</h3>
            </div>
          </LinkRouter>
          <div></div>
        </div>
      </section>
    </div>
  );
}
