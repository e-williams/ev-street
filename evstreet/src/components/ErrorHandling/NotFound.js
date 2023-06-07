import Header from "../Common/Header";
import Footer from "../Common/Footer/Footer";
import ArrowBackIcon from "../Common/ArrowBackIcon";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Typo = styled(Typography)({
  marginBottom: 6,
  fontSize: 19,
  fontWeight: "300",
});

function NotFound() {
  const NotFoundWrapper = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    color: "#7e7e7e",
  });

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NotFoundWrapper maxWidth="sm">
        <Box onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </Box>
        <Typo>Oops, it looks like the page does not exist.</Typo>
      </NotFoundWrapper>
      <Footer />
    </>
  );
}

export default NotFound;