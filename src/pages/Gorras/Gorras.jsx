import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gorraActions from '../../redux/actions/gorraAction';
import CardRemera from "../../components/CardRemera/CardRemera"
import Market from '../../components/market/Market'

export default function Gorras() {
    const dispatch = useDispatch();
    const { getGorra } = gorraActions;
    const { gorras } = useSelector((state) => state.gorras);

    useEffect(() => {
        dispatch(getGorra());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(gorras);


  return (
    <Market>
    {
      gorras.map(each => 
      <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />
    )}
    </Market>
  )
}
