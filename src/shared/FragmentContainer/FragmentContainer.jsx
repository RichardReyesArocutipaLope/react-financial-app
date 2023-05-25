import './FragmentContainer.css'

export const FragmentContainer = ({ children, col, justifyContent='center' }) => {

    let maxCol = 24;
    let maxWidth = 100;
    let width = 100;
    if (col) {
        width = (col * maxWidth) / maxCol;
    }

    return (
        <div className='fragment-container' style={{ width: `${width}%`, justifyContent:justifyContent }}>
            {children}
        </div>
    )
}
