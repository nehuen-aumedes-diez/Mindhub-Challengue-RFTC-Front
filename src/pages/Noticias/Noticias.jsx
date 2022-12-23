import React from "react";
import './noticias.css'

export default function Noticias() {
    return (
        <div className="noticias-cuerpo">
            <div className="conteNoti">
                <h1 className="tituloNoti" data-text="Noticias Futboleras">Noticias Futboleras</h1>
            </div>

            <div className="segundaseccNoti">
                <figure className="noticia-carta2">
                    <img className="noticia-foto2" src='./fulbollgtb.jpg' alt=''></img>
                    <div className="capa-noticia2">
                        <h3>Argentina, sede del Mundial de Fútbol Gay</h3>
                        <p>El fútbol propone una buena noticia para nuestro país: en noviembre de 2024 se llevará a cabo en Argentina el 25° Mundial de Fútbol IGLFA (International Gay and Lesbian Football Asociations) y, por primera vez en la historia, será apoyado por la Asociación del Fútbol Argentino (AFA).</p>
                        <button className="ButtonNoticias">Lee más...</button>
                    </div>
                </figure>
                <figure className="noticia-carta2">
                    <div className="capa-noticia2">
                        <h3>Fútbol femenino en alza: una final de Libertadores, audiencias récord y una Selección en crecimiento</h3>
                        <p>En el balance de 2022 hay signos positivos. Boca y la Selección consiguieron resultados históricos. Y además, acompañó el público.</p>
                        <button className="ButtonNoticias">Lee más...</button>
                    </div>
                    <img className="noticia-foto2" src='./futbolfemenino.jpg' alt=''></img>
                </figure>
            </div> <figure className="noticia-carta">
                <img className="noticia-foto" src='./futboldisca.jpg' alt=''></img>
                <div className="capa-noticia">
                    <h3 className="tituloNoticia">Firman convenios con clubes de fútbol para promover la inclusión de personas con discapacidad</h3>
                    <p className="textoNoticia">El director de la Agencia Nacional de Discapacidad, Fernando Galarraga, aseguró que ya se firmaron acuerdos con Boca, San Lorenzo, Estudiantes, Racing</p>
                    <button className="ButtonNoticias">Lee más...</button>
                </div>
            </figure>
            <figure className="noticia-carta">
                <img className="noticia-foto" src='./copamundo.jpg' alt=''></img>
                <div className="capa-noticia">
                    <h3 className="tituloNoticia">¿Qué países han ganado más Mundiales de fútbol?</h3>
                    <p className="textoNoticia">Mirá la lista histórica de campeones.</p>
                    <button className="ButtonNoticias">Lee más...</button>
                </div>
            </figure>
            <figure className="noticia-carta">
                <img className="noticia-foto" src='./maradonacopa.jpg' alt=''></img>
                <div className="capa-noticia">
                    <h3 className="tituloNoticia">“Elijo creer”</h3>
                    <p className="textoNoticia">Arden las redes sociales con nuevas coincidencias virales para predecir el resultado de la final del Mundial.</p>
                    <button className="ButtonNoticias">Lee más...</button>
                </div>
            </figure>
            <figure className="noticia-carta">
                <img className="noticia-foto" src='./seleccion1.jpg' alt=''></img>
                <div className="capa-noticia">
                    <h3 className="tituloNoticia">Argentina – Francia: el historial entre los finalistas del Mundial de Qatar 2022</h3>
                    <p className="textoNoticia">A lo largo de la historia, los equipos disputaron 12 partidos entre ellos: seis culminaron en victoria para Argentina, tres fueron para Francia y los tres restantes resultaron en empate.</p>
                    <button className="ButtonNoticias">Lee más...</button> 
                </div>
            </figure>
        </div>
    )
}