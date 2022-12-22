import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraFAction from "../../redux/actions/remeraFAction"
import CardRemerasFAdmin from '../../components/CardProductosAdmin/CardRemerasFAdmin';

export default function RemerasFAdmin() {
    const dispatch = useDispatch();
    const { getRemeraF } = remeraFAction;
    const { remerasF } = useSelector((state) => state.remerasF);

    useEffect(() => {
        dispatch(getRemeraF());
        
    }, [])
    console.log(remerasF)
      return (
       <div className='ProductosAdmin-contenedor'>
  
    {remerasF.map(todasLasRemeras => <CardRemerasFAdmin key={todasLasRemeras._id} img={todasLasRemeras?.foto1} nombre={todasLasRemeras?.nombre} id={todasLasRemeras._id} precio={todasLasRemeras.precio} talle={todasLasRemeras.talle} />)}

       </div>
    )
}

