import React from 'react'
import './Contador.css'

export default function Contador() {
   // Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2023 11:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("dias").innerHTML = days;
  
  document.getElementById("horas").innerHTML = hours;
  
  document.getElementById("minutos").innerHTML = minutes;
  
  document.getElementById("segundos").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("content-conteo").style.display = "none";;
    }
}, 1000);
    return (

            <div id="content-conteo">
                <div id="faltan">
                    <img src="./NUEVO_LANZAMIENTO.png"></img>
                </div>
                <div id="conteo">
                    <div class="wrap-date" >
                        <div class="wrap-time" id="dias"></div>
                        <div class='text-time'>Días</div>
                    </div>
                    <div class="wrap-date">
                        <div class="wrap-time" id="horas"></div>
                        <div class='text-time'>Horas</div>
                    </div>
                    <div class="wrap-date">
                        <div class="wrap-time" id="minutos"></div>
                        <div class='text-time'>Minutos</div>
                    </div>
                    <div class="wrap-date">
                        <div class="wrap-time" id="segundos"></div>
                        <div class='text-time'>Segundos</div>
                    </div>
                </div>
            </div>
    
    )
}
