import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


const Cart = (props) => {
    let { id, nombre, precio, funcionBorrar} = props
    return(

        <div id={id}>
            <h2>{nombre}</h2>
            <h5>{precio}</h5>
            <button onClick={funcionBorrar}>Eliminar uno</button>
            <button onClick={funcionBorrar}>Eliminar todos</button>
        </div>

    )
}

export default Cart