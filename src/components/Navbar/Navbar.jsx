import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/userAction';

export default function Navbar() {
  let [hideDropdown, setHideDropdown] = useState(false)
  let [menuUser, setMenuUser] = useState(false)
  let {name, token, logged} = useSelector(store => store.userReducer)
  let dispatch = useDispatch()
  const navigate = useNavigate();

  async function signOut(event){
    await dispatch(userActions.signOut(token))
    navigate('/')
    alert('usuario deslogueado')
  }

console.log(logged);

  return (
    <div id='containerGeneralNav' onMouseLeave={() => { setHideDropdown(false) ; setMenuUser(false) }}>
      <LinkRouter to='/'id='logoHome'><img className='LogoNav' src='./logo.png' /></LinkRouter>
      <div id='containerRefsNav'>
      <LinkRouter to='/' className='LinkRefNav'>Inicio</LinkRouter>
      <LinkRouter to='/nosotros' className='LinkRefNav'>Nosotros</LinkRouter>
        <div className='LinkRefNav'
          onMouseEnter={() => { setHideDropdown(true) }} onClick={() => { !hideDropdown ? setHideDropdown(true) : setHideDropdown(false) }}>
          Tienda
          {hideDropdown ?
            <div id='containerDropdownNav' onMouseLeave={() => { setHideDropdown(false) }} >
              <LinkRouter to='/camisetasF' className='itemDropdown'>Camisetas Mujer</LinkRouter>
              <LinkRouter to='/camisetasM' className='itemDropdown'>Camisetas Hombres</LinkRouter>
              <LinkRouter to='/buzos' className='itemDropdown'>Buzos</LinkRouter>
              <LinkRouter to='/gorras' className='itemDropdown'>Gorras</LinkRouter>
            </div>
            :
            console.log('')
          }
        </div>
        <LinkRouter to='/contacto' className='LinkRefNav'>Contacto</LinkRouter>
        <LinkRouter to='/noticias' className='LinkRefNav'>Noticias</LinkRouter>
        <div id='containerIconRefs'>
          {logged?
           (
            <>
            <div className='LinkIcon Icon1'><IoCartOutline className='RefCart' /></div>
            <hr className='HR' />
            </>
           ):(
            <></>
           )
          }
          
          
          <div className='LinkIcon' >
            
              <LinkRouter to='/signinsignup' className='LinkIcon Icon1'>
              <BiUser className='RefCart'></BiUser>
              <p className='nameUser'>{name}</p>
              </LinkRouter>
              {logged? 
              (<button className='btnLogout' onClick={()=>signOut()}>  Salir</button>
              ):(
                <></>
              )
              }
              
            

            {/* <BiUser className='RefCart' onMouseEnter={() => { setMenuUser(true) }} onClick={() => { !menuUser ? setMenuUser(true) : setMenuUser(false) }}></BiUser>
            {menuUser ?
              <div id='containerDropdownMenuUser' onMouseLeave={() => { setMenuUser(false) }} >
                <LinkRouter to='/signinsignup' className='itemDropdown'>Ingreso / Registro</LinkRouter>
                <LinkRouter to='/camisetasF' className='itemDropdown'>Registro</LinkRouter>
              </div>
              :
              console.log('')
            }
             */}
          </div>
        </div>
      </div>
    </div>
  )
}
