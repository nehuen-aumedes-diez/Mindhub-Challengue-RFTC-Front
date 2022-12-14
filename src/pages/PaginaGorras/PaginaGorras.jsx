import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gorraActions from '../../redux/actions/gorraAction';

export default function PaginaGorras() {
    const dispatch = useDispatch();
    const { getGorra } = gorraActions;
    const { gorras } = useSelector((state) => state.gorras);

    useEffect(() => {

        dispatch(getGorra());

    }, [])

    console.log(gorras);


  return (
    <div>PaginaGorras</div>
  )
}
