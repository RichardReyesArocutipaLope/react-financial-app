import { useForm } from 'react-hook-form'
import fondo from '../../../assets/img/fondo1-scred.jpg'
import logo from '../../../assets/img/logo-empresa2.png'
import './Login.css'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../../store/auth'

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user: 'administrador',
            password: '3322',
        }
    });

    const dispatch= useDispatch();

    const onSubmit = (data) => {
        if (!errors) return;
        dispatch(startLogin(data))
    }

    return (
        <div className='login-container'>
            <img src={fondo} alt="" className='img-fondo' />

            <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='login__logo-container'>
                    <img src={logo} alt="" className='login__logo' />
                </div>
                <h1 className='login__title'>LOAN MATE</h1>

                <div className="input-container">
                    <input
                        className="input-field"
                        type="text"
                        {...register('user', { required: 'El usuario es requerido' })}
                    />
                    <label htmlFor="input-field" className="input-label">Usuario</label>
                    <span className="input-highlight"></span>
                </div>

                <p>{errors.user?.message}</p>

                <div className="input-container ctm">
                    <input
                        className="input-field"
                        type="password"
                        {...register('password', { required: 'La contraseña es requerida' })}
                    />
                    <label htmlFor="input-field" className="input-label">Contraseña</label>
                    <span className="input-highlight"></span>
                </div>

                <p>{errors.password?.message}</p>

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
            </form>
        </div>
    )
}
