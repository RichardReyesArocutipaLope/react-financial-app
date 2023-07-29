import { Button } from '../../../ui/components';

export const OptionsExportCreditData = ({ setIsOpenModal }) => {
	const handleModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			<Button
				width='11rem'
				className='danger'
				content='Cancelar'
				event={handleModal}
			/>
		</>
	);
};
