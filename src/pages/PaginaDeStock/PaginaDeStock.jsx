import './PaginaDeStock.css'
import React, { useEffect, useState } from 'react'
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
  let remeritaM = remerasM[0]?.foto1
  let bucito = buzos[0]?.foto1

  console.log(remeritaF);
  return (
    <div>

      <div class="card">
        <div class="additional">
          <div class="user-card">
            <img className='imagenStock' src={`${remeritaF}`} alt="foto de remera de mujer " />
          </div>
          <div class="more-info">
            <h1></h1>
            <div class="coords">
              <span>Remeras Femeninas</span>
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
            <img className='imagenStock' src={`${remeritaM}`} alt="foto de remera de mujer " />
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

    </div>
  )
}
