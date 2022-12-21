import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import buzoActions from '../../redux/actions/buzoAction';
import CardBuzosAdmin from '../../components/CardProductosAdmin/CardBuzosAdmin';


export default function BuzosAdmin() {
    const dispatch = useDispatch();
    const { getBuzo } = buzoActions;
    const { buzos } = useSelector((state) => state.buzos);

    useEffect(() => {
        dispatch(getBuzo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(buzos)
    



 
  


    return (
       <div className='ProductosAdmin-contenedor'>
  
    {buzos.map(todoslosbuzos => <CardBuzosAdmin key={todoslosbuzos._id} img={todoslosbuzos?.foto1} nombre={todoslosbuzos?.nombre} id={todoslosbuzos._id} precio={todoslosbuzos.precio} talle={todoslosbuzos.talle} />)}

       </div>
    )
}

