import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import gorraActions from '../../redux/actions/gorraAction'
import '../CardRemeraDetalle/CardRemeraDetalle.css'

function CardGorraDetalle(props) {

    let {id} = useParams()
    let dispatch = useDispatch()
    //console.log("ID",id)
    const {getOneGorraId} = gorraActions
    let {gorraId} = useSelector(store => store.gorras)
    
    useEffect( () => {
        dispatch(getOneGorraId(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let miGorra = gorraId?.gorraId?.[0]
    console.log("GORRA", miGorra);
    
        const agregarAlCarrito = () => {
            let productoAgregado = {
                id: miGorra?._id,
                nombre: miGorra?.nombre,
                foto: miGorra?.foto1,
                precio: miGorra?.precio,
                stock: miGorra?.stock,
            }
            console.log("producto agregado", productoAgregado);
        }

  return (
    <div className='supergeneral-detalle'>
        <div className="contenedor-detalleF">
            <div id="carouselExampleIndicators" class="carousel slide imagen-producto" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={miGorra?.foto1} class="d-block w-100" alt={miGorra?.nombre} />
                    </div>
                    <div class="carousel-item">
                        <img src={miGorra?.foto2} class="d-block w-100" alt={miGorra?.nombre} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className='contenedor-2'>
                <div className="nombre-producto">
                    {miGorra?.nombre}
                </div>
                <div className="talle-producto">
                    <h4>{miGorra?.stock} en stock</h4>
                </div>
                <div className="precio-producto">
                    <span>${miGorra?.precio}</span>
                </div>
                <div className="descripcion-producto">
                    <span>{miGorra?.descripcion}</span>
                </div>
                <div className="comprar-producto">
                    <span  onClick={agregarAlCarrito} >AGREGAR AL CARRITO</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardGorraDetalle