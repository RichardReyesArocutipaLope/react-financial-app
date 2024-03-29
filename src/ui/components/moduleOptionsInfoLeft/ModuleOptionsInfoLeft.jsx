import { useSelector } from 'react-redux';
import './ModuleOptionsInfoLeft.css';

export const ModuleOptionsInfoLeft = ({ titleInfoLeft = '', moreInfoLeft, handleMoreInfoLeft }) => {
	// console.log('ModuleOptionsInfoLeft.jsx');

	const { selectedCredit } = useSelector(state => state.credits);

	return (
		<div
			className={`module-options__info-wrapper left ${moreInfoLeft ? 'extend' : ''}`}
			onDoubleClick={handleMoreInfoLeft}
		>
			<p>{titleInfoLeft}</p>
			<div className='module-options__info'>
				{!selectedCredit ? (
					<h2 className='message-empty'>Seleccione un registro</h2>
				) : (
					selectedCredit.data?.map((item, index) => (
						<div className='module-options__info-row' key={index}>
							<span>{selectedCredit.tablethead[index]}</span>
							<span>{item}</span>
						</div>
					))
				)}
			</div>
		</div>
	);
};
