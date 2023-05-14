import './ModuleOption.css'

export const ModuleOption = ({icon,text, color, handleModal}) => {
    return (
        <div className={`module-option__container ${color}`}>
            <button className='module-option__wrapper' onClick={handleModal}>
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
