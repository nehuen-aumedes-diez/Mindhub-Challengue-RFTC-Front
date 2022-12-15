import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardRemera from "../../components/CardRemera/CardRemera"
import remeraFActions from '../../redux/actions/remeraFAction'
import Market from '../../components/market/Market'

function CamisetasF() {
  const dispatch = useDispatch()
  const {getRemeraF} = remeraFActions
  const {remerasF} = useSelector( store => store.remerasF)

  useEffect( () => {
      dispatch(getRemeraF())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  console.log(remerasF)

  return (
    <Market>
    {
      remerasF.map(each => 
      <CardRemera key={each._id} id={each._id} precio={each.precio} nombre={each.nombre} img={each.foto1} />
    )}
    </Market>
  )
}

export default CamisetasF