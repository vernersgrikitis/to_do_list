import './Button.css'

type ButtonProps = {
    disabled?: boolean;
    type?: 'button' | 'submit'
    onClick?: () => void;
    children: React.ReactNode;
}

const Button = ({ children, type = 'button', disabled = false, onClick }: ButtonProps) => {

    return(
        <button 
          type={type}
          className='button'
          disabled={disabled}
          onClick={onClick}
        >  
        {children}
      </button>
    )
}

export default Button