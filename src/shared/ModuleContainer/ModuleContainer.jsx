import './ModuleContainer.css'

export const ModuleContainer = ({ children }) => {
    return (
        <>
            <div className='body__shadow'></div>
            <div className='module-container'>
                {children}
            </div>
            <div className='body__shadow'></div>
        </>
    )
}
