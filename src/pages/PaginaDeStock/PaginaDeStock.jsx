import './PaginaDeStock.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import remeraFActions from '../../redux/actions/remeraFAction'
import remeraMActions from '../../redux/actions/remeraMAction';
import gorraActions from '../../redux/actions/gorraAction';
import buzoActions from '../../redux/actions/buzoAction';


export default function PaginaDeStock() {
  const dispatch = useDispatch()
  const { getRemeraF } = remeraFActions
  const { remerasF } = useSelector(store => store.remerasF)
  const { getRemeraM } = remeraMActions;
  const { remerasM } = useSelector((state) => state.remerasM);
  const { getGorra } = gorraActions;
  const { gorras } = useSelector((state) => state.gorras);
  const { getBuzo } = buzoActions;
  const { buzos } = useSelector((state) => state.buzos);


  useEffect(() => {
    dispatch(getRemeraF());
    dispatch(getRemeraM());
    dispatch(getGorra());
    dispatch(getBuzo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let remeritaF = remerasF[0]?.foto1
  let cantidadF = remerasF.length
  let contadorF = [0]
  for (var i = 0; i < remerasF.length; i++) {
    contadorF.push(remerasF[i].stock.reduce((viejo, nuevo) => viejo + nuevo));
  }
  let todasF = contadorF.reduce((viejo, nuevo) => viejo + nuevo)
  let tallesF = []
  for (var e = 0; e < remerasF.length; e++) {
    console.log(remerasF[e].talle);
    while (remerasF[e].talle>3) {
      tallesF.push(remerasF[e].talle)
    }
  }
  console.log(tallesF);

  let remeritaM = remerasM[0]?.foto1
  let cantidadM = remerasM.length
  let contadorM = [0]
  for (var a = 0; a < remerasM.length; a++) {
    contadorM.push(remerasM[a].stock.reduce((viejo, nuevo) => viejo + nuevo));
  }
  let todasM = contadorM.reduce((viejo, nuevo) => viejo + nuevo)

  let gorrita = gorras[0]?.foto1
  let cantidadG = gorras.length
  let contadorG = [0]
  for (var b = 0; b < gorras.length; b++) {
    contadorG.push(gorras[b].stock);
  }
  let todasG = contadorG.reduce((viejo, nuevo) => viejo + nuevo)

  let bucito = buzos[0]?.foto1
  let cantidadB = buzos.length
  let contadorB = [0]
  for (var c = 0; c < buzos.length; c++) {
    contadorB.push(buzos[c].stock.reduce((viejo, nuevo) => viejo + nuevo));
  }
  let todasB = contadorB.reduce((viejo, nuevo) => viejo + nuevo)




  return (
    <div>

      <div class="card">
        <div class="additional">
          <div class="user-card">
            <img className='imagenStock' src={`${remeritaF}`} alt="foto de remera de mujer " />
          </div>
          <div class="more-info">
            <h1>Remeras Femeninas</h1>
            <div class="stats">
              <div>
                <div class="title">Modelos</div>
                <i class="fa fa-trophy"></i>
                <div class="value">{`${cantidadF}`}</div>
              </div>
              <div>
                <div class="title">Unidades</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">{`${todasF}`}</div>
              </div>
              <div>
                <div class="title">Talles</div>
                <i class="fa fa-group"></i>
                <div class="value">{`${tallesF}`}</div>
              </div>
              <div class="value infinity"><img className='imgMas' src="./icons8-more-67.png" alt="mas" /></div>
            </div>
          </div>
        </div>
        <div class="generalA">
          <h1>Remeras Femeninas</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        </div>
      </div>

      <div class="card green">
        <div class="additional">
          <div class="user-card">
            <img className='imagenStock' src={`${remeritaM}`} alt="foto de remera de mujer " />
          </div>
          <div class="more-info">
            <h1>Remeras Masculinas</h1>
            <div class="stats">
              <div>
                <div class="title">Modelos</div>
                <i class="fa fa-trophy"></i>
                <div class="value">{`${cantidadM}`}</div>
              </div>
              <div>
                <div class="title">Unidades</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">{`${todasM}`}</div>
              </div>
              <div>
                <div class="title">Talles</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div class="value infinity"><img className='imgMas' src="./icons8-more-67.png" alt="mas" /></div>
            </div>
          </div>
        </div>
        <div class="generalA">
          <h1>Remeras Masculinas</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        </div>
      </div>

      <div class="card green">
        <div class="additional">
          <div class="user-card">
            <img className='imagenStock' src={`${gorrita}`} alt="foto de remera de mujer " />
          </div>
          <div class="more-info">
            <h1>Gorras</h1>
            <div class="stats">
              <div>
                <div class="title">Modelos</div>
                <i class="fa fa-trophy"></i>
                <div class="value">{`${cantidadG}`}</div>
              </div>
              <div>
                <div class="title">Unidades</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">{`${todasG}`}</div>
              </div>
              <div>
                <div class="title">Talles</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div class="value infinity"><img className='imgMas' src="./icons8-more-67.png" alt="mas" /></div>
            </div>
          </div>
        </div>
        <div class="generalA">
          <h1>Gorras</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        </div>
      </div>

      <div class="card green">
        <div class="additional">
          <div class="user-card">
            <img className='imagenStock' src={`${bucito}`} alt="foto de remera de mujer " />
          </div>
          <div class="more-info">
            <h1>Buzos</h1>
            <div class="stats">
              <div>
                <div class="title">Modelos</div>
                <i class="fa fa-trophy"></i>
                <div class="value">{`${cantidadB}`}</div>
              </div>
              <div>
                <div class="title">Matches</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">{`${todasB}`}</div>
              </div>
              <div>
                <div class="title">Talles</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div class="value infinity"><img className='imgMas' src="./icons8-more-67.png" alt="mas" /></div>
            </div>
          </div>
        </div>
        <div class="generalA">
          <h1>Buzos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
        </div>
      </div>

    </div>
  )
}
