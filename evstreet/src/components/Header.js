import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import evLogo from '../assets/images/evLogoSignXXXSm.png';
import { Link } from 'react-router-dom';

function Header () {

  const HeaderWrapper = styled(Grid)({
    backgroundColor: 'black',
    marginBottom: 21,
  })

  const LogoWrapper = styled(Grid)({
    padding: 15,
  });

  const StyledLink = styled(Link)({
    textDecoration: 'none',
  });

  const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const LogoTypo = styled(Typography)({
    textAlign: 'center',
    color: '#2db34a',
    fontSize: 12,
    fontFamily: 'Roboto, Verdana, sans-serif',
    letterSpacing: 1.3,
    fontWeight: '700',
  });

  return (
    <HeaderWrapper container>
      <LogoWrapper container>
        <Grid item>
          <StyledLink to='/'>
            <Img alt='EVstreet logo' src={evLogo} />
            <LogoTypo>
              Find the right car
            </LogoTypo>
          </StyledLink>
        </Grid>
      </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;