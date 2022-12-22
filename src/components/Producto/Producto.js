import React, { useEffect, useState } from 'react'
import './Producto.css'

const Cart = (props) => {
    let { id, nombre, precio, fnBorrarTodos, foto, cantidad, tipo} = props

    let [carritoFinal, setCarritoFinal] = useState('')
    let [reload, setReload] = useState(true)

    useEffect( () => {
        let carritoLocal = localStorage.getItem('carrito')
        setCarritoFinal(JSON.parse(carritoLocal))
    }, [reload])
    //console.log(carritoFinal)
    //console.log(id)
    
    const borrarUno = () => {
        let put = carritoFinal.find(item => item.id === id)
        //console.log(put);
        /*  if (put.cantidad !== 1){
            put.cantidad--
        } */
        setReload(!reload)
    }
    
    return(
        <div className='carritoItem' id={id}>
            <h2>{nombre} - {tipo}</h2>
            <div className='fotoytitulocarrito'>
                <div>
                    <img src={foto} style={{width: '100px'}} alt='' />
                </div>
                <div id='detailsCompra'>
                    <h5>${precio}</h5>
                    <p>Cantidad: {cantidad}</p>
                    <p>Subtotal: ${cantidad * precio}</p>
                </div>
            </div>
            <div className='botonesDeItemCarrito'>
                <button className='borrarUnoCarrito' onClick={borrarUno}>Eliminar uno</button>
                <button className='borrarUnoCarrito' onClick={fnBorrarTodos}>Eliminar todos</button>
            </div>
        </div>
    )
}

export default Cart