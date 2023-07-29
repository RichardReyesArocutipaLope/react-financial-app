import { memo, useContext, useState } from 'react';
import { ModuleOptionsInfoLeft } from '../moduleOptionsInfoLeft/ModuleOptionsInfoLeft';
import { ModuleOptionsInfoRight } from '../moduleOptionsInfoRight/ModuleOptionsInfoRight';
import './ModuleOptions.css';
import { CreditContext } from '../../../credits/context';

export const ModuleOptions = memo(({ children }) => {
	console.log('ModuleOptions.jsx');

	const [moreInfoLeft, setMoreInfoLeft] = useState(false);
	const [moreInfoRight, setMoreInfoRight] = useState(false);
	const { dataInfoRight } = useContext(CreditContext);

	const handleMoreInfoLeft = () => {
		setMoreInfoLeft(!moreInfoLeft);
	};
	const handleMoreInfoRight = () => {
		setMoreInfoRight(!moreInfoRight);
	};

	return (
		<div className='module-options__container'>
			<ModuleOptionsInfoLeft
				moreInfoLeft={moreInfoLeft}
				handleMoreInfoLeft={handleMoreInfoLeft}
				titleInfoLeft='CREDITOS INFO'
			/>
			<div className='module-options__main'>
				<div className='module-options'>
					<div className='module-options-sub'>{children}</div>
				</div>
			</div>
			<ModuleOptionsInfoRight
				moreInfoRight={moreInfoRight}
				handleMoreInfoRight={handleMoreInfoRight}
				dataInfoRight={dataInfoRight}
				titleInfoRight='REGISTRO INFO'
			/>
		</div>
	);
});
