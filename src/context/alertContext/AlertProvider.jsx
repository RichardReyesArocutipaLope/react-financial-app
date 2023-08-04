import { useEffect, useState } from 'react';
import { AlertContext } from './AlertContext';
import { Alert } from '../../ui/components';

export const AlertProvider = ({ children }) => {
	const [isActiveAlert, setIsActiveAlert] = useState(false);
	const [dataAlert, setDataAlert] = useState({
		type: 'success',
		errorCode: null,
		message: 'firstRender',
		time: 1000,
	});

	useEffect(() => {
		if (dataAlert.message === 'firstRender') return;
		setIsActiveAlert(true);
		setTimeout(() => setIsActiveAlert(false), dataAlert.time);
	}, [dataAlert]);

	return (
		<>
			<AlertContext.Provider value={{ setDataAlert }}>{children}</AlertContext.Provider>
			<Alert isActiveAlert={isActiveAlert} dataAlert={dataAlert} />
		</>
	);
};
