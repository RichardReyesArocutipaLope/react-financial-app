import { useDispatch, useSelector } from 'react-redux';
import { ModalWarningContainer } from '../../../ui/components';
import { useContext, useEffect } from 'react';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { setActivateAlert } from '../../../store/credits/creditsSlice';
import { startApproveCredit, startGetCredit } from '../../../store/credits/thunks';

export const ApproveCredit = ({ onCloseModal, modalReset, modalSubmit }) => {
	const dispatch = useDispatch();
	const { activateAlert, message, selectedCredit, creditRawSelected } = useSelector(state => state.credits);
	const { setDataAlert } = useContext(AlertContext);
	const { fullName, role } = useSelector(state => state.auth);

	useEffect(() => {
		if (modalSubmit) dispatch(startApproveCredit(creditRawSelected?.id));
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
					{' '}
					{fullName} {`(${role})`}{' '}
				</b>{' '}
				, el crédito que selecciono es del cliente{' '}
				<b>{creditRawSelected?.fk_customer.first_name + ' ' + creditRawSelected?.fk_customer.last_name}</b>,
				el cual posee un monto solicitado por <b>S/ {creditRawSelected?.requested_money}</b> por un periodo de{' '}
				<b>
					{creditRawSelected?.period} {creditRawSelected?.fk_period_type.name}
				</b>
				.
			</p>

			<p>
				<b>¿Desea usted aprobar este crédito?</b>
			</p>
		</ModalWarningContainer>
	);
};
