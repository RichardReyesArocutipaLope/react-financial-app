import { Button } from '../../../ui/components';

export const OptionsExportCreditData = ({ onCloseModal }) => {
	const handleModal = () => {
		onCloseModal();
	};

	return (
		<>
			<Button width='11rem' className='danger' content='Cancelar' event={handleModal} />
		</>
	);
};
