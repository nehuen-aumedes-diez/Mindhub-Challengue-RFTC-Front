import React from "react";
import Swal from "sweetalert2";
import "./contacto.css";

export default function Contacto() {
  const alertas = () => {
    Swal.fire({
      title: 'Excelente!',
      text: 'Recibimos tu mail. Pronto tendrás una respuesta!',
      icon: 'success'
  })
}

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
            <p>Teléfono: +54 11 2606 2011</p>
            <p>Email: retrofootballtc@gmail.com</p>
            <p>Dirección: Caaguazú 7101, Liniers, CABA</p>
            <div className="iconos-contacto">
              <a>
                {" "}
                <img className="lpm" src="./gmail.png" width={"50px"}></img>
              </a>
              <a>
                <img className="lpm" src="./gorjeo.png" width={"50px"}></img>
              </a>
              <a>
                <img className="lpm" src="./instagram.png" width={"50px"}></img>
              </a>
              <a>
                {" "}
                <img className="lpm" src="./facebook.png" width={"50px"}></img>
              </a>
            </div>
          </div>
          <div class="contact">
            <h3 className="titulo-envianos">Envianos un correo</h3>
            <form id="contact-form" action="https://formsubmit.co/retrofootballtc@gmail.com" method="POST" onSubmit={alertas} >
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
              <input type="hidden" name="_next" value="http://localhost:3000/" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}