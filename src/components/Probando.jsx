import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import buzoActions from '../redux/actions/buzoAction';

export default function Probando() {
    const dispatch = useDispatch();
    const { getBuzo } = buzoActions;
    const { busos } = useSelector((state) => state.busos);

    useEffect(() => {

        dispatch(getBuzo());

    }, [])

    console.log(busos);

    return (
        <div>
            holaaaaaa
        </div>
    )
}
