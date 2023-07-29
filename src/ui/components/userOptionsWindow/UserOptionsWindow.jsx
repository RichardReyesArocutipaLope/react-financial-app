import { useEffect, useState } from 'react';
import './UserOptionsWindow.css';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth';
import logoUser from '../../../assets/img/logo-user.jpg';

export const UserOptionsWindow = () => {
	const [isOpenUserOptions, setIsOpenUserOptions] = useState(false);
	const { fullName, role } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const handleUserOptions = () => {
		setIsOpenUserOptions(!isOpenUserOptions);
	};

	const handleClickOutside = event => {
		if (event.target.closest('.user__container') === null) setIsOpenUserOptions(false);
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className='user__container'>
			<div className='user__info' onClick={handleUserOptions}>
				<div className='user__img'>
					<img src={logoUser} alt='' />
				</div>
				<div className='user__name'>
					<p>{fullName || '...'}</p>
					<p>{role || '...'}</p>
				</div>
			</div>
			<div className={`user__options-window ${isOpenUserOptions ? 'open' : ''}`}>
				<ul className='user__option-container'>
					<li className='user__option' onClick={onLogout}>
						Salir
					</li>
					<li className='user__option'>Configuración</li>
				</ul>
			</div>
		</div>
	);
};
