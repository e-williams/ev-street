import React from 'react';
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

function Footer () {

  const FooterWrapper = styled(Grid)({
    marginTop: 22,
    borderTop: 2.5,
    borderRight: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderStyle: 'solid',
    borderColor: '#bcbcbc',
    padding: 26,
  });

  const FooterTypo = styled(Typography)({
    color: '#7e7e7e',
  })

  return (
    <FooterWrapper container columnSpacing={3}>
      <Grid item>
        <FooterTypo variant='h8'>About Us</FooterTypo>
      </Grid>
      <Grid item>
        <FooterTypo variant='h8'>Contact Us</FooterTypo>
      </Grid>
    </FooterWrapper>
  )
}

export default Footer;