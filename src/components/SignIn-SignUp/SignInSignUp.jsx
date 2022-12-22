import React, { useState, useEffect } from 'react'
import './SignInSignUp.css'
import "react-confirm-alert/src/react-confirm-alert.css";
import userActions from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

export default function SignInSignUp() {
    
    let dispatch = useDispatch()
    // const container = document.getElementById('containerS')
    let [container, setContainer] = useState(null)
    const navigate = useNavigate();
    useEffect( () => {
        setContainer(document.getElementById('containerS'))
    }, [])

    async function botonSignUp(event) {
        container.classList.add("right-panel-active")
    }
    async function botonSignIn(event) {
        container.classList.remove("right-panel-active")
    }

    const [dataUser, setDataUser] = useState({
        name: '',
        email:'',
        password:''
    })
    const [dataLogin, setDataLogin] = useState({
        email:'',
        password:''
    })

    const getInplut = (e) =>{
        setDataUser({
            ...dataUser,
            [e.target.name] : e.target.value
        })
    }

    const getInplut2 = (e) =>{
        setDataLogin({
            ...dataLogin,
            [e.target.name] : e.target.value
        })
    }

    async function sendData(event) {
        event.preventDefault();
        try {
            // let sendUser = await axios.post(`${BASE_URL}/auth/signup`,dataUser);
            // console.log(sendUser);
            let newUser = await dispatch(userActions.newUser(dataUser))
            console.log(newUser); 
            swal({
                title: "usuario creado",
                text:  "Revisa tu email para finalizar",
                icon: "success",
                timer: "3000"
            })
            event.target.reset()
        } catch(error){
            alert(error);
        }
        }

    async function sendData2(event) {
        event.preventDefault();
        try {
            let res = await dispatch(userActions.signIn(dataLogin))
            if(res.payload.success){
                swal({
                    title: "Bienvenido "+ res.payload.response.user.name,
                    // text:  "You are logged!!",
                    icon: "success",
                    timer: "3000"
                })
                navigate("/")
                event.target.reset()
            } else {
                swal({
                    text: res.payload.response,
                    icon: "warning",
                    dangerMode: true,
                    timer: "5000" 
                })
            }
        } catch(error){
            alert(error);
        }     
} 
 
    return (
        <div className='bodyS'>
            <div class="containerS" id="containerS">
                <div class="form-containerS sign-up-containerS">
                    <form onSubmit={sendData}>
                        <h1>Crear cuenta</h1>
                        <div class="social-containerS">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        {/* <span>o use su correo electrónico para registrarse</span> */}
                        <input className='inputS' type="text"  placeholder="Nombre" name='name' onChange={getInplut}/>
                        <input className='inputS' type="email" placeholder="Correo" name='email' onChange={getInplut} />
                        <input className='inputS' type="password" placeholder="Contraseña" name='password' onChange={getInplut} />
                        <button className='buttonS' type="submit">Registrarme</button>
                    </form>
                </div>
                <div class="form-containerS sign-in-containerS">
                    <form onSubmit={sendData2}>
                        <h1>Inicia sesión</h1>
                        <div class="social-containerS">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        {/* <span>o usa tu cuenta</span> */}
                        <input className='inputS' type="email" placeholder="Correo" name='email' onChange={getInplut2}/>
                        <input className='inputS' type="password" placeholder="Contraseña" name='password' onChange={getInplut2}/>
                        {/* <a href="#">¿Olvidó su contraseña?</a> */}
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
