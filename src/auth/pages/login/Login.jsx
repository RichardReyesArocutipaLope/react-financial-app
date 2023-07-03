import './Login.css'
import fondo from '../../../assets/img/fondo1-scred.jpg'
import logo from '../../../assets/img/logo-empresa2.png'

export const Login = () => {
    return (
        <div className='login-container'>
            <img src={fondo} alt="" className='img-fondo' />

            <form action="" className='login__form'>
                <div className='login__logo-container'>
                    <img src={logo} alt="" className='login__logo' />
                </div>
                <h1 className='login__title'>LOAN MATE</h1>
                <div className="input-container">
                    <input className="input-field" type="text" />
                    <label htmlFor="input-field" className="input-label">Usuario</label>
                    <span className="input-highlight"></span>
                </div>

                <div className="input-container ctm">
                    <input className="input-field" type="password" />
                    <label htmlFor="input-field" className="input-label">Contraseña</label>
                    <span className="input-highlight"></span>
                </div>

                <div className='login__options'>
                    <div className="cntr">
                        <input type="checkbox" id="aea" className="efe" />
                        <label htmlFor="aea" className="aea"></label>
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
