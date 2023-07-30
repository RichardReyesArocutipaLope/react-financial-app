import { useEffect, useState } from 'react';
import { AlertContext } from './AlertContext';
import { Alert } from '../../ui/components';

export const AlertProvider = ({ children }) => {
	const [isActiveAlert, setIsActiveAlert] = useState(false);
	const [dataAlert, setDataAlert] = useState({
		type: 'success',
		errorCode: null,
		message: 'Bienvenido',
		time: 1000,
	});

	useEffect(() => {
		setIsActiveAlert(true);
		setTimeout(() => setIsActiveAlert(false), dataAlert.time);
	}, [dataAlert]);

	return (
		<>
			<AlertContext.Provider value={{ setIsActiveAlert, setDataAlert }}>{children}</AlertContext.Provider>
			<Alert isActiveAlert={isActiveAlert} dataAlert={dataAlert} />
		</>
	);
};
