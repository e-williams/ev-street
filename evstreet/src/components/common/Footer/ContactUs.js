import { React } from "react";
import Header from "../Header";
import Footer from "./Footer";
import ArrowBackIcon from "../ArrowBackIcon";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const ContactUsWrapper = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    color: "#7e7e7e",
  });

  const Typo = styled(Typography)({
    marginBottom: 6,
    fontSize: 19,
    fontWeight: "300",
  });

  const navigate = useNavigate();

  return (
    <>
      <Header />
      < Container maxWidth="xl" onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </Container>
      <ContactUsWrapper>
        <Typo>The ability to contact EVstreet.com is coming soon!</Typo>
        <Typo>Thank you for your interest in reaching us.</Typo>
      </ContactUsWrapper>
      <Footer />
    </>
  );
}

export default ContactUs;
