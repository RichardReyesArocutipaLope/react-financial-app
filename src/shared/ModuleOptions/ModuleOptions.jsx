import './ModuleOptions.css'

export const ModuleOptions = () => {
    return (
        <div className='module-options'>
            <div className='module-option__container'>
                <div className='module-option__wrapper'>
                    <div className='module-option'>
                        <i class="fa-solid fa-file-circle-plus"></i>
                        <p>
                            Crear
                        </p>
                    </div>
                </div>
            </div>
            <div className='module-option__container verde'>
                <div className='module-option__wrapper'>
                    <div className='module-option'>
                        <i class="fa-solid fa-file-pen"></i>
                        <p>
                            Editar
                        </p>
                    </div>
                </div>
            </div>
            <div className='module-option__container gris'>
                <div className='module-option__wrapper'>
                    <div className='module-option'>
                        <i class="fa-solid fa-trash"></i>
                        <p>
                            Eliminar
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
