import { Button, FragmentContainer } from '../../../ui/components';

export const OptionsEditCredit = ({ onCloseModal, openAnotherModal, setModalReset, setModalSubmit }) => {
	const handleModal = () => onCloseModal();
	const onSubmit = () => setModalSubmit(state => state + 1);
	const onClean = () => setModalReset(state => state + 1);

	return (
		<FragmentContainer justifyContent='center' gap='.5rem'>
			<Button width='10rem' className='dark' content='Limpiar' event={onClean} />
			<Button width='10rem' className='success' content='Guardar' event={onSubmit} />
			<Button width='10rem' className='danger' content='Cancelar' event={handleModal} />
			<Button width='10rem' className='info' content='Visualizar' />
			<Button width='10rem' className='gris' content='Cronograma' />
		</FragmentContainer>
	);
};
