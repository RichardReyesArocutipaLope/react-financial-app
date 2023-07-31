import { useEffect, useState } from 'react';

const breackPoints = {
	xxs: 480,
	xs: 768,
	s: 1024,
	m: 1280,
	l: 1536,
	xl: 2000,
};

const { xxs, xs, s, m, l, xl } = breackPoints;
const config = [
	{ min: xl, max: 5000, cols: 10 },
	{ min: l + 1, max: xl, cols: 8 },
	{ min: m + 1, max: l, cols: 6 },
	{ min: s + 1, max: m, cols: 5 },
	{ min: xs + 1, max: s, cols: 4 },
	{ min: xxs + 1, max: xs, cols: 2 },
	{ min: 0, max: xxs, cols: 1 },
];

export const useResponsiveTable = () => {
	const [maxCols, setMaxCols] = useState(0);

	useEffect(() => {
		function responseTable() {
			const mediaScreen = ({ min, max }) => `(min-width: ${min}px) and (max-width: ${max}px)`;
			const { cols } = config.find(item => matchMedia(mediaScreen(item)).matches);
			if (maxCols === cols) return;
			setMaxCols(cols);
		}

		if (!maxCols) responseTable();
		addEventListener('resize', responseTable);

		return () => removeEventListener('resize', responseTable);
	}, [maxCols]);

	return { maxCols };
};
