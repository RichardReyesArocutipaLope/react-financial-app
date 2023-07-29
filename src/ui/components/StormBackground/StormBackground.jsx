import { useEffect } from 'react';
import './StormBackground.css';
import { init } from './stormBackgroundjs';

export const StormBackground = () => {
	useEffect(() => {
		init();
	}, []);

	return <div className='storm-background'></div>;
};
