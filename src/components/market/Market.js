import React from 'react'
import './Market.css'
import Navbar from '../Navbar/Navbar'
import Lista from '../listaArticulos/Lista'
import Select from '../order/Select'
import SearchBar from '../searchBar/SearchBar'

function Market() {
return (
<div className="container">
  <div className="filtro-market-">
    <h3> <Lista /> </h3>
  </div>
  <div  className="nav"> <Navbar /></div>
  <div className="barra-y-nombre"> 
  <h3>Nombre</h3>
  <div> <Select /> </div>
  <div> <SearchBar /> </div>
  </div>
  <div className="articulos"> <h3> Articulos </h3></div>
  <div className="void-para-el-mensajero"> <h3> espacio para el chat </h3></div>
</div>
)
}

<div></div>

export default Market