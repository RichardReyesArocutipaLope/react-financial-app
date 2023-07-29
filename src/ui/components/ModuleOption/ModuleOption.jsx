import { memo, useContext } from 'react';
import './ModuleOption.css';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { ModalContext } from '../../../context/modalContext';

export const ModuleOption = memo(({ moduleOptionData, moduleOptionModal, selectedCredit }) => {
	console.log('ModuleOption.jsx');

	const { moduleOptionIcon, moduleOptionLabel, moduleOptionColor, idIsRequired } = moduleOptionData;
	const { modalBodyComponent, modalFooterComponent, modalProperties } = moduleOptionModal;

	const { setIsActiveAlert, setDataAlert } = useContext(AlertContext);
	const { handleModal } = useContext(ModalContext);

	const onClickModuleOption = () => {
		if (!idIsRequired)
			return handleModal('setData', modalBodyComponent, modalFooterComponent, modalProperties);
		if (selectedCredit?.id)
			return handleModal('setData', modalBodyComponent, modalFooterComponent, modalProperties);

		setIsActiveAlert(true);
		setDataAlert({
			type: 'danger',
			errorCode: null,
			message: 'Seleccione un registro para continuar',
		});
		setTimeout(() => {
			setIsActiveAlert(false);
		}, 1000);
	};
	return (
		<div className={`module-option__container ${moduleOptionColor}`}>
			<button className='module-option__wrapper' onClick={onClickModuleOption}>
				<div className='module-option'>
					{moduleOptionIcon}
					<p>{moduleOptionLabel}</p>
				</div>
			</button>
		</div>
	);
});
