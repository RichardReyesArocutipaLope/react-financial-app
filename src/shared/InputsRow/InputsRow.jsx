import './InputsRow.css'

export const InputsRow = ({ children, margin = '1.1', justifyContent = 'start', gap='1rem 0rem' }) => {
  return (
    <div className='inputs-row'
      style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem`, justifyContent: justifyContent, gap:gap }}>
      {children}
    </div>
  )
}
