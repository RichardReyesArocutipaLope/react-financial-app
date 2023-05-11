import './Button.css'

export const Button = ({ className = 'primary', content, width }) => {
  let claseex;

  typeof content ==='string' ? claseex='' : claseex='sintext'
  return (
    <div className='button-container'>
      <button
        type="button"
        className={`button ${className} ${claseex}`}
        style={{ width }}
      >
        {content}
      </button>
    </div>
  )
}
