import React from "react";
import "./nosotros.css";

export default function Nosotros() {
  return (
    <div className="cuerpo-nosotros">
    <h1 className="titulo-nosotros">SOBRE NOSOTROS</h1>
      <img
        src="https://image.ibb.co/nk616F/Layer_1_copy_21.png"
        width="47"
        height="11"
        align="center"
      />
      <article>
        <p className="texto-nosotros">
        Nuestra historia comienza allá por 1970 con la inauguración de nuestra primera tienda física, El rey de las zapatillas. Con el correr de los años nos fuimos expandiendo cada vez más a través de la apertura de nuevas sucursales, hasta que en 1986 abrimos el primer local integral de deportes.
Desde ese momento, todo fue crecimiento: realizamos alianzas estratégicas con otras marcas para ampliar nuestras redes y en 1988 inauguramos un nuevo concepto de tienda deportiva en San Isidro. Esta tienda se llamó RFTC SHOPS. El año 1997 fue clave. Nos consolidamos como líderes al abrir más de un local por mes durante ese año y contar así con una estructura total de 70 sucursales a nivel nacional. En 2013, renovamos la imagen de RFTC y, adaptándonos a las nuevas necesidades del cliente y del mercado, reforzamos el concepto de exhibición por disciplina. 
Así RFTC se convirtió en la primera cadena multimarca en adoptar este sistema. A fines de ese mismo año, con el objetivo de ampliar nuestra participación y presencia en el mundo del comercio deportivo, lanzamos la plataforma de venta online de RFTC. 
        </p>
        <h3 className="subtitulo-nosotros">Misión:</h3>
        <p className="texto-nosotros"> Vivimos entrenando para ganar y conquistar a los consumidores ofreciendo una experiencia premium. Hablamos a través del deporte y de la moda con el objetivo de acompañarlos en cada momento de sus vidas para que puedan competir, entrenar o lucir su estilo personal, transmitiendo inspiración e innovación.</p>
        <h3 className="subtitulo-nosotros">Visión:</h3>
        <p className="texto-nosotros">Ser el retailer líder en ventas y en servicio al cliente, siendo siempre cercano al consumidor.</p>
        <h3 className="subtitulo-nosotros">Nuestros Valores:</h3>
       <ul className="lista-nosotros">
        <li>Cliente siempre primero</li>
        <li>Compromiso</li>
        <li>Pasión</li>
        <li>innovación</li>
        <li>Comunicación</li>
       </ul>
      </article>


    </div>
  );
}
