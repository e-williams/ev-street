import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import evLogo from "../assets/images/evLogoSignXXSm.png";
import backgroundImg from "../assets/images/NioCropStretch.jpeg";

function Header () {

  const HeaderWrapper = styled(Grid)({
    backgroundColor: 'black',
    backgroundImage: 
      'linear-gradient(to right, black, transparent), url('+ backgroundImg+')',
    backgroundPositionX: 'right',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Gill Sans, sans-serif',
  })

  const LogoWrapper = styled(Grid)({
    paddingTop: 26,
    paddingLeft: 26,
  });

  const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const LogoTypo = styled(Typography)({
    textAlign: 'center',
    color: '#eeeeee',
    fontSize: 14,
    letterSpacing: 1.6,
  });

  const FilterMessage = styled(Typography)({
    color: '#90a4ae',
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 8,
  })

  return (
    <HeaderWrapper container>
      <LogoWrapper container>
        <Grid item>
          <Img alt='EVstreet logo' src={evLogo} />
          <LogoTypo>
            Find the right car.
          </LogoTypo>
        </Grid>
      </LogoWrapper>
      <FilterMessage>
        Select your preferred electric vehicle specifications in the FILTERS
        column below:
      </FilterMessage>
    </HeaderWrapper>
  )
}

export default Header