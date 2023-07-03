import './InputFileImage.css'

export const InputFileImage = ({ name }) => {
    return (
        <>
            <label htmlFor={name} className='input-file-image'>
            <i className="fa-solid fa-image icon-image"></i>
            </label>
            <input type="file" id={name} name={name} style={{display:'none'}}/>
        </>
    )
}
