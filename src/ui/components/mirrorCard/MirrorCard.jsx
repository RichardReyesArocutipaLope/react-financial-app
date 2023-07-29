import './MirrorCard.css';

export const MirrorCard = ({ children, width = '30rem', height = '40rem' }) => {
	return (
		<div className='mirror-card' style={{ width, height }}>
			<div className='mirror-card__content'>{children}</div>
		</div>
	);
};
