import { memo } from 'react';
import './ModuleOption.css';
import { useSelector } from 'react-redux';

export const ModuleOption = memo(({ moduleOptionData, moduleOptionModal, setDataAlert, handleModal }) => {
	// console.log('ModuleOption.jsx');

	const { moduleOptionIcon, moduleOptionLabel, moduleOptionColor, idIsRequired } = moduleOptionData;
	const { selectedCredit } = useSelector(state => state.credits);

	const onClickModuleOption = () => {
		if (!idIsRequired || selectedCredit?.id) return handleModal(moduleOptionModal);
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
