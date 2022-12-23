import { useEffect, useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
//import productosAction from '../../redux/actions/productosAction'
import Producto from '../Producto/Producto'
import './cart.css'


const Cart = () => {
    // let dispatch = useDispatch()
    // let { productos } = useSelector(store => store.productos)
    // let { carrito } = useSelector(store => store.carritoR)
    // let {getProductos} = productosAction
    let [carritoFinal, setCarritoFinal] = useState('')
    let [reload, setReload] = useState(true)
    let [total, setTotal] = useState('')

    
    useEffect( () => {
        let carritoLocal = localStorage.getItem('carrito')
        setCarritoFinal(JSON.parse(carritoLocal))
        
    }, [reload])
    console.log(carritoFinal);
    
    useEffect( () => {
        if(carritoFinal?.length > 0){
            setTotal(carritoFinal?.reduce( (acc, art) => acc + art.precio * art.cantidad, 0))
        }
    }, [carritoFinal])
    console.log("TOTAL ->", total)
    
    //console.log(carritoFinal);

    // useEffect( () => {
    //     dispatch(getProductos())
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

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
        //console.log(e)
        //console.log(encontrado);
        // setCarritoFinal(restando)
        //console.log("2",carritoFinal);
        let encontrado = carritoFinal.find( art => art.id === e?.target?.id)
        if (encontrado.cantidad !== 1){
            setCarritoFinal(carritoFinal.map((prod) => (prod.id === encontrado.id) && prod.cantidad--))
            guardarEnLocal()
            //console.log("3",carritoFinal);
        }
        setReload(!reload)
    }

    const agregarUno = (e) => {
        let encontrado = carritoFinal.find( art => art.id === e?.target?.id)
        if (encontrado.cantidad < encontrado.stock[0]){
            setCarritoFinal(carritoFinal.map((prod) => (prod.id === encontrado.id) && prod.cantidad++))
            guardarEnLocal()
            //console.log("3",carritoFinal);
        }
        setReload(!reload)
    }

    const borrarTodos = (e) => {
        //console.log("2",carritoFinal)
        let encontrado = carritoFinal.find( art => art.id === e?.target?.id)
        //console.log("encotnraod",encontrado);
        if (encontrado){
            let filtrado = carritoFinal.filter( art => art !== encontrado)
            //console.log("filtrado", filtrado);
            guardarFiltradoEnLocal(filtrado)
            setCarritoFinal(filtrado)
        }
        //console.log("4",carritoFinal);
        // guardarEnLocal()
        setReload(!reload)
    }



    const guardarEnLocal = () => {
        localStorage.setItem('carrito', JSON.stringify(carritoFinal))
    }

    const guardarFiltradoEnLocal = (data) => {
        localStorage.setItem('carrito', JSON.stringify(data))
    }

    return(

        <div className='carritoContendor'>
            <h2 >Carrito</h2>
            { carritoFinal ?
                ((carritoFinal.length) > 0
                ? 
                <>
                    {carritoFinal.map((prod, indice) => 
                    <Producto key={indice} id={prod.id} borrarUno={borrarUno} agregarUno={agregarUno} borrarTodos={borrarTodos} nombre={prod.nombre} tipo={prod.tipo} cantidad={prod.cantidad} foto={prod.foto} precio={prod.precio} />)}
                    <div className='totalDelCarrito'>
                        <h3>{` TOTAL: $${total}`}</h3>
                    </div>
                    <div className='botonesFinalCarrito'>
                        <button className='custom-btn btn-7' onClick={limpiarCarrito} ><span>Limpiar carrito</span></button>
                        <button className="custom-btn btn-3" onClick={() => alert("usar pasarela de pago")} ><span>Confirmar compra</span></button>
                    </div>
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