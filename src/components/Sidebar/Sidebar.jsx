import { useRef, useState } from 'react';
import { SidebarNav } from '../../shared/SidebarNav/SidebarNav';
import './Sidebar.css';
import { sidebarOptions } from '../../data/sidebarOptions';

export const Sidebar = () => {

  const [minSidebar, setMinSidebar] = useState(false)

  const asideRef = useRef(null);

  const optionTooltipRef = useRef(null);

  const handleMinimizeSidebar = () => {
    setMinSidebar(!minSidebar);
  }

  return (
    <aside
      className={`main-sidebar ${minSidebar ? 'min-sidebar' : ''}`}
      ref={asideRef}
    >

      <div className='sidebar-header'>
        <i className={`arrow-sidebar fa-solid fa-angle-left ${minSidebar ? 'roll-back' : 'roll-forward'}`}
          onClick={handleMinimizeSidebar}></i>
        <div className='main-sidebar__logo'>
          <div className='main-logo'>
            <i className="icon fa-solid fa-microchip"></i>
          </div>
          <h2 className='hide'>RICHARD</h2>
        </div>
      </div>

      <div className='sidebar-body__shadow'></div>
      <div className='sidebar-body'>
        <SidebarNav sidebarOptions={sidebarOptions} asideRef={asideRef} optionTooltipRef={optionTooltipRef} />
      </div>
      <div className='sidebar-body__shadow'></div>

      <div className='sidebar-footer sidebar-footer--center'>
        <input id="checkbox" name="checkbox" type="checkbox" />
        <label className="theme-container" htmlFor="checkbox">
          <div className='theme'>
          </div>
        </label>

        <div className='sidebar-footer__option-container hide'>
          <div className='sidebar-footer__option'>
            <i class="fa-solid fa-brush"></i>
          </div>
          <div className='sidebar-footer__option'>
            <i class="fa-solid fa-font"></i>
          </div>
        </div>

      </div>



      {
        minSidebar &&
        <div ref={optionTooltipRef} className='sidebar-option__label-tooltip'></div>
      }
      <div>

      </div>
    </aside>
  )
}

{/* <div className='theme__option'>
              <span className='theme__icon-container'>
                <i class="fa-solid fa-moon"></i>
              </span>
            </div>
            <div className='theme__option'>
              <span className='theme__icon-container'>
                <i class="fa-solid fa-sun"></i>
              </span>
            </div> */}
