import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import evLogo from '../assets/images/evLogoSignXXXSm.png';

function Header () {

  const HeaderWrapper = styled(Grid)({
    backgroundColor: 'black',
  })

  const LogoWrapper = styled(Grid)({
    paddingTop: 15,
    paddingLeft: 15,
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

  const FilterMessage = styled(Typography)({
    color: '#9e9e9e',
    fontSize: 14,
    fontFamily: 'Ubuntu, Verdana, sans-serif',
    letterSpacing: 1.15,
    paddingBottom: 5,
  })

  const MessageWrapper = styled(Grid)({
    textAlign: 'center',
    width: '100%',
  })

  return (
    <HeaderWrapper container>
      <LogoWrapper container>
        <Grid item>
          <Img alt='EVstreet logo' src={evLogo} />
          <LogoTypo>
            Find the right car
          </LogoTypo>
        </Grid>
      </LogoWrapper>
      <MessageWrapper item>
        <FilterMessage>
          Select your preferred electric vehicle specifications in the FILTERS
          column:
        </FilterMessage>
      </MessageWrapper>
    </HeaderWrapper>
  )
}

export default Header;