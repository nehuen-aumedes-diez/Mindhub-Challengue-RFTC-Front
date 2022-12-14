import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";

export default function Navbar() {
  let [hideDropdown, setHideDropdown] = useState(false)
  let [menuUser, setMenuUser] = useState(false)

  return (
    <div id='containerGeneralNav' onMouseLeave={() => { setHideDropdown(false) ; setMenuUser(false) }}>
      <img id='logoHome' src='./logo.png' />
      <div id='containerRefsNav'>
        <div className='LinkRefNav'>Inicio</div>
        <div className='LinkRefNav'>Nosotros</div>
        <div className='LinkRefNav'
          onMouseEnter={() => { setHideDropdown(true) }} onClick={() => { !hideDropdown ? setHideDropdown(true) : setHideDropdown(false) }}>
          Tienda
          {hideDropdown ?
            <div id='containerDropdownNav' onMouseLeave={() => { setHideDropdown(false) }} >
              <div className='itemDropdown'>Camisetas Mujer</div>
              <div className='itemDropdown'>Camisetas Hombre</div>
              <div className='itemDropdown'>Buzos</div>
              <div className='itemDropdown'>Gorras</div>
            </div>
            :
            console.log('')
          }
        </div>
        <div className='LinkRefNav'>Contacto</div>
        <div id='containerIconRefs'>
          <div className='LinkIcon Icon1'><IoCartOutline className='RefCart' /></div>
          <hr className='HR' />
          <div className='LinkIcon' onMouseLeave={()=>{setMenuUser(false)}}>
            <BiUser className='RefCart' onMouseEnter={() => { setMenuUser(true) }} onClick={() => { !menuUser ? setMenuUser(true) : setMenuUser(false) }}></BiUser>
            {menuUser ?
              <div id='containerDropdownMenuUser' onMouseLeave={() => { setMenuUser(false) }} >
                <div className='itemDropdown2'>Ingresar</div>
                <div className='itemDropdown2'>Registrarse</div>
              </div>
              :
              console.log('')
            }
          </div>
        </div>
      </div>
    </div>
  )
}
