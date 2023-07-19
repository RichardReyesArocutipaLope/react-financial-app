import { useContext, useState } from 'react'
import { ModuleOptionsInfoLeft } from '../moduleOptionsInfoLeft/ModuleOptionsInfoLeft';
import { ModuleOptionsInfoRight } from '../moduleOptionsInfoRight/ModuleOptionsInfoRight';
import './ModuleOptions.css'
import { CreditContext } from '../../../credits/context';
import { useSelector } from 'react-redux';

export const ModuleOptions = ({ children, titleInfoLeft, titleInfoRight }) => {

    const [moreInfoLeft, setMoreInfoLeft] = useState(false);
    const [moreInfoRight, setMoreInfoRight] = useState(false);
    const { dataInfoRight } = useContext(CreditContext);
    const { selectedCredit } = useSelector(state => state.credits);

    const handleMoreInfoLeft = () => {
        setMoreInfoLeft(!moreInfoLeft);
    }
    const handleMoreInfoRight = () => {
        setMoreInfoRight(!moreInfoRight);
    }

    return (
        <div className='module-options__container'>
            <ModuleOptionsInfoLeft
                moreInfoLeft={moreInfoLeft}
                handleMoreInfoLeft={handleMoreInfoLeft}
                selectedCredit={selectedCredit}
                titleInfoLeft={titleInfoLeft}
            />
            <div className='module-options__main' >
                <div className='module-options'>
                    <div className='module-options-sub'>
                        {children}
                    </div>
                </div>
            </div>
            <ModuleOptionsInfoRight
                moreInfoRight={moreInfoRight}
                handleMoreInfoRight={handleMoreInfoRight}
                dataInfoRight={dataInfoRight}
                titleInfoRight={titleInfoRight}
            />
        </div>

    )
}
