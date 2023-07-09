import { useForm } from 'react-hook-form'
import fondo from '../../../assets/img/textura-azul.jpg'
import logo from '../../../assets/img/logo-empresa2.png'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../../store/auth'
import './Login.css'

const LoginTitle = () => {
    return (
        <>
            <div className='login__logo-container'>
                <img src={logo} alt="" className='login__logo' />
            </div>
            <h1 className='login__title'>LOAN MATE</h1>
        </>
    )
}

const LoginOptions = () => {
    return (
        <>
            <div className='login__options'>
                <div className="cntr">
                    <input type="checkbox" id="aea" className="efe" />
                    <label htmlFor="aea" className="aea"></label>
                    <h2>Remember me</h2>
                </div>
                <a className='login__options-forgot' href="">Forgot password?</a>
            </div>
            <div className='button-container'>
                <button type='submit' className='login__button-log-in'>Iniciar sesión</button>
            </div>
        </>
    )
}

export const Login = () => {

    const dispatch = useDispatch();
    const { errorMessage } = useSelector(state => state.auth);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user: 'administrador',
            password: 'Password123',
        }
    });

    const onSubmit = (data) => {
        if (!errors) return;
        dispatch(startLogin(data))
    }

    return (
        <div className='login-container'>
            <img src={fondo} alt="" className='img-fondo' />

            <form className='login__form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <LoginTitle />

                <div className="input-container">
                    <input
                        className="input-field" type="text" required autoComplete="off"
                        {...register('user', { required: 'El usuario es requerido' })}
                    />
                    <label htmlFor="input-field" className="input-label">Usuario</label>
                    <p className='error'>{errors.user?.message}</p>
                </div>

                <div className="input-container">
                    <input
                        className="input-field" type="password" required autoComplete="off"
                        {...register('password', { required: 'La contraseña es requerida' })}
                    />
                    <label htmlFor="input-field" className="input-label">Contraseña</label>
                    <p className='error'>{errors.password?.message}</p>
                </div>

                {errorMessage && <div className='error-container'><p className='error-message'>{errorMessage}</p></div>}
                <LoginOptions />
            </form>
        </div>
    )
}
