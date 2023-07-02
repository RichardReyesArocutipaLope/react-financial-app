
import './ModuleOption.css'

export const ModuleOption = ({ icon, text, color, handleModal, bodyComponent, footerComponent, modalProperties }) => {


    return (
        <div className={`module-option__container ${color}`}>
            <button
                className='module-option__wrapper'
                onClick={() => {
                    handleModal('setData', bodyComponent, footerComponent, modalProperties,)
                }}>
                <div className='module-option'>
                    {icon}
                    <p>
                        {text}
                    </p>
                </div>
            </button>
        </div>
    )
}
