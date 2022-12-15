import React from 'react'
import './Market.css'
import Lista from '../listaArticulos/Lista'
import Select from '../order/Select'
import SearchBar from '../searchBar/SearchBar'


function Market(props) {
return (
<div className="containerMarket">
  <div className="filtro-market-">
    <h3> <Lista /> </h3>
  </div>
  <div className="barra-y-nombre"> 
  <h3 className='TopDiv'>Nombre</h3>
  <div> <SearchBar /> </div>
  <div className='BotDiv'> <Select /> </div>
  </div>
  <div className="articulos">
  {props.children}
  </div>
</div>
)
}

<div></div>

export default Market