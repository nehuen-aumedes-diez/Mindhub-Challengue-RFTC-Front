import Producto from '../Producto/Producto'
import './cart.css'


const Cart = () => {

    return(

        <div className='carritoContendor'>
        <h2 >Carrito</h2>
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />


        </div>

    )
}

export default Cart