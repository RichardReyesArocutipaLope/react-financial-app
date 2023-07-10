import './Button.css'

export const Button = ({ className = 'primary', content, width, event = () => { }, type = 'button' }) => {

  let buttonIcon;
  typeof content === 'string' ? buttonIcon = '' : buttonIcon = 'button-icon'

  return (
    <div className='button-container' onClick={event}>
      <button
        type={type}
        className={`button ${className} ${buttonIcon}`}
        style={{ width }}
      >
        {content}
      </button>
    </div>
  )
}
