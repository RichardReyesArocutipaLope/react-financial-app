import { memo, useContext } from 'react';
import './ModuleOption.css';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { ModalContext } from '../../../context/modalContext';
import { useSelector } from 'react-redux';

export const ModuleOption = memo(({ moduleOptionData, moduleOptionModal }) => {
	console.log('ModuleOption.jsx');

	const { moduleOptionIcon, moduleOptionLabel, moduleOptionColor, idIsRequired } = moduleOptionData;
	const { modalBodyComponent, modalFooterComponent, modalProperties } = moduleOptionModal;
	const { selectedCredit } = useSelector(state => state.credits);

	const { setDataAlert } = useContext(AlertContext);
	const { handleModal } = useContext(ModalContext);

	const onClickModuleOption = () => {
		if (!idIsRequired)
			return handleModal('setData', modalBodyComponent, modalFooterComponent, modalProperties);
		if (selectedCredit?.id)
			return handleModal('setData', modalBodyComponent, modalFooterComponent, modalProperties);

		setDataAlert({
			type: 'danger',
			errorCode: null,
			message: 'Seleccione un registro para continuar',
			time: 1000,
		});
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
