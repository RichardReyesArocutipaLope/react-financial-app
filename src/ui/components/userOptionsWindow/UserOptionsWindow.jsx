import { useEffect, useState } from 'react';
import './UserOptionsWindow.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/auth';

export const UserOptionsWindow = () => {

  const [isOpenUserOptions, setIsOpenUserOptions] = useState(false)

  const dispatch = useDispatch();

  const handleUserOptions = () => {
    setIsOpenUserOptions(!isOpenUserOptions);
  }

  const handleClickOutside = (event) => {
    if (event.target.closest('.user__container') === null) setIsOpenUserOptions(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div className='user__container'>
      <div className='user__info' onClick={handleUserOptions}>
        <div className='user__img'>
          <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div className='user__name'>
          <p>Richard A.</p>
          <p>Director</p>
        </div>
      </div>
      <div className={`user__options-window ${isOpenUserOptions ? 'open' : ''}`}>
        <ul className='user__option-container'>
          <li className='user__option' onClick={onLogout}>Salir</li>
          <li className='user__option'>Configuración</li>
        </ul>
      </div>
    </div>
  )
}