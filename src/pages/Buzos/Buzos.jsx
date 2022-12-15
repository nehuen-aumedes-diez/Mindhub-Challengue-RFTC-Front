import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardRemera from "../../components/CardRemera/CardRemera"
import buzoActions from '../../redux/actions/buzoAction';
import Market from '../../components/market/Market'

export default function Buzos() {
    const dispatch = useDispatch();
    const { getBuzo } = buzoActions;
    const { buzos } = useSelector((state) => state.buzos);

    useEffect(() => {
        dispatch(getBuzo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(buzos);

    return (
        <Market>
        {
            buzos.map(each => 
            <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />
        )}
        </Market>
    )
}
