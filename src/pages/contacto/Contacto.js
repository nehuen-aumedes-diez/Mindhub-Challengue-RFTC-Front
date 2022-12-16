import React from "react";
import "./contacto.css";

export default function Contacto() {
  return (
    <div id="containerGeneralContacto">
        <div className="cuerpo-contacto">
      <div class="container-contacto">
        <h1 class="brand">
          <h2 className="tituloConsulta-Contacto">¿Tenés alguna consulta?</h2>
        </h1>
        <div class="wrapperContacto">
          <div class="company-info">
            <h3>Retro Football Team Clothing</h3>
            <p>Teléfono: 011 2252-5309</p>
            <p>Email: rftc@info.com</p>
            <p>Dirección: Av. Rivadavia 2000, CABA</p>
            <div className="iconos-contacto">
              <a>
                {" "}
                <img src="./gmail.png" width={"50px"}></img>
              </a>
              <a>
                <img src="./gorjeo.png" width={"50px"}></img>
              </a>
              <a>
                <img src="./instagram.png" width={"50px"}></img>
              </a>
              <a>
                {" "}
                <img src="./facebook.png" width={"50px"}></img>
              </a>
            </div>
          </div>
          <div class="contact">
            <h3 className="titulo-envianos">Envianos un correo</h3>
            <form id="contact-form">
              <p>
                <label>Nombre</label>
                <input type="text" name="name" id="name" required />
              </p>
              <p>
                <label>Apellido</label>
                <input type="text" name="apellido" id="company" />
              </p>
              <p>
                <label>Correo electrónico</label>
                <input type="email" name="email" id="email" required />
              </p>
              <p>
                <label>Número Telefónico</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p class="full">
                <label>Mensaje</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>
              <p class="full">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
