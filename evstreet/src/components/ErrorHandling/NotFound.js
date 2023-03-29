import { React } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer/Footer";
import ArrowBackIcon from "../Common/ArrowBackIcon";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const NotFoundWrapper = styled(Container)({
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
      < Container maxWidth="xl" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </Container >
      <NotFoundWrapper>
        <Typo>Oops, it looks like the page does not exist.</Typo>
      </NotFoundWrapper>
      <Footer />
    </>
  );
}

export default NotFound;
