import React from 'react'
import './cardRemera.css'

function cardRemera() {
return (
    <body>
        <div class="container shoe">
            <div class="productImage shoeImg"></div>
            <div class="size shoeSize">
                <h4>SIZE</h4>
                <ul>
                    <li>9</li>
                    <li>8</li>
                    <li>7</li>
                </ul>
            </div>
            <div class="price shoePrice">
                <h4>PRICE</h4>
                <span>$150</span>
            </div>
            <div class="color shoeColor">
                <h4>COLORS</h4>
                <ul>
                    <li><span class="blue"></span></li>
                    <li><span class="yellow"></span></li>
                    <li><span class="red"></span></li>
                </ul>
            </div>
            <div class="productName shoeName">
                Nike Air Max
            </div>
        </div>
        <div class="container shirt">
            <div class="productImage shirtImg"></div>
            <div class="size shirtSize">
                <h4>SIZE</h4>
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                </ul>
            </div>
            <div class="price shirtPrice">
                <h4>PRICE</h4>
                <span>$50</span>
            </div>
            <div class="color shirtColor">
                <h4>COLORS</h4>
                <ul>
                    <li><span class="blue"></span></li>
                    <li><span class="yellow"></span></li>
                    <li><span class="red"></span></li>
                </ul>
            </div>
            <div class="productName shirtName">
                Crew-neck t-shirt
            </div>
        </div>
    </body>
)
}

export default cardRemera