import React from "react";
import "../styles/home1.css";

export default function Home1() {
  const tittle = "⚽ F I N A L I S T A S ⚽";
  const sub =
    " El sueño está más vivo que nunca. Siempre con ustedes, ¡VAMOS ARGENTINAAAA! ";
  return (
    <>
      <div className="home-container">
        <div className="banner1">
          <div className="logo">
            <img className="logo1" src=""></img>
          </div>
          <img
            className="banner"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/reactivo-ar-13-mh-d_tcm216-975018.jpg"
          ></img>
          <h1 className="tittle-home">{tittle}</h1>
          <p className="subt">{sub}</p>

          <div className="btn1-cont">
            <button className="btn1"> ver camiseta </button>
          </div>

          <div className="btn2-cont">
            <button className="btn2"> conocé más </button>
          </div>
        </div>

        {/* <div>

    <img className='imgCamisetas' src="//cdn.shopify.com/s/files/1/0016/1061/2806/files/20221101_153113.jpg?v=1667458746&width=2200 2200w"></img>

</div>   */}

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
    </div>
    <div>
        {/* <img
          src="https://img.freepik.com/vector-gratis/coleccion-personajes-santa-claus-diseno-plano_52683-28218.jpg?w=1380&t=st=1670954680~exp=1670955280~hmac=caf30d564ee9a25fb3cc79ef9201204a4f2c05e445ada8558559b5ebfb2d14ed"
          alt="logo"
        ></img> */}
      </div>
    </>
  );
}
