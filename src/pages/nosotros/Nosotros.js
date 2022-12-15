import React from "react";
import "./nosotros.css";

export default function Nosotros() {
  return (
    <div style={{ backgroundColor: "black", paddingTop: "1rem" }}>
      <h1 className="titulo-nosotros">- Nosotros -</h1>
      <div className="DivisorLeftNosotros"></div>
      <div id="cuerpoGeneral-Nosotros">
        <div className="cuerpo-nosotros">
          <div id="container-nosotros-1">
            <img
              className="fotoPrincipal-nosotros"
              src="https://cdn.shopify.com/s/files/1/0015/5841/3357/files/CLOSEUP-SOL-NEGRO-3.png?v=1613692939"
            />
            <div id="containerQuienesSomos">
              <h2 id="tituloQuienesSomos">¿ Quienes Somos ?</h2>
              <p className="texto-nosotros">
                Nuestra historia comienza allá por 1970 con la inauguración de
                nuestra primera tienda física, El rey de las zapatillas. Con el
                correr de los años nos fuimos expandiendo cada vez más a través
                de la apertura de nuevas sucursales, hasta que en 1986 abrimos
                el primer local integral de deportes. Desde ese momento, todo
                fue crecimiento: realizamos alianzas estratégicas con otras
                marcas para ampliar nuestras redes y en 1988 inauguramos un
                nuevo concepto de tienda deportiva en San Isidro. Esta tienda se
                llamó RFTC SHOPS. El año 1997 fue clave. Nos consolidamos como
                líderes al abrir más de un local por mes durante ese año y
                contar así con una estructura total de 70 sucursales a nivel
                nacional.
              </p>
            </div>
          </div>
        </div>
        <div id="containerDivisorRight">
          <h2 className="titulo-mision">_ Nuestra Mision</h2>
          <div className="DivisorRightNosotros"></div>
        </div>
        <div id="containerMision">
          <div className="CardMision-Nosotros">
            <img
              className="FotoCardMision"
              src="https://cdn.shopify.com/s/files/1/0015/5841/3357/files/embroidery-workshop-20190605-0013_3000x.jpg?v=1613692939"
            />
            <p className="TextoCardMision">
              Vivimos entrenando para ganar y conquistar a los consumidores
              ofreciendo una experiencia premium. Hablamos a través del deporte
              y de la moda con el objetivo de acompañarlos en cada momento de
              sus vidas para que puedan competir, entrenar o lucir su estilo
              personal, transmitiendo inspiración e innovación.
            </p>
          </div>
          <div className="CardMision-Nosotros">
            <img
              className="FotoCardMision"
              src="https://cdn.shopify.com/s/files/1/0015/5841/3357/files/FOOTER.png?v=1613692940"
            />
            <p className="TextoCardMision">
              Ser el retailer líder en ventas y en servicio al cliente, siendo
              siempre cercano al consumidor.
            </p>
          </div>
          <div className="CardMision-Nosotros">
            <img
              className="FotoCardMision"
              src="https://cdn.shopify.com/s/files/1/0015/5841/3357/files/CLOSEUP-SOL-NEGRO-3.png?v=1613692939"
            />
            <p className="TextoCardMision">
              <ul className="lista-nosotros">
                <li>Cliente siempre primero</li>
                <li>Compromiso</li>
                <li>Pasión</li>
                <li>innovación</li>
                <li>Comunicación</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
