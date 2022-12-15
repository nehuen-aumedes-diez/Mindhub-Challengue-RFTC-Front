import React from 'react'
import './Slider.css'
import { Link, Link as LinkRouter } from 'react-router-dom';

export default function Slider() {
  return (
    <>
      <div className='DivisorLeft'></div>
      <div id='containerConfian'>
          <h2 id='TituloConfian'>Clubes que confían en nosotros.</h2>
          <p id='TextoConfian'>- Ofrecemos los mejores <Link to={'/'} className='Span-ProdRetro'>'Productos Retro'</Link> de tu equipo favorito, te invitamos a ver nuestro catalogo.</p>
          <p></p>
      </div>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            <img
              src="https://1.bp.blogspot.com/-0QgYvlaAF6c/WkAehB__IPI/AAAAAAAAHLI/FNeeCWnOL8cSsYIH2XJ6IrEmqt-L5vEmACLcBGAs/s200/escudo_tigre.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-NXrnqmZRguE/WkAepXNGe5I/AAAAAAAAHLQ/5sj86MZtbjkGL6IoxktA-b8KgcoO2GKswCLcBGAs/s200/escudo_velez_Sarsfield.png"
              alt="logo"
            ></img>
            <img
              src="https://3.bp.blogspot.com/-ow0JdPL5gt4/WkAa7Q7YmLI/AAAAAAAAHKY/kh4TwLEGsrwkNhSmboYt-xGXCGH5OXIIQCLcBGAs/s200/escudo_river_plate.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-yitrT9vuT6M/WkAbMu5HGVI/AAAAAAAAHKk/cjw1KXct22o0wSCv6nwytHL4aZc3uZmcACLcBGAs/s200/escudo_san_lorenzo.png"
              alt="logo"
            ></img>
          </div>
          <div aria-hidden="true" className="marquee__group">
            <img
              src="https://1.bp.blogspot.com/-qrm-ehg5faM/WkAaJnPmXNI/AAAAAAAAHKE/SqgzkTgNF-EXJoy0nLY6P4W5wRE_xpChACLcBGAs/s200/escudo_newells.png"
              alt="logo"
            ></img>
            <img
              src="https://4.bp.blogspot.com/-bvdemewYzk8/WkATq9BSEaI/AAAAAAAAHJE/3XdPeXWbZrgIQdCzRZD4W0Ob_LViCBC2wCEwYBhgL/s200/escudo_boca_juniors.png"
              alt="logo"
            ></img>
            <img
              src="https://2.bp.blogspot.com/-MlSMMBUAPBI/WkAaAXi4WbI/AAAAAAAAHJ8/Iv5p4dvN2nous8WV_AyWpU0FS4j3aihmQCLcBGAs/s200/escudo_independiente.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-KOKnUErrtU8/WkAaoksQE_I/AAAAAAAAHKU/RuXM6uE_17Mtcs4y3mWbjVFYeQtHcUWBwCLcBGAs/s200/escudo_Racing_club_argentina.png"
              alt="logo"
            ></img>
          </div>
        </div>

        <div className="marquee marquee--reverse" >
          <div className="marquee__group">
            <img
              src="https://2.bp.blogspot.com/-MlSMMBUAPBI/WkAaAXi4WbI/AAAAAAAAHJ8/Iv5p4dvN2nous8WV_AyWpU0FS4j3aihmQCLcBGAs/s200/escudo_independiente.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-KOKnUErrtU8/WkAaoksQE_I/AAAAAAAAHKU/RuXM6uE_17Mtcs4y3mWbjVFYeQtHcUWBwCLcBGAs/s200/escudo_Racing_club_argentina.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-qrm-ehg5faM/WkAaJnPmXNI/AAAAAAAAHKE/SqgzkTgNF-EXJoy0nLY6P4W5wRE_xpChACLcBGAs/s200/escudo_newells.png"
              alt="logo"
            ></img>
            <img
              src="https://4.bp.blogspot.com/-bvdemewYzk8/WkATq9BSEaI/AAAAAAAAHJE/3XdPeXWbZrgIQdCzRZD4W0Ob_LViCBC2wCEwYBhgL/s200/escudo_boca_juniors.png"
              alt="logo"
            ></img>
          </div>

          <div aria-hidden="true" className="marquee__group">
            <img
              src="https://3.bp.blogspot.com/-ow0JdPL5gt4/WkAa7Q7YmLI/AAAAAAAAHKY/kh4TwLEGsrwkNhSmboYt-xGXCGH5OXIIQCLcBGAs/s200/escudo_river_plate.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-yitrT9vuT6M/WkAbMu5HGVI/AAAAAAAAHKk/cjw1KXct22o0wSCv6nwytHL4aZc3uZmcACLcBGAs/s200/escudo_san_lorenzo.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-0QgYvlaAF6c/WkAehB__IPI/AAAAAAAAHLI/FNeeCWnOL8cSsYIH2XJ6IrEmqt-L5vEmACLcBGAs/s200/escudo_tigre.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-NXrnqmZRguE/WkAepXNGe5I/AAAAAAAAHLQ/5sj86MZtbjkGL6IoxktA-b8KgcoO2GKswCLcBGAs/s200/escudo_velez_Sarsfield.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </article>
    </>
  )
}
