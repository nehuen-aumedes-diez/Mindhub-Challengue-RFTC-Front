import React from 'react'
import './lista.css'
import { Link as Navlink } from 'react-router-dom';



export default function Select(props) {
    
    let {value}=props


  return (
    <>
    <ul className='listalist' >
        <dl>
            <dt>Camisetas</dt>
                <dd> <Navlink>Hombre</Navlink>    {/* <button>Hombre</button> */}</dd>
                <dd>  <Navlink>Mujer</Navlink> {/*  <button>Mujer</button> */}</dd>
        </dl>
        <hr
          style={{
            background: 'black',
            color: 'black',
            borderColor: 'black',
            height: '5px',
          }}
        />
        <li>  <Navlink>Buzos</Navlink>  {/* <button>Buzos</button> */}</li>
        <li>  <Navlink>Gorras</Navlink>  {/* <button>Gorras</button> */}</li>
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
