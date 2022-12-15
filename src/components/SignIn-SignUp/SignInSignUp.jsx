import React from 'react'
import './SignInSignUp.css'
import { useEffect, useState } from 'react'

export default function SignInSignUp() {
    

    let [container, setContainer] = useState(null)
    useEffect( () => {
        setContainer(document.getElementById('containerS'))
    }, [])
    console.log(container);
    async function botonSignUp(event) {
        container.classList.add("right-panel-active")
    }

    async function botonSignIn(event) {
        container.classList.remove("right-panel-active")
    }

    return (
        <div className='bodyS'>
            <div class="containerS" id="containerS">
                <div class="form-containerS sign-up-containerS">
                    <form action="#">
                        <h1>Crear cuenta</h1>
                        <div class="social-containerS">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>o use su correo electrónico para registrarse</span>
                        <input className='inputS' type="text" placeholder="Nombre" />
                        <input className='inputS' type="email" placeholder="Correo" />
                        <input className='inputS' type="password" placeholder="Contraseña" />
                        <button className='buttonS'>Registrarme</button>
                    </form>
                </div>
                <div class="form-containerS sign-in-containerS">
                    <form action="#">
                        <h1>Inicia sesión</h1>
                        <div class="social-containerS">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>o usa tu cuenta</span>
                        <input className='inputS' type="email" placeholder="Correo" />
                        <input className='inputS' type="password" placeholder="Contraseña" />
                        <a href="#">¿Olvidó su contraseña?</a>
                        <button className='buttonS'>Inicia sesión</button>
                    </form>
                </div>
                <div class="overlay-containerS">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>¡Bienvenido!</h1>
                            <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                            <button className='buttonS' class="ghost" onClick={botonSignIn} id="signIn">Inicia sesión</button >
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>¡Hola amigo!</h1>
                            <p>Introduce tus datos personales y comienza el viaje con nosotros</p>
                            <button className='buttonS' class="ghost" onClick={botonSignUp} id="signUp">Registrame</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
