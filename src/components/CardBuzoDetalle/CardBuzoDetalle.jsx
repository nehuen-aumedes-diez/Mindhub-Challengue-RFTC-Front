import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import buzoActions from '../../redux/actions/buzoAction'
import '../CardRemeraDetalle/CardRemeraDetalle.css'

function CardBuzoDetalle(props) {

    let {id} = useParams()
    let dispatch = useDispatch()
    //console.log("ID",id)
    const {getOneBuzoId} = buzoActions
    let {buzoId} = useSelector(store => store.buzos)
    
    useEffect( () => {
        dispatch(getOneBuzoId(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let miBuzo = buzoId?.buzoId
    console.log("BUZO", miBuzo);

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
                        <img src={miBuzo?.[0].foto1} class="d-block w-100" alt={miBuzo?.[0].nombre} />
                    </div>
                    <div class="carousel-item">
                        <img src={miBuzo?.[0].foto2} class="d-block w-100" alt={miBuzo?.[0].nombre} />
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
                    {miBuzo?.[0].nombre}
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
                    <span>${miBuzo?.[0].precio}</span>
                </div>
                <div className="descripcion-producto">
                    <span>{miBuzo?.[0].descripcion}</span>
                </div>
                <div className="comprar-producto">
                    <span>AGREGAR AL CARRITO</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardBuzoDetalle