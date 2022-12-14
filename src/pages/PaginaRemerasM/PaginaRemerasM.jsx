import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import remeraMActions from '../../redux/actions/remeraMAction';

export default function PaginaRemerasM() {
    const dispatch = useDispatch();
    const { getRemeraM } = remeraMActions;
    const { remerasM } = useSelector((state) => state.remerasM);

    useEffect(() => {

        dispatch(getRemeraM());

    }, [])

    console.log(remerasM);

    return (
        <div>
            RemerasM
        </div>
    )
}
