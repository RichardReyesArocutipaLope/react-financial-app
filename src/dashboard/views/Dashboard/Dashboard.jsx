import logoReact from '../../../assets/img/dashboard/react-icon.svg'
import logoNest from '../../../assets/img/dashboard/nest-icon.svg'
import './Dashboard.css'


export const Dashboard = () => {

  return (

    <div>
      <h1 className='tools-title'>APLICACIÓN FINANCIERA</h1>
      <div className='tools-container'>
        <span className='tools__plus'><i class="fa-solid fa-plus"></i></span>
        <div className='tools'>
          <div className='tools__img'>
            <img src={logoReact} alt="react-logo" className='react-logo' />
          </div>
          <h2>ReactJS</h2>
          <a
            href="https://github.com/RichardReyesArocutipaLope/react-financial-app" 
            target='_blank' className='tools__repository'
          > <i class="fa-brands fa-github"></i> Repositorio</a>
        </div>
        <div className='tools'>
          <div className='tools__img'>
            <img src={logoNest} alt="nest-logo" className='nest-logo' />
          </div>
          <h2>NestJS</h2>
          <a
            href="https://github.com/RichardReyesArocutipaLope/nestjs-postgresql-financial-app" 
            target='_blank' className='tools__repository'
          > <i class="fa-brands fa-github"></i> Repositorio</a>
        </div>
      </div>

    </div>

  )
}
