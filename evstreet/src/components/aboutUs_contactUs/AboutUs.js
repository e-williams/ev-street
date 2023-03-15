import { React } from 'react';
import Header from '../Header';
import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';

function AboutUs() {

  const AboutUsContainer = styled(Container)({
    fontFamily: 'Roboto, Verdana, sans-serif',
    marginTop: 40,
    color: '#7e7e7e',
  });

  const HeadingTypo = styled(Typography)({
    marginBottom: 6,
    color: 'black',
  });

  return (
    <>
      <Header />
      <AboutUsContainer>
        <HeadingTypo variant='h6'>
          Why use EVstreet.com?
        </HeadingTypo>
        <Typography>
          EVstreet was born from an observed need for an efficient, powerful way to shop for and research electric vehicles.
        </Typography>
      </AboutUsContainer>
    </>
  );
}

export default AboutUs;