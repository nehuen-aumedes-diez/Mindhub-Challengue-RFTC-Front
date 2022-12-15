import React from 'react'
import './Slider.css'
import { Link, Link as LinkRouter } from 'react-router-dom';

export default function Slider() {
  return (
    <>
      <div className='DivisorLeft'></div>
      <div id='containerConfian'>
          <h2 id='TituloConfian'>Clubes que confían en nosotros.</h2>
          <p id='TextoConfian'>- Ofrecemos los mejores <Link className='Span-ProdRetro' to={'/'}>'Productos Retro'</Link> de tu equipo favorito, te invitamos a ver nuestro catalogo.</p>
          <p></p>
      </div>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            <img
              src="https://4.bp.blogspot.com/-Ni1m8xzKrYA/WkAVNdtqHjI/AAAAAAAAHJc/JaKngC3Su8AuzsLy_RKVXg9BHWwC57_JQCLcBGAs/s200/escudo_Estudiantes_la_plata.png"
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
              src="https://2.bp.blogspot.com/-q4h7P57sRxQ/WkAcvKMJqJI/AAAAAAAAHK0/iOPrHux6szwq3OtOmatPWWD314tUUd0CQCLcBGAs/s200/escudo_Talleres.png"
              alt="logo"
            ></img>
            <img
              src="https://3.bp.blogspot.com/-mZddjdlYYjQ/WkASw6yYE9I/AAAAAAAAHIs/V6K6yjRV-TwawNMn8_2pKcpts_i0WUcUQCEwYBhgL/s200/escudo_argentinos_juniors.png"
              alt="logo"
            ></img>
            <img
              src="https://4.bp.blogspot.com/-tkY849ZSrP8/WkAXX_AauBI/AAAAAAAAHJo/aN8B-69HmLYNikYIfMMbZcF0TQd-WjRGwCLcBGAs/s200/escudo_gimnasia_la_plata.png"
              alt="logo"
            ></img>
            <img
              src="https://2.bp.blogspot.com/-hwtLUQ98JUU/WkAbGQQMjbI/AAAAAAAAHKg/95lj5VEHqmcNagpgg9QY7EXNM5GqJNAugCLcBGAs/s200/escudo_rosario_Central.png"
              alt="logo"
            ></img>
          </div>

          <div aria-hidden="true" className="marquee__group">
            <img
              src="https://1.bp.blogspot.com/-UMUyUV3svaQ/WkAelXtt9wI/AAAAAAAAHLM/zyCRnCf7n6gd3NmzWjJEKLe5XymVEz8MwCLcBGAs/s200/escudo_union_santa_Fe.png"
              alt="logo"
            ></img>
            <img
              src="https://1.bp.blogspot.com/-NhiTkfRfkDE/WkAToHdeRoI/AAAAAAAAHJA/E-McpxDO3uwY6pvdEyVsaboevbRfJ8aIgCLcBGAs/s200/escudo_belgrano_Cordoba.png"
              alt="logo"
            ></img>
            <img
              src="https://3.bp.blogspot.com/-V4V__JZ5rGE/WkAVGtJsFvI/AAAAAAAAHJU/zw0zpLdadIoFRWP9xJfeb5DU1ZrURZVxgCLcBGAs/s200/escudo_colon_santa_Fe.png"
              alt="logo"
            ></img>
            <img
              src="https://2.bp.blogspot.com/-JUWHk8LYWB0/WkATvlVOAGI/AAAAAAAAHJI/vQYK27NhpPIyJKN9HvQKlVD7bHhaNFe_wCLcBGAs/s200/escudo_chacarita.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </article>
    </>
  )
}
