import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import productosAction from '../../redux/actions/productosAction'
import Producto from '../Producto/Producto'
import './cart.css'


const Cart = () => {
    let dispatch = useDispatch()
    let { productos } = useSelector(store => store.productos)
    //let { carrito } = useSelector(store => store.carritoR)
    let {getProductos} = productosAction
    let [carritoFinal, setCarritoFinal] = useState('')
    let [reload, setReload] = useState(true)
    let [total, setTotal] = useState('')

    
    useEffect( () => {
        let carritoLocal = localStorage.getItem('carrito')
        setCarritoFinal(JSON.parse(carritoLocal))
    }, [reload])
    console.log(carritoFinal);
    
    useEffect( () => {
        if(carritoFinal.length > 0){
            setTotal(carritoFinal?.reduce( (acc, art) => acc + art.precio * art.cantidad, 0))
        } else{
            setTotal(0)
        }
    }, [])
    console.log("TOTAL ->", total)
    
    //console.log(carritoFinal);

    useEffect( () => {
        dispatch(getProductos())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const limpiarCarrito = () => {
        Swal.fire({
            title: 'Estás seguro de limpiar el carrito?',
            text: "No podrás recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar todo!'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Carrito vacío',
                'Los articulos se eliminaron de forma exitosa.',
                'success'
                )
                localStorage.removeItem('carrito')
                setReload(!reload)
            }
            })
    }

    const borrarUno = (e) => {
        console.log(e)
    }

    return(

        <div className='carritoContendor'>
            <h2 >Carrito</h2>
            { carritoFinal ?
                ((carritoFinal.length) > 0
                ? 
                <>
                    {carritoFinal.map((prod, indice) => 
                    <Producto key={indice} id={prod._id} fnBorrarUno={borrarUno} fnBorrarTodos={() => {}} nombre={prod.nombre} tipo={prod.tipo} cantidad={prod.cantidad} foto={prod.foto} precio={prod.precio} />)}
                    <div className='totalDelCarrito'>
                        <h3 style={{color: 'black'}}>{` TOTAL: $${total}`}</h3>
                    </div>
                    <button onClick={limpiarCarrito} >Limpiar carrito</button>
                </>
                : <h2>No tenés articulos en el carrito &#128553;</h2>
                )
            :
            <>
                <h2>No tenés articulos en el carrito &#128553; </h2>
            </>
            }
        </div>

    )
}

export default Cart