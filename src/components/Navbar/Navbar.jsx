import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { Link as LinkRouter } from 'react-router-dom';

export default function Navbar() {
  let [hideDropdown, setHideDropdown] = useState(false)
  let [menuUser, setMenuUser] = useState(false)

  return (
    <div id='containerGeneralNav' onMouseLeave={() => { setHideDropdown(false) ; setMenuUser(false) }}>
      <LinkRouter to='/'id='logoHome'><img src='./logo.png' /></LinkRouter>
      <div id='containerRefsNav'>
      <LinkRouter to='/' className='LinkRefNav'>Inicio</LinkRouter>
      <LinkRouter to='/' className='LinkRefNav'>Nosotros</LinkRouter>
        <div className='LinkRefNav'
          onMouseEnter={() => { setHideDropdown(true) }} onClick={() => { !hideDropdown ? setHideDropdown(true) : setHideDropdown(false) }}>
          Tienda
          {hideDropdown ?
            <div id='containerDropdownNav' onMouseLeave={() => { setHideDropdown(false) }} >
              <LinkRouter to='/camisetasF' className='itemDropdown'>Camisetas Mujer</LinkRouter>
              <LinkRouter to='/camisetasF' className='itemDropdown'>Camisetas Hombres</LinkRouter>
              <LinkRouter to='/camisetasF' className='itemDropdown'>Buzos</LinkRouter>
              <LinkRouter to='/camisetasF' className='itemDropdown'>Gorras</LinkRouter>
            </div>
            :
            console.log('')
          }
        </div>
        <LinkRouter to='/contacto' className='LinkRefNav'>Contacto</LinkRouter>
        <div id='containerIconRefs'>
          <div className='LinkIcon Icon1'><IoCartOutline className='RefCart' /></div>
          <hr className='HR' />
          <div className='LinkIcon' onMouseLeave={()=>{setMenuUser(false)}}>
            <BiUser className='RefCart' onMouseEnter={() => { setMenuUser(true) }} onClick={() => { !menuUser ? setMenuUser(true) : setMenuUser(false) }}></BiUser>
            {menuUser ?
              <div id='containerDropdownMenuUser' onMouseLeave={() => { setMenuUser(false) }} >
                <LinkRouter to='/camisetasF' className='itemDropdown'>Ingreso</LinkRouter>
                <LinkRouter to='/camisetasF' className='itemDropdown'>Registro</LinkRouter>
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
