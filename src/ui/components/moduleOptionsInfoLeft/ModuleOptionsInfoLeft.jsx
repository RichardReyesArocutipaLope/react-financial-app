import './ModuleOptionsInfoLeft.css'

export const ModuleOptionsInfoLeft = ({ titleInfoLeft = "", moreInfoLeft, handleMoreInfoLeft, creditSelected }) => {

    return (
        <div
            className={`module-options__info-wrapper left ${moreInfoLeft ? 'extend' : ''}`}
            onDoubleClick={handleMoreInfoLeft}
        >
            <p>{titleInfoLeft}</p>
            <div className='module-options__info'>
                {
                    !creditSelected
                        ? <h2 className='message-empty'>Seleccione un registro</h2>
                        : (creditSelected.data?.map((item, index) => (
                            <div className='module-options__info-row' key={index}>
                                <span>{creditSelected.tablethead[index]}</span>
                                <span>{item}</span>
                            </div>
                        )))
                }
            </div>
        </div>
    )
}
