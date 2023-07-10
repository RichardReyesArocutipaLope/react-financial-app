import './ModuleOptionsInfoLeft.css'

export const ModuleOptionsInfoLeft = ({ titleInfoLeft = "", moreInfoLeft, handleMoreInfoLeft, creditSelect }) => {

    return (
        <div
            className={`module-options__info-wrapper left ${moreInfoLeft ? 'extend' : ''}`}
            onDoubleClick={handleMoreInfoLeft}
        >
            <p>{titleInfoLeft}</p>
            <div className='module-options__info'>
                {
                    !creditSelect
                        ? <h2 className='message-empty'>Seleccione un registro</h2>
                        : (creditSelect.data?.map((item, index) => (
                            <div className='module-options__info-row' key={index}>
                                <span>{creditSelect.thead[index]}</span>
                                <span>{item}</span>
                            </div>
                        )))
                }
            </div>
        </div>
    )
}
