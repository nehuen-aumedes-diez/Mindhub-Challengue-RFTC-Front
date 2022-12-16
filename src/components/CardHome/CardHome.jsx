import React from "react";
import "./CardHome.css";

export default function CardHome() {
  return (
    <div id="containerGeneralCardHome">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <section className="hero-section">
      <h2 className="tituloNuestrosProductos">- Catálogo de Productos -</h2>
        <div className="card-grid" data-aos="zoom-in" data-aos-duration="1000">
          <a className="card" href="#">
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
          </a>
          <a className="card" href="#">
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
          </a>
          <a className="card" href="#">
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
          </a>
          <a className="card" href="#">
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
          </a>
          <div></div>
        </div>
      </section>
    </div>
  );
}
