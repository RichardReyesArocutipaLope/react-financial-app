import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarOption.css'
import { SidebarSubOptions } from '../SidebarSubOptions/SidebarSubOptions';
import { SidebarSubOption } from '../SidebarSubOption/SidebarSubOption';

export const SidebarOption = ({ option, isLink, asideRef, optionTooltipRef }) => {


    const [isOpenSubOptions, setIsOpenSubOptions] = useState(false)

    const handleSuboptions = () => {
        setIsOpenSubOptions(!isOpenSubOptions);
    }

    const handleHoverOption = (event) => {
        if (!optionTooltipRef.current) return;
        const { top } = event.currentTarget.getBoundingClientRect()
        setTimeout(() => {
            optionTooltipRef.current.classList.remove('animation-backward')
            optionTooltipRef.current.classList.add('animation-forward')
            optionTooltipRef.current.textContent = label;
            optionTooltipRef.current.style.top = `${(top / 16) + 1.95}rem`;
            optionTooltipRef.current.style.transform = 'translateY(-50%)';
        }, 500);
    }

    const handleLeaveOption = (event) => {
        if (!optionTooltipRef.current) return;



        if (!optionTooltipRef.current.classList.contains('animation-forward')) return;
        optionTooltipRef.current.classList.remove('animation-forward')
        optionTooltipRef.current.classList.add('animation-backward')
    }


    const { label, icon, path, options } = option;


    return isLink
        ?
        (
            <NavLink
                className={({ isActive }) => (`main-sidebar__option ${isActive ? 'active' : ''}`)}
                to={path}
                onMouseEnter={handleHoverOption}
                onMouseLeave={handleLeaveOption}
            >
                <div className='main-sidebar__label-container'>
                    <span className='icon-option'>{icon}</span>
                    <p className='main-sidebar__label hide'>{label}</p>
                </div>
                <i className="angle-down fa-solid fa-angle-down hide d-none"></i>
            </NavLink>
        )
        :
        (
            <>
                <div className='main-sidebar__option'
                    onClick={handleSuboptions}
                    onMouseEnter={handleHoverOption}
                    onMouseLeave={handleLeaveOption}
                >
                    <div className='main-sidebar__label-container'>
                        <span className='icon-option'>{icon}</span>
                        <p className='main-sidebar__label hide'>{label}</p>
                    </div>
                    <i className="angle-down fa-solid fa-angle-down hide"></i>
                </div>
                <SidebarSubOptions isOpenSubOptions={isOpenSubOptions} numOptions={options.length}>
                    {
                        options.map((suboption) => (
                            <SidebarSubOption key={suboption.id} suboption={suboption} />
                        ))
                    }
                </SidebarSubOptions>
            </>
        )


}
