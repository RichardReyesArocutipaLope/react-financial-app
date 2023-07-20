import './InputForDocument.css'

export const InputForDocument = ({ col, label, content, textarea }) => {
    
    let maxCol = 24;
    let maxWidth = 100;
    let width = 100;
    if (col) {
        width = (col * maxWidth) / maxCol;
    }

    return (
        <div className={`input-doc__container ${textarea?'textarea':''}`} style={{ width: `${width}%` }}>
            <div className={`input-doc ${textarea?'textarea':''}`}>{content}</div>
            {label && <div className='input-doc__label'>{label}</div>}
        </div>
    )
}
