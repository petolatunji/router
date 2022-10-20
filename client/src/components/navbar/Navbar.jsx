import './navbar.css'
import Logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='ncontainer'>
        <div className='logo'>
          <img src={Logo} alt='pht' className='image' />
        </div>
        <div className='links'>
          <Link to='/?cat=art' className='link'>
            <h6>ART</h6>
          </Link>
          <Link to='/?cat=science' className='link'>
            <h6>SCIENCE</h6>
          </Link>
          <Link to='/?cat=food' className='link'>
            <h6>FOOD</h6>
          </Link>
          <Link to='/?cat=Fashion' className='link'>
            <h6>DESIGN</h6>
          </Link>
          <Link to='/?cat=cinema' className='link'>
            <h6>CINEMA</h6>
          </Link>
          <Link to='/?cat=technology' className='link'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <span>USERNAME</span>
          <span>LOGOUT</span>
          <span className='write'>
            <Link to='/write' className='link'>
              WRITE
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
