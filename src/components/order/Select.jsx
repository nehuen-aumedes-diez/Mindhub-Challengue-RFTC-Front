import React from 'react'
import './order.css'

export default function Select(props) {
    
    let {value}=props


  return (
    <select  clasename='order' name="orden" onChange={value}>
            <option value="0">Orden</option>
            <option value="2">A-Z</option>
            <option value="1">Z-A</option>
            <option value="3">Precio, Mayor a menor</option>
            <option value="3">Precio, menor a Mayor</option>
    </select>
  )
}
