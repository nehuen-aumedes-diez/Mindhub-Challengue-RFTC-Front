import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardRemera from "../../components/CardRemera/CardRemera"
import remeraFActions from '../../redux/actions/remeraFAction'
import Market from '../../components/market/Market'
import SearchBar from '../../components/searchBar/SearchBar'

function CamisetasF() {
  const dispatch = useDispatch()
  const {getRemeraF, filtrarRemerasF} = remeraFActions
  const {remerasF} = useSelector( store => store.remerasF)

  useEffect( () => {
      dispatch(getRemeraF())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  //console.log("REMERAS",remerasF)

  const filtrar = (event) => {
    dispatch(filtrarRemerasF(event.target.value.trim()))
  }

  return (
    <Market nombre={'Camisetas de Mujeres'} fn={filtrar} componente={<SearchBar fn={filtrar} />} >
    { (remerasF.length > 0)
      ? remerasF.map(each => 
      <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />)
      : <img src="./not_found_articulos.png" alt='not found' />
    }
    </Market>
  )
}

export default CamisetasF