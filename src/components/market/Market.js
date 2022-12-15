import React from 'react'
import './Market.css'
import Lista from '../listaArticulos/Lista'



function Market(props) {
return (
<div className="containerMarket">
  <div className="filtro-market-">
    <h3> <Lista /> </h3>
  </div>
  <div className="barra-y-nombre"> 
  <h3 className='TopDiv'>{props.nombre}</h3>
  <div> {props.componente} </div>
  <div className='BotDiv'>{props.segundocomp}</div>
  </div>
  <div className="articulos">
  {props.children}
  </div>
</div>
)
}

<div></div>

export default Market