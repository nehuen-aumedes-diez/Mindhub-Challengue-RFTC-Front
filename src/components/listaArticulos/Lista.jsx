import React from 'react'
import './lista.css'
import { Link as Navlink } from 'react-router-dom';



export default function Select(props) {
    
    let {value}=props


  return (
    <>
    <ul className='listaList' >
        <dl>
            <dt>Camisetas</dt>
                <dd>    <button>Hombre</button></dd>
                <dd>    <button>Mujer</button></dd>
        </dl>
        <li>    <button>Buzos</button></li>
        <li>    <button>Gorras</button></li>
    </ul>
    



    
     <select className='listaselect' name="redireccion" onChange={value}>
            <option value="0">Articulos...</option>
            <option value="2">Camiseta Hombre</option>
            <option value="1">Camiseta Mujer</option>
            <option value="3">Buzos</option>
            <option value="3">Gorras</option>
    </select> 
    </>
  )
}
