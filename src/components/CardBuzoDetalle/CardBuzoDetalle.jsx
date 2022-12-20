import React, { useEffect, useState } from 'react'
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
    console.log(buzoId?.buzoId);
    let miBuzo = buzoId?.buzoId?.[0]
    console.log("BUZO", miBuzo);

        // ------- COLORES DE LOS TALLES SEGUN LA DISPONIBILIDAD DEL STOCK ------------
        let stockS = miBuzo?.stock[0]
        let stockM = miBuzo?.stock[1]
        let stockL = miBuzo?.stock[2]
        let stockXL = miBuzo?.stock[3]
    
        let colorS
        let colorM
        let colorL
        let colorXL
        
        if(stockS >=1 && stockS <=3){
            colorS = 'naranja'
        }else if (stockS >= 4 && stockS <=10){
            colorS = 'amarillo'
        } else if (stockS >= 11){
            colorS = 'verde'
        } else if (stockS === 0){
            colorS = 'rojo'
        }
    
        if(stockM >=1 && stockM <=3){
            colorM = 'naranja'
        }else if (stockM >= 4 && stockM <=10){
            colorM = 'amarillo'
        } else if (stockM >= 11){
            colorM = 'verde'
        } else if (stockM === 0){
            colorM = 'rojo'
        }
    
        if(stockL >=1 && stockL <=3){
            colorL = 'naranja'
        }else if (stockL >= 4 && stockL <=10){
            colorL = 'amarillo'
        } else if (stockL >= 11){
            colorL = 'verde'
        } else if (stockL === 0){
            colorL = 'rojo'
        }
        
        if(stockXL >=1 && stockXL <=3){
            colorXL = 'naranja'
        }else if (stockXL >= 4 && stockXL <=10){
            colorXL = 'amarillo'
        } else if (stockXL >= 11){
            colorXL = 'verde'
        } else if (stockXL === 0){
            colorXL = 'rojo'
        }
        // --------------------------------------------------
    
        let [talleElegido, setTalleElegido] = useState('')
        let [talleActivoS, setTalleActivoS] = useState('')
        let [talleActivoM, setTalleActivoM] = useState('')
        let [talleActivoL, setTalleActivoL] = useState('')
        let [talleActivoXL, setTalleActivoXL] = useState('')
        let [reload, setReload] = useState(true)
    
        const guardarTalle = (event) => {
            console.log("TALLE ELEGIDO ->", event?.target?.textContent);
            setTalleElegido(event?.target?.textContent)
            setReload(!reload)
        }
        useEffect( () => {
            if(talleElegido === 'S'){
                setTalleActivoS(`${talleElegido}-talleactivo`)
                setTalleActivoM('')
                setTalleActivoL('')
                setTalleActivoXL('')
            }
            if(talleElegido === 'M'){
                setTalleActivoM(`${talleElegido}-talleactivo`)
                setTalleActivoS('')
                setTalleActivoL('')
                setTalleActivoXL('')
            }
            if(talleElegido === 'L'){
                setTalleActivoL(`${talleElegido}-talleactivo`)
                setTalleActivoS('')
                setTalleActivoM('')
                setTalleActivoXL('')
            }
            if(talleElegido === 'XL'){
                setTalleActivoXL(`${talleElegido}-talleactivo`)
                setTalleActivoS('')
                setTalleActivoM('')
                setTalleActivoL('')
            }
            console.log("S ->", talleActivoS);
            console.log("M ->", talleActivoM);
            console.log("L ->", talleActivoL);
            console.log("XL ->", talleActivoXL);
        }, [reload])
    
        const agregarAlCarrito = () => {
            let productoAgregado = {
                tipo: 'Buzo',
                id: miBuzo?._id,
                nombre: miBuzo?.nombre,
                foto: miBuzo?.foto1,
                precio: miBuzo?.precio,
                stock: miBuzo?.stock,
                talle: talleElegido
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
                        <img src={miBuzo?.foto1} class="d-block w-100" alt={miBuzo?.nombre} />
                    </div>
                    <div class="carousel-item">
                        <img src={miBuzo?.foto2} class="d-block w-100" alt={miBuzo?.nombre} />
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
                    {miBuzo?.nombre}
                </div>
                <div className="talle-producto">
                    <h4>TALLE</h4>
                    <ul>
                        <li className={`${colorS}`} id={`${talleActivoS}`} onClick={guardarTalle}>S</li>
                        <li className={`${colorM}`} id={`${talleActivoM}`} onClick={guardarTalle}>M</li>
                        <li className={`${colorL}`} id={`${talleActivoL}`} onClick={guardarTalle}>L</li>
                        <li className={`${colorXL}`} id={`${talleActivoXL}`} onClick={guardarTalle}>XL</li>
                    </ul>
                </div>
                <div className="precio-producto">
                    <span>${miBuzo?.precio}</span>
                </div>
                <div className="descripcion-producto">
                    <span>{miBuzo?.descripcion}</span>
                </div>
                <div className="comprar-producto">
                    <span onClick={agregarAlCarrito}>AGREGAR AL CARRITO</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardBuzoDetalle