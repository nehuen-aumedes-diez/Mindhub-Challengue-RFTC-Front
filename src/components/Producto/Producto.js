import React, { useEffect, useState } from 'react'
import './Producto.css'

const Cart = (props) => {
    let { id, nombre, precio, foto, cantidad, tipo, borrarUno, borrarTodos, agregarUno} = props

    let [carritoFinal, setCarritoFinal] = useState('')
    let [reload, setReload] = useState(true)

    useEffect( () => {
        let carritoLocal = localStorage.getItem('carrito')
        setCarritoFinal(JSON.parse(carritoLocal))
    }, [reload])


    const guardarEnLocal = () => {
        localStorage.setItem('carrito', JSON.stringify(carritoFinal))
    }
    
    console.log("1",carritoFinal);
    return(
        <div className='carritoItem' id={id}>
            <h2>{nombre} - {tipo}</h2>
            <div className='fotoytitulocarrito'>
                <div className='fotoDeItemCarrito'>
                    <img src={foto} alt='' />
                </div>
                <div id='detailsCompra'>
                    <h5>${precio}</h5>
                    <p>Cantidad: {cantidad}</p>
                    <p>Subtotal: ${cantidad * precio}</p>
                </div>
            </div>
            <div className='botonesDeItemCarrito'>
                <button className='borrarUnoCarrito' id={id} onClick={borrarUno}>-</button>
                <button className='agregarUnoCarrito' id={id} onClick={agregarUno}>+</button>
                <button className='custom-btn btn-7'id={id} onClick={borrarTodos}><span>Eliminar todos</span></button>
            </div>
        </div>
    )
}

export default Cart