import { React } from "react";
import Header from "../Header";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const ContactUsWrapper = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    marginTop: 40,
    color: "#7e7e7e",
  });

  const Typo = styled(Typography)({
    marginBottom: 6,
    fontSize: 19,
  });

  const StyledNav = styled(Typography)({
    fontSize: 15,
    color: "#2db34a",
    cursor: "pointer",
    display: "inline", // limits border to text
    "&:hover": {
      borderBottom: "1px solid #2db34a",
      color: "#2db34a",
    },
  });

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <ContactUsWrapper>
        <Typo>The ability to contact EVstreet.com is coming soon!</Typo>
        <Typo>Thank you for your interest in reaching us.</Typo>
        <StyledNav onClick={() => navigate(-1)}>
          Click here to return to the previous page.
        </StyledNav>
      </ContactUsWrapper>
    </>
  );
}

export default ContactUs;
