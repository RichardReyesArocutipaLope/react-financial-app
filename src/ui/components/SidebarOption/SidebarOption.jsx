import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarOption.css'
import { SidebarSubOptions } from '../sidebarSubOptions/SidebarSubOptions';
import { SidebarSubOption } from '../sidebarSubOption/SidebarSubOption';

export const SidebarOption = ({ option, isLink }) => {


    const [isOpenSubOptions, setIsOpenSubOptions] = useState(false)

    const handleSuboptions = () => {
        setIsOpenSubOptions(!isOpenSubOptions);
    }
    const { label, icon, path, options } = option;

    const handleClickOutside = (event) => {
        if (event.target.closest('.main-sidebar__option--subptions') === null) setIsOpenSubOptions(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])


    return isLink
        ?
        (
            <NavLink
                className={({ isActive }) => (`main-sidebar__option ${isActive ? 'active' : ''}`)}
                to={path}
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
                <div className='main-sidebar__option main-sidebar__option--subptions '
                    onClick={handleSuboptions}
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
