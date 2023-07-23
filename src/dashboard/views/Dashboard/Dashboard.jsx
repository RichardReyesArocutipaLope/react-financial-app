import logoReact from '../../../assets/img/dashboard/react-icon.svg'
import logoNest from '../../../assets/img/dashboard/nest-icon.svg'
import financialAppDB from '../../../assets/img/dashboard/financial_app_di.png'
import './Dashboard.css'
import { MirrorCard } from '../../../ui/components/mirrorCard/MirrorCard'
import { ShadowCard } from '../../../ui/components/shadowCard/ShadowCard'


export const Dashboard = () => {

  return (

    <div className='dashboard'>
      <h1 className='tools-title'>APLICACIÓN FINANCIERA</h1>
      <div className='tools-container'>

        <div className='social-container'>
          <a href="https://github.com/RichardReyesArocutipaLope"
            target='_blank' className='social-icon'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a className='social-icon'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className='social-icon'>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className='social-icon'>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <MirrorCard width='30rem' height='45rem'>
          <div className='tools'>
            <div className='tools__img'>
              <img src={logoReact} alt="tools__logo" className='tools__logo' />
            </div>
            <h2>ReactJS</h2>
            <a
              href="https://github.com/RichardReyesArocutipaLope/react-financial-app"
              target='_blank' className='tools__repository'
            > <i class="fa-brands fa-github"></i> Repositorio</a>
            <p className='tools__description'>El Front End posee validación de formularios, exportaciones, modo oscuro y diseño responsivo. Se uso Redux Toolkit, axios y todos los componentes son propios y desarrollados con puro CSS</p>
          </div>
        </MirrorCard>
        <span className='tools__plus'><i class="fa-solid fa-plus"></i></span>
        <MirrorCard width='30rem' height='45rem'>
          <div className='tools'>
            <div className='tools__img'>
              <img src={logoNest} alt="tools__logo" className='tools__logo' />
            </div>
            <h2>NestJS</h2>
            <a
              href="https://github.com/RichardReyesArocutipaLope/nestjs-postgresql-financial-app"
              target='_blank' className='tools__repository'
            > <i class="fa-brands fa-github"></i> Repositorio</a>

            <p className='tools__description'>
              Esta API usa PostgreSQL, posee authenticacion con JWT, control de usuarios mediante roles y permisos y para la manipulacion de datos se usa TypeORM.
            </p>
          </div>
        </MirrorCard>

      </div>
      <ShadowCard width='100%' height='max-content'>
        <div className='db-logical'>
          <h2 className='db-logical__title'>Modelo lógico de la base de datos {'(primera versión)'}</h2>
          <img src={financialAppDB} alt="" />
        </div>
      </ShadowCard>



    </div>



  )
}
