import './InputFileImage.css'

export const InputFileImage = ({ name }) => {
    return (
        <>
            <label for={name} className='input-file-image'>
            <i class="fa-solid fa-image icon-image"></i>
            </label>
            <input type="file" id={name} name={name} style={{display:'none'}}/>
        </>
    )
}
