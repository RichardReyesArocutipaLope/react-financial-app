import { useState } from 'react'
import { ModuleOptionsInfoLeft } from '../moduleOptionsInfoLeft/ModuleOptionsInfoLeft';
import { ModuleOptionsInfoRight } from '../moduleOptionsInfoRight/ModuleOptionsInfoRight';
import './ModuleOptions.css'

export const ModuleOptions = ({ dataInfoRight, children, creditSelect, titleInfoLeft, titleInfoRight }) => {

    const [moreInfoLeft, setMoreInfoLeft] = useState(false);
    const [moreInfoRight, setMoreInfoRight] = useState(false);


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
                creditSelect={creditSelect}
                titleInfoLeft={titleInfoLeft}
            />
            <div className='module-options__main' >
                <div className='module-options'>
                    <div >
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
