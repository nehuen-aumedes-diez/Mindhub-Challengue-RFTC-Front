import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardRemera from "../../components/CardRemera/CardRemera"
import remeraFActions from '../../redux/actions/remeraFAction'
import Market from '../../components/market/Market'
import SearchBar from '../../components/searchBar/SearchBar'
import Select from '../../components/order/Select'
import './CamisetasF.css' 

export default function CamisetasF() {
  const dispatch = useDispatch()
  const {getRemeraF, filtrarRemerasF} = remeraFActions
  const {remerasF, ordenPrecio, busqueda} = useSelector( store => store.remerasF)
  //const tuki = useSelector( store => store.remerasF)
  //console.log("store", tuki);
  //console.log("ORDEN ALF",ordenAlfabetico);
  //console.log("ORDEN PRE",ordenPrecio);
  //console.log("busqueda: ", busqueda);
  //console.log(remerasF)

  useEffect( () => {
      dispatch(getRemeraF())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      if (ordenPrecio || busqueda) {
          let data = {
            nombre: busqueda,
            order: ordenPrecio,
          }
          dispatch(filtrarRemerasF(data))
      } else {
          dispatch(getRemeraF())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  let filtrarOrden = (event) => {
    //console.log(event);
    let nombrecito = busqueda;
    let ordencito = ordenPrecio;
    if (event.type === 'keyup'){
      nombrecito = event?.target?.value?.trim()
    }
    if (event.type === 'change'){
      ordencito = event?.target?.value
    }
    //console.log(nombrecito)
    //console.log("ordencito",ordencito)
      let order= '';
      if (ordencito === '0') {
          order = ordenPrecio
      }
      if (ordencito === 'precio-asc'){
        order = 'asc'
      } else if (ordencito === 'precio-desc'){
        order = 'desc'
      }
      let data = {
          nombre: nombrecito,
          order: order,
      }
    dispatch(filtrarRemerasF(data))
  }

/*   const filtrar = (event) => {
    let data = {
      nombre: event.target.value.trim(),
      order: '',
    }
    dispatch(filtrarRemerasF(data))
  } */

  return (
    <Market nombre={'Camisetas de Mujeres'} componente={<SearchBar fn={filtrarOrden} />} segundocomp={<Select fn={filtrarOrden} />} >
    { (remerasF.length > 0)
      ? remerasF.map(each => 
      <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />)
      : <img src="./not_found_articulos.png" alt='not found' />
    }
    </Market>
  )
}

