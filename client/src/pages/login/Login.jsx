import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <h1 className='ltitle'>Login</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>LOGIN</button>
        <p>This is an error</p>
        <span>
          Don,t have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
