import './InputFileDocument.css'

export const InputFileDocument = ({ name }) => {
    return (
        <>
            <label for={name} className='input-file-document'>
                <i className="fa-solid fa-file-import"></i>
            </label>
            <input type="file" id={name} name={name} style={{ display: 'none' }} />
        </>
    )
}
