import { useState } from 'react';
import { AlertContext } from './AlertContext';
import { Alert } from '../../ui/components';

export const AlertProvider = ({ children }) => {
	const [isActiveAlert, setIsActiveAlert] = useState(false);
	const [dataAlert, setDataAlert] = useState({
		type: 'danger',
		errorCode: '402',
		message: 'El registro se guardo correctamente',
	});

	return (
		<>
			<AlertContext.Provider value={{ setIsActiveAlert, setDataAlert }}>
				{children}
			</AlertContext.Provider>
			<Alert isActiveAlert={isActiveAlert} dataAlert={dataAlert} />
		</>
	);
};
