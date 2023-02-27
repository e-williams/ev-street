import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import evLogo from "../assets/images/evLogoSignXXXSm.png";

function Header () {

  const HeaderWrapper = styled(Grid)({
    backgroundColor: 'black',
    fontFamily: 'Verdana, Tahoma, sans-serif',
  })

  const LogoWrapper = styled(Grid)({
    paddingTop: 16,
    paddingLeft: 16,
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
    letterSpacing: 1.6,
  });

  const FilterMessage = styled(Typography)({
    color: '#9e9e9e',
    fontSize: 15,
    letterSpacing: 1.2,
    paddingBottom: 6,
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
            Find the right car.
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