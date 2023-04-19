import './SidebarSubOption.css'
import { NavLink } from 'react-router-dom';

export const SidebarSubOption = ({ suboption }) => {
  return (
    <NavLink
      className={({ isActive }) => (`sub-option__label ${isActive ? 'active' : ''}`)}
      to={suboption.path}
    >
      <p>{suboption.label}</p>
      <i className="fa-solid fa-right-long icon-suboption"></i>
    </NavLink>
  )
}
