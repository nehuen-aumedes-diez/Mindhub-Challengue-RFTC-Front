import React from 'react'
import './cardRemera.css'
import { Link as LinkRouter } from 'react-router-dom'

function cardRemera(props) {
    let { id, precio, nombre,img} = props

return (
    <div className='supergeneral'>
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