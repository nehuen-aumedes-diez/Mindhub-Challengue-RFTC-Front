import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './order.css'

export default function Select(props) {
    
    let {fn}=props
    let select = useRef()
    //const { ordenPrecio } = useSelector( store => store.remerasF)
    //console.log("select value: ",select)
    //console.log('STORE ORDEN PRECIO: ', ordenPrecio);

/*     useEffect( () => {
      if (ordenPrecio){
        if(ordenPrecio == ""){
          select.current.value = "0"
        } else{
          select.current.value = ordenPrecio

        }
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */

  return (
    <select className='order' name="orden" onChange={fn} ref={select} >
            <option value="0">Orden</option>
            <option value="precio-desc">$$$: Mayor a menor</option>
            <option value="precio-asc">$$$: Menor a mayor</option>
    </select>
  )
}
