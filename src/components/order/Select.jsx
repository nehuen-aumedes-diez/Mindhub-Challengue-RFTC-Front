import React from 'react'
import './order.css'

export default function Select(props) {
    
    let {fn}=props


  return (
    <select  className='order' name="orden" onChange={fn}>
            <option value="0">Orden</option>
            <option value="alfa-asc">A-Z</option>
            <option value="alfa-desc">Z-A</option>
            <option value="precio-desc">$$$: Mayor a menor</option>
            <option value="precio-asc">$$$: Menor a mayor</option>
    </select>
  )
}
