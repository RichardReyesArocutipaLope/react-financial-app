import './Login.css'
import fondo from '../../img/fondo1-scred.jpg'
import logo from '../../img/logo-empresa2.png'
import { InputChekbox } from '../../shared/InputCheckbox/InputChekbox'
import { InputsRow } from '../../shared/InputsRow/InputsRow'

export const Login = () => {
    return (
        <div className='login-container'>
            <img src={fondo} alt="" className='img-fondo' />

            <form action="" className='login__form'>
                <div className='login__logo-container'>
                    <img src={logo} alt="" className='login__logo' />
                </div>
                <h1 className='login__title'>LOAN MATE</h1>
                <div class="input-container">
                    <input class="input-field" type="text" />
                    <label for="input-field" class="input-label">Usuario</label>
                    <span class="input-highlight"></span>
                </div>

                <div class="input-container ctm">
                    <input class="input-field" type="password" />
                    <label for="input-field" class="input-label">Contraseña</label>
                    <span class="input-highlight"></span>
                </div>

                <div className='login__options'>
                    <div class="cntr">
                        <input type="checkbox" id="aea" class="efe" />
                        <label htmlFor="aea" class="aea"></label>
                        <h2>Remember me</h2>
                    </div>
                    <a className='login__options-forgot' href="">Forgot password?</a>
                </div>
                <div className='button-container'>
                    <button type='button' className='login__button-log-in'>Iniciar sesión</button>
                </div>
            </form>
        </div>
    )
}
