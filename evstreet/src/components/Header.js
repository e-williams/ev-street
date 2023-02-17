import React from 'react';
import '../assets/styles/Header.css';
import evLogo from '../assets/images/evLogoSignXLg.png'

const Header = () => (
    <header id='headerWrapper'>
      <figure id='logoContainer'>
          <img alt='EVstreet logo' src={evLogo} />
      </figure>
    </header>
);

export default Header
