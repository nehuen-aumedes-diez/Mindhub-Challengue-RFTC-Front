import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { BiUser, BiUserX } from "react-icons/bi";
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/userAction';
import swal from 'sweetalert'

export default function Navbar() {
  let [hideDropdown, setHideDropdown] = useState(false)
  let [menuUser, setMenuUser] = useState(false)
  let { name, token, logged } = useSelector(store => store.userReducer)
  let dispatch = useDispatch()
  const navigate = useNavigate();

  async function signOut(event) {
    await dispatch(userActions.signOut(token))
    navigate('/')
    swal({
      title: `Hasta pronto ${name}!`,
      icon: "success",
      timer: "3000"
    })
  }

  console.log(logged);

  return (
    <div id='containerGeneralNav' onMouseLeave={() => { setHideDropdown(false); setMenuUser(false) }}>
      <LinkRouter to='/' id='logoHome'><img className='LogoNav' src='./logo.png' /></LinkRouter>
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
            <LinkRouter to='/stockgeneral' className='LinkRefNav'>Stock</LinkRouter>
            <hr className='HR' />
            </>
           ):(
            <></>
           )
          }
          <div className='LinkIcon' >
            {logged ? (
              <div className='LinkIcon Icon1'>
                <LinkRouter to='/carrito' className='LinkRefNav'>
                <IoCartOutline className='RefCart' />

                </LinkRouter>
                <BiUserX className='RefCart' onClick={() => signOut()}></BiUserX>
              </div>
            ) : (
              <LinkRouter to='/signinsignup' className='LinkIcon2 Icon1'>
                <BiUser className='RefCart'></BiUser>
              </LinkRouter>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
