import { useDispatch } from 'react-redux';
import { Button } from '../button';
import { FragmentContainer } from '../fragmentContainer/FragmentContainer';

export const DocumentExportOptions = ({ setIsOpenModal }) => {
	const handleModal = () => {
		setIsOpenModal(false);
	};

	const dispatch = useDispatch();
	const onSubmit = () => {
		dispatch(setSubmitCreditCreateForm(true));
	};
	return (
		<FragmentContainer justifyContent='center' gap='.9rem'>
			<Button
				width='8.1rem'
				className='print-pdf'
				content={<i className='fa-solid fa-file-pdf icon'></i>}
				event={onSubmit}
			/>
			{/* <Button width='8.1rem' className='dark' content={<i className="fa-solid fa-print icon"></i>} />
            <Button width='8.1rem' className='secondary' content={<i className="fa-solid fa-image icon"></i>} /> */}
			<Button
				width='8.1rem'
				className='danger'
				content='Cancelar'
				event={handleModal}
			/>
		</FragmentContainer>
	);
};
