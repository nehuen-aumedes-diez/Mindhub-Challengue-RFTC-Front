import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraMAction from "../../redux/actions/remeraMAction"
import CardRemerasMAdmin from '../../components/CardProductosAdmin/CardRemerasMAdmin';

export default function RemerasMAdmin() {
    const dispatch = useDispatch();
    const { getRemeraM } = remeraMAction;
    const { remerasM } = useSelector((state) => state.remerasM);

    useEffect(() => {
        dispatch(getRemeraM());
        
    }, [])
    console.log(remerasM)
    return (
        <>
         

        <div className='ProductosAdmin-contenedor'>
    {remerasM.map(todasLasRemeras => <CardRemerasMAdmin key={todasLasRemeras._id} img={todasLasRemeras?.foto1} nombre={todasLasRemeras?.nombre} id={todasLasRemeras._id} precio={todasLasRemeras.precio} talle={todasLasRemeras.talle} />)}

       </div>
        </>
    )
}

