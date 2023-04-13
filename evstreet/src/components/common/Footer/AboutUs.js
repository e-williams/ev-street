import { React } from "react";
import Header from "../Header";
import Footer from "./Footer";
import ArrowBackIcon from "../ArrowBackIcon";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutUsWrapper = styled(Container)({
  color: "#7e7e7e",
});

const HeadingTypo = styled(Typography)({
  marginBottom: 6,
});

const StyledTypo = styled(Typography)({
  fontWeight: "300",
})

function AboutUs() {        

  const navigate = useNavigate();

  return (
    <>
      <Header />
      < Container maxWidth="xl" onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </Container>
      <AboutUsWrapper>
        <HeadingTypo variant="h6">Why use EVstreet.com?</HeadingTypo>
        <StyledTypo>
          EVstreet was born from an observed need for an efficient, powerful way
          to shop for and research electric vehicles.
        </StyledTypo>
      </AboutUsWrapper>
      <Footer />
    </>
  );
}

export default AboutUs;
