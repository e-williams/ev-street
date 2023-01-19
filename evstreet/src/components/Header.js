import '../assets/styles/Header.css';
import evLogo from '../assets/images/evLogoSignXLg.png'

function Header() {
  return (
    <header id='headerWrapper'>
      <figure id='logoContainer'>
          <img src={evLogo} alt='EVstreet logo' />
      </figure>
    </header>
  )
}

export default Header