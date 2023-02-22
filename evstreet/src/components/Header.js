import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import evLogo from "../assets/images/evLogoSignXXSm.png";

function Header () {

  const HeaderWrapper = styled(Grid)({
    backgroundColor: 'black',
    fontFamily: 'Gill Sans, sans-serif',
  })

  const LogoWrapper = styled(Grid)({
    paddingTop: 22,
    paddingLeft: 22,
  });

  const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const LogoTypo = styled(Typography)({
    textAlign: 'center',
    //color: '#eeeeee',
    color: '#2db34a',
    fontSize: 14,
    letterSpacing: 1.6,
  });

  const FilterMessage = styled(Typography)({
    fontFamily: 'Verdana, Tahoma, sans-serif',
    letterSpacing: .9,
    color: '#90a4ae',
    fontSize: 16,
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
      <Grid item sx={{ textAlign: 'center', width: '100%' }}>
        <FilterMessage>
          Select your preferred electric vehicle specifications in the FILTERS
          column:
        </FilterMessage>
      </Grid>
    </HeaderWrapper>
  )
}

export default Header