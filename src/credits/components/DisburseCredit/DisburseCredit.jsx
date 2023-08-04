import { InputSelect, InputsRow, ModalWarningContainer } from '../../../ui/components';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { setActivateAlert } from '../../../store/credits/creditsSlice';
import { startDisburseCredit, startGetCredit } from '../../../store/credits/thunks';
export const DisburseCredit = ({ onCloseModal, modalReset, modalSubmit }) => {
	const dispatch = useDispatch();
	const { activateAlert, message, selectedCredit, creditRawSelected } = useSelector(state => state.credits);
	const { setDataAlert } = useContext(AlertContext);
	const { fullName, role } = useSelector(state => state.auth);

	useEffect(() => {
		if (modalSubmit) dispatch(startDisburseCredit(creditRawSelected?.id));
	}, [modalSubmit]);

	useEffect(() => {
		dispatch(startGetCredit(selectedCredit.id));
	}, []);

	useEffect(() => {
		if (!activateAlert.isActive) return;
		setDataAlert({
			type: activateAlert.type,
			errorCode: message.statusCode,
			message: message.message,
			time: 3000,
		});
		dispatch(setActivateAlert({ isActive: false, type: '' }));
		if (activateAlert.type === 'success') onCloseModal();
	}, [activateAlert.isActive]);

	return (
		<ModalWarningContainer>
			<p>
				<b>
					{fullName} {`(${role})`}
				</b>
				, el crédito que selecciono es del cliente{' '}
				<b>{creditRawSelected?.fk_customer.first_name + ' ' + creditRawSelected?.fk_customer.last_name}</b>,
				el cual posee un monto aprobado por <b>S/ {creditRawSelected?.requested_money}</b> por un periodo de{' '}
				<b>
					{creditRawSelected?.period} {creditRawSelected?.fk_period_type.name}
				</b>
				.
			</p>
			<InputsRow margin='1.3' justifyContent='center'>
				<InputSelect col={16} label='Selecciona una CAJA'>
					<option value='c1'>Caja 1</option>
					<option value='c2'>Caja 2</option>
					<option value='c3'>Caja 3</option>
				</InputSelect>
			</InputsRow>
			<p>
				<b>¿Desea usted desembolsar este crédito?</b>
			</p>
		</ModalWarningContainer>
	);
};
