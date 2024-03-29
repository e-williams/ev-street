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
  marginBottom: 12,
})

function AboutUs() {        

  const navigate = useNavigate();

  return (
    <>
      <Header />
      < Container maxWidth="false" onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </Container>
      <AboutUsWrapper maxWidth="sm">
        <HeadingTypo variant="h6">Why use EVstreet.com?</HeadingTypo>
        <StyledTypo>
          EVstreet was born from an observed need for an efficient, powerful way to shop for and research electric vehicles. The project was founded in San Francisco, near the heart of the EV revolution, and took initial form when societies' understanding and acceptance of EVs was just getting off the ground. We aim to provide vehicle filter capabilities that best meet the needs and preferences of the end user, and to include only the most sensible information, while excluding supurfluous clutter. We frequently re-evaluate our strategy and implement improvements to better achieve our vision.
        </StyledTypo>
        <StyledTypo>
          We at EVstreet are passionate about sustainability and the health of our natural environment. We strive to achieve a product that reflects that passion, and hope to aid in the facilitatation of a worldwide transition to vehicles powered by alternatives to combustion engines.
        </StyledTypo>
      </AboutUsWrapper>
      <Footer />
    </>
  );
}

export default AboutUs;