import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraMActions from '../../redux/actions/remeraMAction';
import CardRemera from '../../components/cardRemera/CardRemera';
import Market from '../../components/market/Market';
import SearchBar from '../../components/searchBar/SearchBar'
import Select from '../../components/order/Select'

export default function CamisetasM() {
    const dispatch = useDispatch();
    const { getRemeraM, filtrarRemerasM } = remeraMActions;
    const { remerasM, ordenPrecio, busqueda } = useSelector((state) => state.remerasM);
    //console.log(remerasM)

    useEffect(() => {
        dispatch(getRemeraM());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (ordenPrecio || busqueda) {
            let data = {
                nombre: busqueda,
                order: ordenPrecio,
            }
            dispatch(filtrarRemerasM(data))
        } else {
            dispatch(getRemeraM())
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
        dispatch(filtrarRemerasM(data))
    }
    
/*     const filtrar = (event) => {
        dispatch(filtrarRemerasM(event.target.value.trim()))
    } */

    return (
        <Market nombre={'Camisetas de Hombres'} componente={<SearchBar fn={filtrarOrden} />} segundocomp={<Select fn={filtrarOrden} />} >
        { (remerasM.length > 0)
            ? remerasM.map(each => 
            <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />)
            : <img src="./not_found_articulos.png" alt='not found' />
        }
        </Market>
    )
}
