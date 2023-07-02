
import './Header.css'

export const Header = () => {
  return (
    <header className='main-header'>
      <div className='main-header__options'>
        <div className='main-header__option'>
        <i class="fa-solid fa-bell"></i>
        </div>
        <div className='main-header__option'>
        <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div className='main-header__option'>
        <i class="fa-solid fa-note-sticky"></i>
        </div>
        <div className='main-header__option'>
        <i class="fa-solid fa-gear"></i>
        </div>
      </div>
      <div className='main-header__perfil'>
        <div className='main-header__perfil-img'>
          <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div className='main-header__perfil-name'>
          <p>Richard A.</p>
          <p>Director</p>
        </div>
        {/* <div className='main-header__perfil-options'>

        </div> */}
      </div>
    </header>
  )
}
