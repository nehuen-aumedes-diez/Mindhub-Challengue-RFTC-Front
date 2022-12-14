import React from 'react'
import './SignInSignUp.css'


export default function SignInSignUp() {

    /* const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    }); */

    const container = document.getElementById('containerS')
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
                        <h1>Create Account</h1>
                        <div class="social-containerS">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input className='inputS' type="text" placeholder="Name" />
                        <input className='inputS' type="email" placeholder="Email" />
                        <input className='inputS' type="password" placeholder="Password" />
                        <button className='buttonS'>Sign Up</button>
                    </form>
                </div>
                <div class="form-containerS sign-in-containerS">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-containerS">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input className='inputS' type="email" placeholder="Email" />
                        <input className='inputS' type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button className='buttonS'>Sign In</button>
                    </form>
                </div>
                <div class="overlay-containerS">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className='buttonS' class="ghost" onClick={botonSignIn} id="signIn">Sign In</button >
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className='buttonS' class="ghost" onClick={botonSignUp} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
