import './Button.css'

export const Button = ({ className = 'primary', content, width }) => {
  let buttonIcon;

  typeof content ==='string' ? buttonIcon='' : buttonIcon='button-icon'
  return (
    <div className='button-container'>
      <button
        type="button"
        className={`button ${className} ${buttonIcon}`}
        style={{ width }}
      >
        {content}
      </button>
    </div>
  )
}
