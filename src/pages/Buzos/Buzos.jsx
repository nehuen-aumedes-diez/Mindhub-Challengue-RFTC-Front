import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardRemera from "../../components/cardRemera/CardRemera"
import buzoActions from '../../redux/actions/buzoAction';
import Market from '../../components/market/Market'
import SearchBar from '../../components/searchBar/SearchBar'

export default function Buzos() {
    const dispatch = useDispatch();
    const { getBuzo, filtrarBuzos } = buzoActions;
    const { buzos } = useSelector((state) => state.buzos);

    useEffect(() => {
        dispatch(getBuzo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filtrar = (event) => {
        dispatch(filtrarBuzos(event.target.value.trim()))
      }

    return (
        <Market nombre={'Buzos Unisex'} fn={filtrar} componente={<SearchBar fn={filtrar} />} >
        { (buzos.length > 0)
          ? buzos.map(each => 
          <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />)
          : <img src="./not_found_articulos.png" alt='not found' />
        }
        </Market>
    )
}
