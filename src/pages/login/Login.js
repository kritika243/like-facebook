import './login.css'

export default function Login() {
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
            <input placeholder='Email' className='login-input' />
            <input placeholder='Password' className='login-input' />
            <button type='button' className='login-button'>
              Log In
            </button>
            <span className='login-forgot'>Forgot Password?</span>
            <button type='button' className='login-register-button'>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
