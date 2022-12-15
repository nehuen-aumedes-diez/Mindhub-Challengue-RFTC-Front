import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import remeraFActions from '../../redux/actions/remeraFAction'
import './CardRemeraDetalle.css'

function CardRemeraDetalle(props) {

    let {id} = useParams()
    let dispatch = useDispatch()
    //console.log("ID",id)
    const {getOneRemeraFId} = remeraFActions
    let {remeraFencontrada} = useSelector(store => store.remerasF)

    useEffect( () => {
        dispatch(getOneRemeraFId(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    let miRemera = remeraFencontrada[0]

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
                        <img src={miRemera?.foto1} class="d-block w-100" alt={miRemera?.nombre} />
                    </div>
                    <div class="carousel-item">
                        <img src={miRemera?.foto2} class="d-block w-100" alt={miRemera?.nombre} />
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
                    {miRemera?.nombre}
                </div>
                <div className="talle-producto">
                    <h4>TALLE</h4>
                    <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                </div>
                <div className="precio-producto">
                    <span>${miRemera?.precio}</span>
                </div>
                <div className="descripcion-producto">
                    <span>{miRemera?.descripcion}</span>
                </div>
                <div className="comprar-producto">
                    <span>AGREGAR AL CARRITO</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardRemeraDetalle