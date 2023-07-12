import { UserOptionsWindow } from '../userOptionsWindow'
import './Header.css'

export const Header = () => {
  return (
    <header className='main-header' >
      <div className='main-header__options'>
        <div className='main-header__option'>
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className='main-header__option'>
          <i className="fa-solid fa-calendar-days"></i>
        </div>
        <div className='main-header__option'>
          <i className="fa-solid fa-note-sticky"></i>
        </div>
        <div className='main-header__option'>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
      <UserOptionsWindow />
    </header>
  )
}
