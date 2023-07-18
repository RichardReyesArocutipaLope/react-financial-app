import './InputContainer.css'

export const InputContainer = ({ children, col, error, displayNone=false }) => {

    let maxCol = 24;
    let maxWidth = 100;
    let width = 100;
    if (col) {
        width = (col * maxWidth) / maxCol;
    }

    return (
        <div className='input__container' style={{ width: `${width}%`, display:`${displayNone?'none':'flex'}` }}>
            {children}
            {error && <p className='input-error-message'>{error}</p>}
        </div>
    )
}
