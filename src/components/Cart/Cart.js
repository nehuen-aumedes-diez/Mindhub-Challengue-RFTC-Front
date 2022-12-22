import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productosAction from '../../redux/actions/productosAction'
import Producto from '../Producto/Producto'
import './cart.css'


const Cart = () => {
    let dispatch = useDispatch()
    let { productos } = useSelector(store => store.productos)
    let { carrito } = useSelector(store => store.carritoR)
    let {getProductos} = productosAction
    console.log(productos);
    console.log(carrito);

    useEffect( () => {
        dispatch(getProductos())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const limpiarCarrito = () => {

    }

    return(

        <div className='carritoContendor'>
        <h2 >Carrito</h2>
        { carrito.length > 0
        ? carrito.map((prod, indice) => 
            <Producto key={indice} id={prod._id} nombre={prod.nombre} foto={prod.foto} precio={prod.precio} />
        )
        : <h2>Holis no hay nada pa ver</h2>
        }

        <button onClick={limpiarCarrito} >Limpiar carrito</button>
        </div>

    )
}

export default Cart