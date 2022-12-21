import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGorraAdmin from "../../components/CardProductosAdmin/CardGorraAdmin"
import gorraActions from '../../redux/actions/gorraAction';
export default function RemerasFAdmin() {
    const dispatch = useDispatch();
    const { getGorra } = gorraActions;
    const { gorras } = useSelector((state) => state.gorras);

    useEffect(() => {
        dispatch(getGorra());
        
    }, [])
    console.log(gorras)
      return (
       <div className='ProductosAdmin-contenedor'>
  
    {gorras.map(todasLasGorras => <CardGorraAdmin key={todasLasGorras._id} img={todasLasGorras?.foto1} nombre={todasLasGorras?.nombre} id={todasLasGorras._id} precio={todasLasGorras.precio} />)}

       </div>
    )
}

