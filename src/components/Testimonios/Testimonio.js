import React from "react";
import "./testimonio.css";

export default function Testimonio() {
  return (
    <>
      <figure class="snip1559">
        <div class="profile-image">
          <img
            className="testimonio-fotos"
            src="https://i.pinimg.com/originals/cb/5d/64/cb5d64be736ab84602ee1bcd20303d4e.jpg"
            alt="profile-sample2"
          />
        </div>
        <figcaption>
          <h3>Lucas Sosa</h3>
          <h5>Excelente atención</h5>
          <div class="icons">
            <img className="estrellas-testimonio" src="./estrellas.png"></img>
          </div>
        </figcaption>
      </figure>
      <figure class="snip1559">
        <div class="profile-image">
          <img
            className="testimonio-fotos"
            src="https://i.pinimg.com/550x/e6/d7/d2/e6d7d2c2c09bfc5b1aadbedbfdfbe435.jpg"
            alt="profile-sample7"
          />
        </div>
        <figcaption>
          <h3>Nicolas Sanchez</h3>
          <h5>Muy buena calidad</h5>
          <div class="icons">
            <img className="estrellas-testimonio" src="./estrellas.png"></img>
          </div>
        </figcaption>
      </figure>
      <figure class="snip1559">
        <div class="profile-image">
          <img
            className="testimonio-fotos"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
            alt="profile-sample6"
          />
        </div>
        <figcaption>
          <h3>Violeta Indigo</h3>
          <h5>Entregas a tiempo </h5>
          <div class="icons">
            <img className="estrellas-testimonio" src="./estrellas.png"></img>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
