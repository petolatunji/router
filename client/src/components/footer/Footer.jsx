import './footer.css'
import Logo from '../../image/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Logo} alt='pht' className='img' />
      <span>
        Made with ❤️ and <b>React</b>
      </span>
    </div>
  )
}

export default Footer
