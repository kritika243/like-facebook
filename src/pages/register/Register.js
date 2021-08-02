import './register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-left'>
          <h3 className='login-logo'>Facebook Socials</h3>
          <span className='login-desc'>
            Connect with people from all across the globe only at Facebook
            Socials
          </span>
        </div>
        <div className='login-right'>
          <div className='login-box'>
            <input placeholder='Username' className='login-input' />
            <input placeholder='Email' className='login-input' />
            <input placeholder='Password' className='login-input' />
            <input placeholder='Confirm Password' className='login-input' />
            <button type='button' className='login-button'>
              Sign Up
            </button>

            <button type='button' className='login-register-button'>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
