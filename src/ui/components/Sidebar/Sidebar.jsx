import { useEffect, useState } from 'react';
import './Sidebar.css';
import { SidebarNav } from '../sidebarNav';
import { sidebarOptions } from '../../../assets/data/sidebarOptions';

export const Sidebar = () => {

  const [minSidebar, setMinSidebar] = useState(false)
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(false)

  const handleMinimizeSidebar = () => { setMinSidebar(!minSidebar); }

  const cssLightTheme = {
    '--bg-sidebar': ' rgb(215, 215, 215)',
    '--bg-shadow-sidebar': ' rgb(195, 195, 195)',
    '--shadow-shadow-sidebar': ' 0px 0px 10px 1px var(--shadow-40)',
    '--bg-icon-open-sidebar': ' rgb(20, 20, 20)',
    '--color-icon-open-sidebar': ' rgb(225, 225, 225)',
    '--bg-sidebar-footer-button': ' rgb(40, 40, 40)',
    '--color-sidebar-footer-button': ' rgb(230, 230, 230)',
    '--shadow-sidebar-footer-button': ' 4px 4px 10px 0px var(--shadow-60), -2px -2px 4px 0px rgb(240, 240, 240), inset -2px -2px 2px 0px rgb(20, 20, 20), inset 2px 2px 2px 0px rgb(75, 75, 75)',
    '--bg-change-theme': ' rgb(215, 215, 215)',
    '--bg-button-change-theme': ' linear-gradient(315deg, #000000 0%, #414141 70%)',
    '--shadow-change-theme1': ' -4px -4px 8px 0px rgb(245, 245, 245), 4px 4px 10px 0px var(--shadow-45), inset -2px -2px 2px 0px var(--shadow-25), inset 2px 2px 2px 0px rgb(245, 245, 245)',
    '--shadow-change-theme2': ' 2px 3px 2px 0px rgb(245, 245, 245), -2px -2px 3px 0px var(--shadow-25), inset 5px 5px 10px 2px var(--shadow-20)',
    '--bg-sidebar-option': ' rgb(215, 215, 215)',
    '--color-sidebar-option': ' rgb(70, 70, 70)',
    '--bg-sidebar-option-hover': ' rgb(225, 225, 225)',
    '--shadow-sidebar-option-hover': ' -4px -4px 8px 0px rgb(230, 230, 230), 4px 4px 10px 0px var(--shadow-40), inset -2px -2px 2px 0px var(--shadow-15), inset 2px 2px 3px 0px rgb(235, 235, 235)',
    '--bg-sidebar-option-active': ' rgb(40, 40, 40)',
    '--color-sidebar-option-active': ' rgb(220, 220, 220)',
    '--shadow-sidebar-option-active': ' 4px 4px 13px 0px var(--shadow-50), -3px -3px 4px 0px rgb(230, 230, 230), inset -3px -3px 5px 0px rgb(20, 20, 20), inset 3px 3px 5px 0px rgb(65, 65, 65)',
    '--bg-line-suboption': ' rgb(140, 140, 140)',
    '--bg-min-suboption': 'rgb(225, 225, 225)',
    '--shadow-min-suboption': ' 0rem 0rem 1rem 0rem var(--shadow-40)',
    '--bg-min-line-subption': ' rgb(140, 140, 140)',
    '--color-toltip-sidebar-option': 'rgb(50, 50, 50)',
    '--color-suboption': ' rgb(100, 100, 100)',
    '--color-icon-suboption': ' rgb(140, 140, 140)',
    '--color-min-icon-suboption': ' rgb(140, 140, 140)',
    '--shadow-sidebar-suboption-hover': ' -4px -4px 4px 0px rgb(225, 225, 225), 4px 4px 5px 0px var(--shadow-20), inset -2px -2px 2px 0px var(--shadow-15), inset 2px 2px 3px 0px rgb(235, 235, 235)',
    '--bg-sidebar-suboption-active': ' rgb(40, 40, 40)',
    '--color-sidebar-suboption-active': ' rgb(220, 220, 220)',
    '--shadow-sidebar-suboption-active': ' 4px 4px 5px 0px var(--shadow-40), -3px -3px 4px 0px rgb(230, 230, 230), inset -3px -3px 5px 0px rgb(20, 20, 20), inset 3px 3px 5px 0px rgb(65, 65, 65)',
    '--bg-header': ' rgb(215, 215, 215)',
    '--border-header-option': ' 2px solid rgb(225, 225, 225)',
    '--color-header-option': ' rgb(70, 70, 70)',
    '--bg-module': ' rgb(205, 205, 205)',
    '--bg-module-options-info': ' rgb(215, 215, 215)',
    '--color-module-options-info': ' rgb(70, 70, 70)',
    '--bg-module-options-info-row': ' rgb(185, 185, 185)',
    '--bg-module-options-info-row-title': ' rgb(40, 40, 40)',
    '--color-module-options-info-row-title': ' rgb(230, 230, 230)',
    '--bg-module-options-info-row-content': ' rgb(215, 215, 215)',
    '--color-module-options-info-row-content': ' rgb(30, 30, 30)',
    '--bg-module-option-wrapper': ' rgb(215, 215, 215)',
    '--shadow-module-option-wrapper': ' .3rem .3rem .3rem 0rem var(--shadow-40), inset -.15rem -.15rem .1rem 0rem rgb(180, 180, 180), inset .15rem .15rem .1rem 0rem rgb(240, 240, 240)',
    '--bg-module-option': ' rgb(215, 215, 215)',
    '--color-module-option': ' rgb(70, 70, 70)',
    '--color-module-option-active': ' rgb(40, 40, 40)',
    '--shadow-module-option': ' inset .2rem .2rem .6rem 0rem var(--shadow-50), .15rem .15rem .1rem 0rem rgb(240, 240, 240), -.15rem -.15rem .1rem 0rem rgb(180, 180, 180)',
    '--shadow-module-option-active': ' inset .6rem .6rem 1.5rem 0rem var(--shadow-50), .15rem .15rem .1rem 0rem rgb(240, 240, 240), -.15rem -.15rem .1rem 0rem rgb(180, 180, 180)',
    '--color-inputs': ' rgb(40, 40, 40)',
    '--bg-inputs': ' rgb(215, 215, 215)',
    '--shadow-inputs': ' .5rem .6rem .3rem 0rem var(--shadow-02)',
    '--bg-inputs-focus': ' rgb(228, 228, 228)',
    '--color-inputs-focus-label': ' rgb(10, 10, 10)',
    '--input-money-symbol': ' rgb(190, 190, 190)',
    '--bg-table-container': ' rgb(215, 215, 215)',
    '--shadow-table-container': ' .8rem .8rem .8rem 0rem var(--shadow-05)',
    '--color-table': ' rgb(40, 40, 40)',
    '--bg-table-th': ' rgb(205, 205, 205)',
    '--border-table-tr': ' 2px solid rgb(185, 185, 185)',
    '--bg-table-tr-hover': ' rgb(40, 40, 40)',
    '--color-table-tr-hover': ' rgb(240, 240, 240)',
    '--bg-paginacion-info': ' rgb(215, 215, 215)',
    '--color-paginacion-info': ' rgb(40, 40, 40)',
    '--shadow-paginacion-info': ' .8rem .8rem .8rem 0rem var(--shadow-05)',
    '--bg-pagination-button': ' rgb(215, 215, 215)',
    '--color-pagination-button': ' rgb(40, 40, 40)',
    '--shadow-pagination-button': ' .3rem .3rem .8rem 0rem var(--shadow-08)',
    '--bg-pagination-button-active': ' rgb(40, 40, 40)',
    '--color-pagination-button-active': ' rgb(220, 220, 220)',
    '--shadow-pagination-button-active': ' .3rem .3rem .8rem 0rem var(--shadow-15)',
    '--color-module-title': ' rgb(20, 20, 20)',
    '--color-button-predeterminado': ' rgb(30, 30, 30)',
    '--color-button-white': ' rgb(220, 220, 220)',
    '--bg-modal': 'rgb(230, 230, 230)',
    '--color-modal': 'rgb(20, 20, 20)',
    '--bg-shadow-modal': 'rgb(220, 220, 220)',
    '--shadow-shadow-modal': 'none',
    '--bg-modal-header': ' rgb(200, 200, 200)',
    '--bg-modal-header-close': ' rgb(180, 180, 180)',
    '--bg-modal-footer': ' rgb(200, 200, 200)',
    '--bg-form-tab': ' rgb(200, 200, 200)',
    '--bg-form-tab-header': ' rgb(20, 20, 20)',
    '--shadow-form-tab-header': ' 0rem .8rem .8rem 0rem var(--shadow-20)',
    '--color-form-tab-header': ' rgb(220, 220, 220)',
    '--border-hr': ' 2px solid rgb(150, 150, 150)',
    '--bg-document': ' rgb(220, 220, 220)',
    '--color-document': 'rgb(20, 20, 20)',
    '--shadow-document': ' -.5rem -.5rem .8rem 0 rgb(235, 235, 235), 1.5rem 1.5rem 1rem 0rem var(--shadow-20), inset .3rem .3rem .2rem 0 rgb(230, 230, 230), inset -.3rem -.3rem .2rem 0 rgb(180, 180, 180)',
    '--border-document-table': ' 3px solid rgb(180, 180, 180)',
    '--bg-input-document': ' rgb(210, 210, 210)',
    '--color-input-document': ' rgb(60, 60, 60)',
    '--bg-export': ' rgb(200, 200, 200)',
    '--color-export': ' rgb(40, 40, 40)',
    '--shadow-export': ' .6rem .6rem .6rem 0rem var(--shadow-10)',
    '--bg-export-hover': ' rgb(30, 30, 30)',
    '--color-export-hover': ' rgb(220, 220, 220)',
    '--shadow-export-hover': ' .6rem .6rem .6rem 0rem var(--shadow-20)',
  }
  const cssDarkTheme = {
    '--text-one-color-black': 'rgb(255, 255, 255)',
    '--bg-sidebar': 'rgb(0, 0, 0)',
    '--bg-shadow-sidebar': 'rgb(50, 50, 50)',
    '--shadow-shadow-sidebar': 'none',
    '--bg-icon-open-sidebar': 'rgb(30, 30, 30)',
    '--color-icon-open-sidebar': 'rgb(170, 170, 170)',
    '--bg-sidebar-footer-button': 'rgb(30, 30, 30)',
    '--color-sidebar-footer-button': 'rgb(170, 170, 170)',
    '--shadow-sidebar-footer-button': '-2px -2px 4px 0px rgb(10, 10, 10),inset -3px -3px 3px 0px rgb(10, 10, 10),inset 3px 3px 3px 0px rgb(40, 40, 40)',
    '--bg-change-theme': 'rgb(30, 30, 30)',
    '--bg-button-change-theme': 'linear-gradient(315deg, #000000 0%, #414141 70%)',
    '--shadow-change-theme1': '-4px -4px 10px 0px rgb(10, 10, 10), inset -2px -2px 2px 0px rgb(10, 10, 10),inset 2px 2px 2px 0px rgb(40, 40, 40)',
    '--shadow-change-theme2': '2px 3px 2px 0px rgb(40, 40, 40), -2px -2px 3px 0px var(--shadow-85),inset 5px 5px 10px 2px var(--shadow-90)',
    '--bg-sidebar-option': 'rgb(0, 0, 0)',
    '--color-sidebar-option': 'rgb(170, 170, 170)',
    '--bg-sidebar-option-hover': 'rgb(10, 10, 10)',
    '--shadow-sidebar-option-hover': '-4px -4px 8px 0px rgb(10, 10, 10), inset -3px -3px 3px 0px rgb(3, 3, 3),inset 3px 3px 3px 0px rgb(20, 20, 20)',
    '--bg-sidebar-option-active': 'rgb(30, 30, 30)',
    '--color-sidebar-option-active': 'rgb(170, 170, 170)',
    '--shadow-sidebar-option-active': '-3px -3px 4px 0px rgb(10, 10, 10), inset -3px -3px 5px 0px rgb(10, 10, 10), inset 3px 3px 5px 0px rgb(40, 40, 40)',
    '--bg-line-suboption': 'rgb(30, 30, 30)',
    '--bg-min-suboption': 'rgb(10, 10, 10)',
    '--shadow-min-suboption': '0rem 0rem 1rem 0rem var(--shadow-100)',
    '--bg-min-line-subption': 'rgb(0, 0, 0)',
    '--color-toltip-sidebar-option': 'rgb(170, 170, 170)',
    '--color-suboption': 'rgb(170, 170, 170)',
    '--color-icon-suboption': 'rgb(30, 30, 30)',
    '--color-min-icon-suboption': 'rgb(0, 0, 0)',
    '--shadow-sidebar-suboption-hover': ' -4px -4px 4px 0px rgb(10, 10, 10),inset 2px 2px 3px 0px rgb(3, 3, 3)',
    '--bg-sidebar-suboption-active': 'rgb(30, 30, 30)',
    '--color-sidebar-suboption-active': 'rgb(170, 170, 170)',
    '--shadow-sidebar-suboption-active': '-3px -3px 4px 0px rgb(10, 10, 10), inset -3px -3px 5px 0px rgb(10, 10, 10), inset 3px 3px 5px 0px rgb(40, 40, 40)',
    '--bg-header': 'rgb(0, 0, 0)',
    '--border-header-option': '2px solid rgb(20, 20, 20)',
    '--color-header-option': 'rgb(170, 170, 170)',
    '--bg-module': 'rgb(12, 12, 12)',
    '--bg-module-options-info': 'rgb(0, 0, 0)',
    '--color-module-options-info': 'rgb(170, 170, 170)',
    '--bg-module-options-info-row': 'rgb(15, 15, 15)',
    '--bg-module-options-info-row-title': 'rgb(0, 0, 0)',
    '--color-module-options-info-row-title': 'rgb(170, 170, 170)',
    '--bg-module-options-info-row-content': 'rgb(40, 40, 40)',
    '--color-module-options-info-row-content': 'rgb(170, 170, 170)',
    '--bg-module-option-wrapper': 'rgb(0, 0, 0)',
    '--shadow-module-option-wrapper': '.3rem .3rem .3rem 0rem var(--shadow-80), inset -.15rem -.15rem .1rem 0rem rgb(0, 0, 0), inset .15rem .15rem .1rem 0rem rgb(10, 10, 10)',
    '--bg-module-option': 'rgb(0, 0, 0)',
    '--color-module-option': 'rgb(170, 170, 170)',
    '--color-module-option-active': 'rgb(200, 200, 200)',
    '--shadow-module-option': 'inset .2rem .2rem .6rem 0rem var(--shadow-80), .15rem .15rem .1rem 0rem rgb(12, 12, 12), -.15rem -.15rem .1rem 0rem rgb(0, 0, 0)',
    '--shadow-module-option-active': 'inset .6rem .6rem 1.5rem 0rem var(--shadow-100), .15rem .15rem .1rem 0rem rgb(12, 12, 12), -.15rem -.15rem .1rem 0rem rgb(0, 0, 0)',
    '--color-inputs': 'rgb(170, 170, 170)',
    '--bg-inputs': 'rgb(0, 0, 0)',
    '--shadow-inputs': '.5rem .5rem .5rem 0rem var(--shadow-40)',
    '--bg-inputs-focus': 'rgb(0, 0, 0)',
    '--color-inputs-focus-label': ' rgb(200, 200, 200)',
    '--input-money-symbol': ' rgb(25, 25, 25)',
    '--bg-table-container': 'rgb(0, 0, 0)',
    '--shadow-table-container': ' .8rem .8rem .8rem 0rem var(--shadow-40)',
    '--color-table': 'rgb(170, 170, 170)',
    '--bg-table-th': ' rgb(10, 10, 10)',
    '--border-table-tr': ' 2px solid rgb(30, 30, 30)',
    '--bg-table-tr-hover': ' rgb(30, 30, 30)',
    '--color-table-tr-hover': ' rgb(240, 240, 240)',
    '--bg-paginacion-info': 'rgb(0, 0, 0)',
    '--color-paginacion-info': 'rgb(170, 170, 170)',
    '--shadow-paginacion-info': '.8rem .8rem .8rem 0rem var(--shadow-50)',
    '--bg-pagination-button': 'rgb(0, 0, 0)',
    '--color-pagination-button': 'rgb(170, 170, 170)',
    '--shadow-pagination-button': '.3rem .3rem .8rem 0rem var(--shadow-50)',
    '--bg-pagination-button-active': 'rgb(30, 30, 30)',
    '--color-pagination-button-active': ' rgb(230, 230, 230)',
    '--shadow-pagination-button-active': '.3rem .3rem .8rem 0rem var(--shadow-50)',
    '--color-module-title': 'rgb(170, 170, 170)',
    '--color-button-predeterminado': 'rgb(20, 20, 20)',
    '--color-button-white': 'rgb(200, 200, 200)',
    '--bg-modal': ' rgb(20, 20, 20)',
    '--color-modal': 'rgb(170, 170, 170)',
    '--bg-shadow-modal': ' rgb(10, 10, 10)',
    '--shadow-shadow-modal': ' -20px 0px 15px 2px var(--shadow-05), 20px 0px 15px 2px var(--shadow-05)',
    '--bg-modal-header': ' rgb(10, 10, 10)',
    '--bg-modal-header-close': ' rgb(35, 35, 35)',
    '--bg-modal-footer': ' rgb(10, 10, 10)',
    '--bg-form-tab': ' rgb(10, 10, 10)',
    '--bg-form-tab-header': ' rgb(170, 170, 170)',
    '--shadow-form-tab-header': ' 0rem .8rem .8rem 0rem var(--shadow-100)',
    '--color-form-tab-header': ' rgb(10, 10, 10)',
    '--border-hr': ' 2px solid rgb(30, 30, 30)',
    '--bg-document': ' rgb(210, 210, 210)',
    '--color-document': ' rgb(5, 5, 5)',
    '--shadow-document': ' -.5rem -.5rem 1.8rem 0 rgb(50, 50, 50), 1.5rem 1.5rem 1rem 0rem var(--shadow-100), inset .3rem .3rem .2rem 0 rgb(230, 230, 230), inset -.3rem -.3rem .2rem 0 rgb(150, 150, 150)',
    '--border-document-table': ' 3px solid rgb(180, 180, 180)',
    '--bg-input-document': ' rgb(200, 200, 200)',
    '--color-input-document': ' rgb(60, 60, 60)',
    '--bg-export': ' rgb(0, 0, 0)',
    '--color-export': 'rgb(180, 180, 180)',
    '--shadow-export': '.6rem .6rem .6rem 0rem var(--shadow-50)',
    '--bg-export-hover': 'rgb(180, 180, 180)',
    '--color-export-hover': 'rgb(0, 0, 0)',
    '--shadow-export-hover': '.6rem .6rem .6rem 0rem var(--shadow-80)',
  }
  const rootStyle = document.documentElement.style
  const changeTheme = (theme) => {
    let cssVars = Object.keys(theme)
    for (let cssVar of cssVars) {
      rootStyle.setProperty(cssVar, theme[cssVar])
    }
  }
  // if (localStorage.getItem('theme') == 'dark') changeTheme(cssDarkTheme)
  // localStorage.setItem('theme', 'dark')
  // localStorage.setItem('theme', 'light')

  useEffect(() => {
    darkThemeIsActive ? changeTheme(cssDarkTheme) : changeTheme(cssLightTheme);
  }, [darkThemeIsActive])

  const handleTheme = () => {
    setDarkThemeIsActive(!darkThemeIsActive);
  }

  return (
    <aside
      className={`main-sidebar ${minSidebar ? 'min-sidebar' : ''}`}
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
        <SidebarNav sidebarOptions={sidebarOptions} />
      </div>
      <div className='sidebar-body__shadow'></div>

      <div className='sidebar-footer sidebar-footer--center'>
        <input id="checkbox" name="checkbox" type="checkbox" />
        <label
          className="theme-container"
          htmlFor="checkbox"
          onClick={handleTheme}
        >
          <div className='theme'>
          </div>
        </label>

        <div className='sidebar-footer__option-container hide'>
          <div className='sidebar-footer__option'>
            <i className="fa-solid fa-brush"></i>
          </div>
          <div className='sidebar-footer__option'>
            <i className="fa-solid fa-font"></i>
          </div>
        </div>

      </div>
    </aside>
  )
}
