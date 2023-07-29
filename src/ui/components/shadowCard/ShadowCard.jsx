import './ShadowCard.css';

export const ShadowCard = ({ children, width = '30rem', height = '50rem' }) => {
	return (
		<div className='shadow-card__container' style={{ width, height }}>
			<div className='shadow-card'>{children}</div>
		</div>
	);
};
