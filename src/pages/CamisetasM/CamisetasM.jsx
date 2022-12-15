import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraMActions from '../../redux/actions/remeraMAction';
import CardRemera from '../../components/CardRemera/CardRemera';
import Market from '../../components/market/Market';

export default function CamisetasM() {
    const dispatch = useDispatch();
    const { getRemeraM } = remeraMActions;
    const { remerasM } = useSelector((state) => state.remerasM);
    console.log(remerasM)

    useEffect(() => {

        dispatch(getRemeraM());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(remerasM);

    return (
        <Market>
        {
            remerasM.map(each => 
            <CardRemera  key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />
        )}
        </Market>
    )
}
