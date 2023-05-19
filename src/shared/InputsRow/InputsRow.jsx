import './InputsRow.css'

export const InputsRow = ({ children, margin = '1.1', justifyContent = 'start' }) => {
  return (
    <div className='inputs-row'
      style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem`, justifyContent: justifyContent }}>
      {children}
    </div>
  )
}
