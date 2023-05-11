import './InputContainer.css'

export const InputContainer = ({ children, col, name, label }) => {

    let maxCol = 24;
    let maxWidth = 100;
    let width = 100;
    if (col) {
        width = (col * maxWidth) / maxCol;
    }

    return (
        <div className='input__container' style={{ width: `${width}%` }}>
            {children}
            {label && <label className='input__label' htmlFor={name}>{label}</label>}
        </div>
    )
}
