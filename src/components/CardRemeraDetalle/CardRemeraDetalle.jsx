import React from 'react'
import './CardRemeraDetalle.css'

function CardRemeraDetalle() {
  return (
    <div className='supergeneral-detalle'>
        <div class="contenedor-detalleF">
            <div class="imagen-producto remeraImg">
                <img src='https://cdn.shopify.com/s/files/1/0015/5841/3357/products/PERCHAS-ARGENTINA-WOMEN-CUERVO_550x.png?v=1627407396' alt='' />
            </div>
            <div className='contenedor-2'>
                <div class="nombre-producto">
                    El Ciclón
                </div>
                <div class="talle-producto">
                    <h4>TALLE</h4>
                    <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                </div>
                <div class="precio-producto">
                    <span>$8500</span>
                </div>
                <div class="descripcion-producto">
                    <span>Lorem ipsum amet te fuiste a la B por puto e cagon</span>
                </div>
                <div class="comprar-producto">
                    <span>AGREGAR AL CARRITO</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardRemeraDetalle