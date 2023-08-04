import { Button, FragmentContainer } from '../../../ui/components';

export const OptionsSimulateCredit = ({ onCloseModal }) => {
	const handleModal = () => {
		onCloseModal();
	};

	return (
		<FragmentContainer justifyContent='center' gap='.9rem'>
			<Button width='11rem' className='dark' content='Limpiar' />
			<Button width='11rem' className='info' content='Simular' />
			<Button width='11rem' className='danger' content='Cancelar' event={handleModal} />
		</FragmentContainer>
	);
};
