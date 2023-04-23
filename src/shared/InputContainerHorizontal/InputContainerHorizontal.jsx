import './InputContainerHorizontal.css'

export const InputContainerHorizontal = ({ children, col }) => {

    let maxCol = 24;
    let maxWidth = 100;
    let width = 100;
    if (col) {
        width = (col * maxWidth) / maxCol;
    }

    return (
        <div className='input-container-horizontal' style={{ width: `${width}%` }}>
            {children}
        </div>
    )
}
