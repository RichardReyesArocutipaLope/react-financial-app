
import './SidebarItem.css';
import { SidebarOption } from '../SidebarOption/SidebarOption';

export const SidebarItem = ({ option, asideRef, optionTooltipRef}) => {

  return (
    <>
      <li className='main-sidebar__item'>
        {
          (option.options.length > 0) ?
            (
              <SidebarOption option={option} isLink={false} asideRef={asideRef} optionTooltipRef={optionTooltipRef} />
            )
            :
            (
              <SidebarOption option={option} isLink={true} asideRef={asideRef} optionTooltipRef={optionTooltipRef} />
            )
        }
      </li>
    </>
  )
}
