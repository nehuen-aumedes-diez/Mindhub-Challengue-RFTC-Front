import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraFActions from '../../redux/actions/remeraFAction';

export default function PaginaRemerasF() {
    const dispatch = useDispatch();
    const { getRemeraF } = remeraFActions;
    const { remerasF } = useSelector((state) => state.remerasF);

    useEffect(() => {

        dispatch(getRemeraF());

    }, [])

    console.log(remerasF);

    return (
        <div>
            RemerasF
        </div>
    )
}
