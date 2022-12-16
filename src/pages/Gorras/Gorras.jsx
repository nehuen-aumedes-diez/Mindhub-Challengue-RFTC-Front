import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gorraActions from '../../redux/actions/gorraAction';
import CardRemera from "../../components/cardRemera/CardRemera"
import Market from '../../components/market/Market'
import SearchBar from '../../components/searchBar/SearchBar'

export default function Gorras() {
    const dispatch = useDispatch();
    const { getGorra, filtrarGorras } = gorraActions;
    const { gorras } = useSelector((state) => state.gorras);

    useEffect(() => {
        dispatch(getGorra());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filtrar = (event) => {
      dispatch(filtrarGorras(event.target.value.trim()))
    }


  return (
    <Market nombre={'Camisetas de Mujeres'} fn={filtrar} componente={<SearchBar fn={filtrar} />} >
    { (gorras.length > 0)
      ? gorras.map(each => 
      <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />)
      : <img src="./not_found_articulos.png" alt='not found' />
    }
    </Market>
  )
}
