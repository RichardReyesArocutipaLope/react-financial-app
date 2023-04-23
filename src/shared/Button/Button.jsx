import './Button.css'

export const Button = ({ className = 'primary', content, width }) => {
  return (
    <div className='button-container'>
      <button
        type="button"
        className={`button ${className}`}
        style={{ width }}
      >
        {content}
      </button>
    </div>
  )
}
