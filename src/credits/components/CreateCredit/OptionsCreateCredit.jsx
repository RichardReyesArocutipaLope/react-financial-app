import { useDispatch } from 'react-redux';
import {
	Button,
	DocumentExportOptions,
	FragmentContainer,
} from '../../../ui/components';
import { CreditSchedule } from '../creditSchedule';
import {
	setCleanCreditCreateForm,
	setSubmitCreditCreateForm,
} from '../../../store/credits/creditsOptionsSlice';

export const OptionsCreateCredit = ({ setIsOpenModal, openAnotherModal }) => {
	const handleModal = () => {
		setIsOpenModal(false);
	};

	const handleCronogramaModal = () => {
		const modalProperties = {
			width: 'modal-l',
			heightBody: '100%',
			bodyHeightClass: 'modal__body--responsive',
			staticBackdrop: false,
			scroll: true,
			verticallyCentered: false,
			title: 'CRONOGRAMA',
			bodyBackgroundColor: 'var(--bg-four-color-white)',
			footerHeightClass: 'modal__footer--responsive',
		};
		openAnotherModal(
			<CreditSchedule />,
			<DocumentExportOptions />,
			modalProperties,
		);
	};

	const dispatch = useDispatch();
	const onSubmit = () => {
		dispatch(setSubmitCreditCreateForm(true));
	};

	const onClean = () => {
		dispatch(setCleanCreditCreateForm(true));
	};

	// TODO: INCORPORAR LOS MODALES DE VISUALIZAR FICHA Y CRONOGRAMA :( EL PROBLEMA SOLO ES EL MODAL PERO LUEGO NOMAS, PRIMERO
	// todo: ACABARE CON EL CRUD

	return (
		<FragmentContainer justifyContent='center' gap='.5rem'>
			<Button
				width='10rem'
				className='dark'
				content='Limpiar'
				event={onClean}
			/>
			<Button
				width='10rem'
				className='success'
				content='Guardar'
				event={onSubmit}
			/>
			<Button
				width='10rem'
				className='danger'
				content='Cancelar'
				event={handleModal}
			/>
			<Button width='10rem' className='info' content='Visualizar' />
			<Button width='10rem' className='gris' content='Cronograma' />
			{/* <Button width='10rem' className='gris' content='Cronograma' event={handleCronogramaModal} /> */}
		</FragmentContainer>
	);
};
