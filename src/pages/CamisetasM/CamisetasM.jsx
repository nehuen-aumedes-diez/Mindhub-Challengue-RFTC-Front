import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraMActions from '../../redux/actions/remeraMAction';
import CardRemera from '../../components/cardRemera/CardRemera';
import Market from '../../components/market/Market';
import SearchBar from '../../components/searchBar/SearchBar'

export default function CamisetasM() {
    const dispatch = useDispatch();
    const { getRemeraM, filtrarRemerasM } = remeraMActions;
    const { remerasM } = useSelector((state) => state.remerasM);
    //console.log(remerasM)

    useEffect(() => {

        dispatch(getRemeraM());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filtrar = (event) => {
        dispatch(filtrarRemerasM(event.target.value.trim()))
    }

    return (
        <Market nombre={'Camisetas de Hombres'} fn={filtrar} componente={<SearchBar fn={filtrar} />} >
        { (remerasM.length > 0)
            ? remerasM.map(each => 
            <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />)
            : <img src="./not_found_articulos.png" alt='not found' />
        }
        </Market>
    )
}
