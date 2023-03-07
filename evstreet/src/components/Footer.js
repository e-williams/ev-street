import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Divider, Chip } from '@mui/material';

function Footer () {

  const FooterWrapper = styled(Grid)({
    marginTop: 22,
    marginBottom: 10,
    fontFamily: 'Robato, Verdana, sans-serif',
    fontWeight: 300,
    color: '#7e7e7e',
  });

  const FooterTopBottom = styled(Grid)({
    width: '100%',
  });

  const MainSection = styled(Grid)({
    padding: 26,
  });

  const LinkTypo = styled(Typography)({
    fontSize: 14,
  });

  const CopyrightTypo = styled(Typography)({
    marginLeft: 26,
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'italic',
  });

  return (
    <FooterWrapper container>
      <FooterTopBottom item>
        <Divider
          sx={{
            borderBottomWidth: 3,
          }}
        />
      </FooterTopBottom>
      <MainSection container columnSpacing={3}>
        <Grid item>
          <LinkTypo>About Us</LinkTypo>
        </Grid>
        <Grid item>
          <LinkTypo>Contact Us</LinkTypo>
        </Grid>
      </MainSection>
      <FooterTopBottom item>
        <Chip sx={{
                width: '50%',
                height: '1px',
                background: 'linear-gradient(to right, #dcdcdc, #00000000)'
                }}>
        </Chip>
        <CopyrightTypo>Copyright &copy; 2023 EVstreet.com</CopyrightTypo>
      </FooterTopBottom>
    </FooterWrapper>
  )
}

export default Footer;