import '../assets/styles/Header.css';
import evLogo from '../assets/images/evLogoSignXLg.png'

const Header = () => (
    <header id='headerWrapper'>
      <figure id='logoContainer'>
          <img src={evLogo} alt='EVstreet logo' />
      </figure>
    </header>
)

export default Header
