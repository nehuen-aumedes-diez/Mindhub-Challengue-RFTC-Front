import React from 'react'
import './cardRemera.css'
import { Link as LinkRouter } from 'react-router-dom'

function cardRemera(props) {
    let { id, precio, nombre,img} = props

return (
    <div className='supergeneral'>
{/*         <div class="contenedorespecial shoe">
            <div class="productImage shoeImg"></div>
            <div class="size shoeSize">
                <h4>TALLE</h4>
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </div>
            <div class="price shoePrice">
                <h4>PRECIO</h4>
                <span>$8500</span>
            </div>
            <div class="comprar shoeComprar">
                <LinkRouter to='/camisetasFDetalles' className='link'><span>COMPRAR</span></LinkRouter>
            </div>
            <div class="productName shoeName">
                El Ciclón
            </div>
        </div> */}
        {/* DE FORMA DINAMICA */}

        <div id={id} className="contenedorespecial shoe">
            <div className="productImage shoeImg">
                <img src={img} alt=''/>
            </div>
            <div className="size shoeSize">
                <h4>TALLE</h4>
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </div>
            <div className="price shoePrice">
                <h4>PRECIO</h4>
                <span>${precio}</span>
            </div>
            <div className="comprar shoeComprar">
                <LinkRouter to={id} className='link'><span>COMPRAR</span></LinkRouter>
            </div>
            <div className="productName shoeName">
                {nombre}
            </div>
        </div>
    </div>
)
}

export default cardRemera