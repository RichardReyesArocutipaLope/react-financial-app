import './InputContainer.css'

export const InputContainer = ({ children, col, minWidth }) => {

    let maxCol = 24;
    let maxWidth = 100;
    let width = 100;
    if (col) {
        width = (col * maxWidth) / maxCol;
    }

    return (
        <div className='input__container' style={{ width: `${width}%` }}>
            {children}

            <div className='min-width__input'
                style={{width:`${minWidth}rem`}}
            ></div>
        </div>
    )
}
