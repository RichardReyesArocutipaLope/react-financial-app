
import './ModuleOption.css'

export const ModuleOption = ({ moduleOptionData, moduleOptionModal, handleModal }) => {

    const { moduleOptionIcon, moduleOptionLabel, moduleOptionColor, } = moduleOptionData;
    const { modalBodyComponent, modalFooterComponent, modalProperties } = moduleOptionModal

    return (
        <div className={`module-option__container ${moduleOptionColor}`}>
            <button
                className='module-option__wrapper'
                onClick={() => { handleModal('setData', modalBodyComponent, modalFooterComponent, modalProperties,) }}
            >
                <div className='module-option'>
                    {moduleOptionIcon}
                    <p>{moduleOptionLabel}</p>
                </div>
            </button>
        </div>
    )
}
