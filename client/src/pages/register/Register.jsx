import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
      <h1 className='rtitle'>Register</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type='email' placeholder='email' />
        <input required type='password' placeholder='password' />
        <button>Register</button>
        <p>This is an error</p>
        <span>
          Already have an account ? then <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
