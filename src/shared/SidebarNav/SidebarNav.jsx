import { SidebarItem } from '../SidebarItem/SidebarItem';
import './SidebarNav.css';

export const SidebarNav = ({ sidebarOptions,asideRef, optionTooltipRef}) => {
    return (
        <nav className='main-sidebar__nav'>
            <ul className='main-sidebar__list'>
                {
                    sidebarOptions.map((option) => (
                        <SidebarItem key={option.id} option={option} asideRef={asideRef} optionTooltipRef={optionTooltipRef} />
                    ))
                }
            </ul>
        </nav>
    )
}
