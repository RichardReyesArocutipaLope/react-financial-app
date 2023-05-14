import './InputsRow.css'

export const InputsRow = ({children, margin='1.1'}) => {
  return (
    <div className='inputs-row' style={{marginTop:`${margin}rem`,marginBottom:`${margin}rem`}}>
        {children}
    </div>
  )
}
