import React from 'react'
import '../styles/home1.css';


export default function Home1() {
  const tittle = "¡CADA VEZ MÁS CERCA!.";
  const sub = " Pintemos la semifinal de celeste y blanco. ¡Todos con Argentina! "
return(
<>

<div className='banner1'>
<div className='logo'>
    <img className='logo1' src=''></img>
</div>
<img className='banner' src='https://cnnespanol.cnn.com/wp-content/uploads/2022/06/GettyImages-1400968249-e1654535112446.jpg?quality=100&strip=info' ></img>
<h1 className="tittle-home">{tittle}</h1>
<p className='subt'>{sub}</p>



<div className='btn1-cont'>

<button className='btn1'> ver camiseta </button>

</div>

<div className='btn2-cont'>

<button className='btn2'> conocé más </button>

</div>

</div>

 <div>

    <img className='imgCamisetas' src="//cdn.shopify.com/s/files/1/0016/1061/2806/files/20221101_153113.jpg?v=1667458746&width=2200 2200w"></img>

</div> 





</>






)
}