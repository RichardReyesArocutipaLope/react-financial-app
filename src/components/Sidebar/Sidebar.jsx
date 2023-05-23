import { useState } from 'react';
import { SidebarNav } from '../../shared/SidebarNav/SidebarNav';
import './Sidebar.css';
import { sidebarOptions } from '../../data/sidebarOptions';

export const Sidebar = () => {

  const [minSidebar, setMinSidebar] = useState(false)
  const handleMinimizeSidebar = () => {
    setMinSidebar(!minSidebar);
  }


  const cssLightTheme = {
    '--text-one-color-black': 'rgb(0, 0, 0)',
    '--text-two-color-black': 'rgb(10, 10, 10)',
    '--text-three-color-black': 'rgb(20, 20, 20)',
    '--text-four-color-black': 'rgb(30, 30, 30)',
    '--text-five-color-black': 'rgb(40, 40, 40)',
    '--text-six-color-black': 'rgb(50, 50, 50)',
    '--text-seven-color-black': 'rgb(60, 60, 60)',
    '--text-eight-color-black': 'rgb(70, 70, 70)',
    '--text-nine-color-black': 'rgb(80, 80, 80)',
    '--text-ten-color-black': 'rgb(90, 90, 90)',
    '--text-eleven-color-black': 'rgb(100, 100, 100)',
    '--text-twelve-color-black': 'rgb(110, 110, 110)',
    '--text-thirteen-color-black': 'rgb(120, 120, 120)',
    '--text-alternative-one-color-white': 'rgb(255, 255, 255)',
    '--text-alternative-two-color-white': 'rgb(245, 245, 245)',
    '--text-alternative-three-color-white': 'rgb(235, 235, 235)',
    '--text-alternative-four-color-white': 'rgb(225, 225, 225)',
    '--text-alternative-five-color-white': 'rgb(215, 215, 215)',
    '--text-alternative-six-color-white': 'rgb(205, 205, 205)',
    '--text-alternative-seven-color-white': 'rgb(195, 195, 195)',
    '--text-alternative-eight-color-white': 'rgb(185, 185, 185)',
    '--text-alternative-nine-color-white': 'rgb(175, 175, 175)',
    '--text-alternative-ten-color-white': 'rgb(165, 165, 165)',
    '--text-alternative-eleven-color-white': 'rgb(155, 155, 155)',
    '--text-alternative-twelve-color-white': 'rgb(145, 145, 145)',
    '--text-alternative-thirteen-color-white': 'rgb(135, 135, 135)',
    '--bg-one-color-black': 'rgb(0, 0, 0)',
    '--bg-two-color-black': 'rgb(10, 10, 10)',
    '--bg-three-color-black': 'rgb(20, 20, 20)',
    '--bg-four-color-black': 'rgb(30, 30, 30)',
    '--bg-five-color-black': 'rgb(40, 40, 40)',
    '--bg-six-color-black': 'rgb(50, 50, 50)',
    '--bg-seven-color-black': 'rgb(60, 60, 60)',
    '--bg-eight-color-black': 'rgb(70, 70, 70)',
    '--bg-nine-color-black': 'rgb(80, 80, 80)',
    '--bg-ten-color-black': 'rgb(90, 90, 90)',
    '--bg-eleven-color-black': 'rgb(100, 100, 100)',
    '--bg-twelve-color-black': 'rgb(110, 110, 110)',
    '--bg-thirteen-color-black': 'rgb(120, 120, 120)',
    '--bg-one-color-white': 'rgb(255, 255, 255)',
    '--bg-two-color-white': 'rgb(250, 250, 250)',
    '--bg-three-color-white': 'rgb(240, 240, 240)',
    '--bg-four-color-white': 'rgb(230, 230, 230)',
    '--bg-five-color-white': 'rgb(220, 220, 220)',
    '--bg-six-color-white': 'rgb(210, 210, 210)',
    '--bg-seven-color-white': 'rgb(200, 200, 200)',
    '--bg-eight-color-white': 'rgb(190, 190, 190)',
    '--bg-nine-color-white': 'rgb(180, 180, 180)',
    '--bg-ten-color-white': 'rgb(170, 170, 170)',
    '--bg-eleven-color-white': 'rgb(160, 160, 160)',
    '--bg-twelve-color-white': 'rgb(150, 150, 150)',
    '--bg-thirteen-color-white': 'rgb(140, 140, 140)',
  }
  const cssDarkTheme = {
    '--text-one-color-black': 'rgb(255, 255, 255)',
    '--text-two-color-black': 'rgb(245, 245, 245)',
    '--text-three-color-black': 'rgb(235, 235, 235)',
    '--text-four-color-black': 'rgb(225, 225, 225)',
    '--text-five-color-black': 'rgb(215, 215, 215)',
    '--text-six-color-black': 'rgb(205, 205, 205)',
    '--text-seven-color-black': 'rgb(195, 195, 195)',
    '--text-eight-color-black': 'rgb(185, 185, 185)',
    '--text-nine-color-black': 'rgb(175, 175, 175)',
    '--text-ten-color-black': 'rgb(165, 165, 165)',
    '--text-eleven-color-black': 'rgb(155, 155, 155)',
    '--text-twelve-color-black': 'rgb(145, 145, 145)',
    '--text-thirteen-color-black': 'rgb(135, 135, 135)',
    '--text-alternative-one-color-white': 'rgb(0, 0, 0)',
    '--text-alternative-two-color-white': 'rgb(10, 10, 10)',
    '--text-alternative-three-color-white': 'rgb(20, 20, 20)',
    '--text-alternative-four-color-white': 'rgb(30, 30, 30)',
    '--text-alternative-five-color-white': 'rgb(40, 40, 40)',
    '--text-alternative-six-color-white': 'rgb(50, 50, 50)',
    '--text-alternative-seven-color-white': 'rgb(60, 60, 60)',
    '--text-alternative-eight-color-white': 'rgb(70, 70, 70)',
    '--text-alternative-nine-color-white': 'rgb(80, 80, 80)',
    '--text-alternative-ten-color-white': 'rgb(90, 90, 90)',
    '--text-alternative-eleven-color-white': 'rgb(100, 100, 100)',
    '--text-alternative-twelve-color-white': 'rgb(110, 110, 110)',
    '--text-alternative-thirteen-color-white': 'rgb(120, 120, 120)',
    '--bg-one-color-black': 'rgb(0, 4, 4)',
    '--bg-two-color-black': 'rgb(0, 5, 5)',
    '--bg-three-color-black': 'rgb(0, 5, 6)',
    '--bg-four-color-black': 'rgb(0, 6, 7)',
    '--bg-five-color-black': 'rgb(0, 6, 8)',
    '--bg-six-color-black': 'rgb(0, 7, 9)',
    '--bg-seven-color-black': 'rgb(0, 7, 10)',
    '--bg-eight-color-black': 'rgb(0, 8, 11)',
    '--bg-nine-color-black': 'rgb(0, 8, 12)',
    '--bg-ten-color-black': 'rgb(0, 9, 13)',
    '--bg-eleven-color-black': 'rgb(0, 10, 14)',
    '--bg-twelve-color-black': 'rgb(0, 10, 15)',
    '--bg-thirteen-color-black': 'rgb(0, 11, 16)',
    '--bg-one-color-white': 'rgb(0, 69, 100)',
    '--bg-two-color-white': 'rgb(0, 59, 85)',
    '--bg-three-color-white': 'rgb(0, 51, 73)',
    '--bg-four-color-white': 'rgb(0, 43, 61)',
    '--bg-five-color-white': 'rgb(0, 35, 50)',
    '--bg-six-color-white': 'rgb(0, 28, 40)',
    '--bg-seven-color-white': 'rgb(0, 22, 32)',
    '--bg-eight-color-white': 'rgb(0, 18, 26)',
    '--bg-nine-color-white': 'rgb(0, 15, 22)',
    '--bg-ten-color-white': 'rgb(0, 14, 20)',
    '--bg-eleven-color-white': 'rgb(0, 13, 19)',
    '--bg-twelve-color-white': 'rgb(0, 12, 18)',
    '--bg-thirteen-color-white': 'rgb(0, 12, 17)',
  }

  const rootStyle = document.documentElement.style
  // const darkTheme = document.getElementById('dark-theme')
  // const lightTheme = document.getElementById('light-theme')
  // const buttonTheme = document.getElementById('button-theme')

  const changeTheme = (theme) => {
    let cssVars = Object.keys(theme)
    for (let cssVar of cssVars) {
      rootStyle.setProperty(cssVar, theme[cssVar])
    }
  }

  // if (localStorage.getItem('theme') == 'dark') {
  //   buttonTheme.classList.add("dark");
  //   darkTheme.classList.add('active')
  //   lightTheme.classList.remove('active')
  //   changeTheme(cssDarkTheme)
  // }

  // //volver a revisar esto 
  // darkTheme.addEventListener("click", () => {
  //   buttonTheme.classList.add("dark");
  //   darkTheme.classList.add('active')
  //   lightTheme.classList.remove('active')
  //   if (darkTheme.classList.contains('active')) {
  //     changeTheme(cssDarkTheme)
  //     localStorage.setItem('theme', 'dark')
  //   }
  // })
  // lightTheme.addEventListener("click", () => {
  //   buttonTheme.classList.remove("dark");
  //   darkTheme.classList.remove('active')
  //   lightTheme.classList.add('active')
  //   if (lightTheme.classList.contains('active')) {
  //     changeTheme(cssLightTheme)
  //     localStorage.setItem('theme', 'light')
  //   }
  // })

  const handleTheme = () => {
    changeTheme(cssDarkTheme);
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
            <i class="fa-solid fa-brush"></i>
          </div>
          <div className='sidebar-footer__option'>
            <i class="fa-solid fa-font"></i>
          </div>
        </div>

      </div>
    </aside>
  )
}
