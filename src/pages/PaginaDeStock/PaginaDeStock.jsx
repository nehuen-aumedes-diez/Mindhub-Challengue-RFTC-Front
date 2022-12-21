import './PaginaDeStock.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import remeraFActions from '../../redux/actions/remeraFAction'
import remeraMActions from '../../redux/actions/remeraMAction';
import buzoActions from '../../redux/actions/buzoAction';


export default function PaginaDeStock() {
  const dispatch = useDispatch()
  const { getRemeraF } = remeraFActions
  const { remerasF } = useSelector(store => store.remerasF)
  const { getRemeraM } = remeraMActions;
  const { remerasM } = useSelector((state) => state.remerasM);

  const { getBuzo } = buzoActions;
  const { buzos } = useSelector((state) => state.buzos);


  useEffect(() => {
    dispatch(getRemeraF());
    dispatch(getRemeraM());
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
            <h1>Jane Doe</h1>
            <div class="coords">
              <span>Group Name</span>
              <span>Joined January 2019</span>
            </div>
            <div class="coords">
              <span>Position/Role</span>
              <span>City, Country</span>
            </div>
            <div class="stats">
              <div>
                <div class="title">Awards</div>
                <i class="fa fa-trophy"></i>
                <div class="value">2</div>
              </div>
              <div>
                <div class="title">Matches</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">27</div>
              </div>
              <div>
                <div class="title">Pals</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div>
                <div class="title">Coffee</div>
                <i class="fa fa-coffee"></i>
                <div class="value infinity">∞</div>
              </div>
            </div>
          </div>
        </div>
        <div class="generalA">
          <h1>Jane Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
          <span class="more">Mouse over the card for more info</span>
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
