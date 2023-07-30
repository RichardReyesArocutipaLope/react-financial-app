import './Alert.css';

export const Alert = ({ dataAlert, isActiveAlert }) => {
	const { type = 'success', errorCode, message = 'message' } = dataAlert;

	const iconDanger = <i className='fa-solid fa-xmark icon-alert'></i>;
	const iconSuccess = <i className='fa-regular fa-circle-check icon-alert'></i>;
	const iconWarning = <i className='fa-solid fa-circle-exclamation icon-alert'></i>;
	const iconInfo = <i className='fa-solid fa-circle-info icon-alert'></i>;

	let icon;
	switch (type) {
		case 'success':
			icon = iconSuccess;
			break;
		case 'danger':
			icon = iconDanger;
			break;
		case 'info':
			icon = iconInfo;
			break;
		case 'warning':
			icon = iconWarning;
			break;
	}

	return (
		<div className={`main-alert ${type} ${isActiveAlert ? 'active' : ''}`}>
			{icon}
			<div>
				{errorCode && type === 'danger' && <h2 className='main-alert__code'>Código: {errorCode}</h2>}
				<p className='main-alert__message'>{message}</p>
			</div>
		</div>
	);
};
