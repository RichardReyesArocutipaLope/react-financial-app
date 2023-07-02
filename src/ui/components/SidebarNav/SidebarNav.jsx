import { SidebarItem } from '../SidebarItem/SidebarItem';
import './SidebarNav.css';

export const SidebarNav = ({ sidebarOptions}) => {
    return (
        <nav className='main-sidebar__nav'>
            <ul className='main-sidebar__list'>
                {
                    sidebarOptions.map((option) => (
                        <SidebarItem key={option.id} option={option}/>
                    ))
                }
            </ul>
        </nav>
    )
}
