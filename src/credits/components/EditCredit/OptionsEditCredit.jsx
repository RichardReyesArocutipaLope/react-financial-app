import { useDispatch } from 'react-redux';
import { Button, FragmentContainer } from '../../../ui/components';
import { setSubmitCreditCreateForm } from '../../../store/credits/creditsOptionsSlice';

export const OptionsEditCredit = ({ setIsOpenModal }) => {
	const handleModal = () => {
		setIsOpenModal(false);
	};

	const dispatch = useDispatch();
	const onSubmit = () => {
		dispatch(setSubmitCreditCreateForm(true));
	};

	const onClean = () => {
		dispatch(setCleanCreditCreateForm(true));
	};
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
		</FragmentContainer>
	);
};
