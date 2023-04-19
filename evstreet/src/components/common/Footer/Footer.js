import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Divider, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const FooterWrapper = styled(Grid)({
  marginTop: 22,
  marginBottom: 10,
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  color: "#7e7e7e",
});

const FooterTopBottom = styled(Grid)({
  width: "100%",
});

const MainSection = styled(Grid)({
  marginTop: 12,
  marginBottom: 10,
  marginLeft: 0,
});

const StyledLink = styled(Link)({
  fontSize: 14,
  textDecoration: "none",
  color: "#7e7e7e",
  paddingBottom: 2,
  "&:hover": {
    borderBottom: "1px solid #2db34a",
    color: "#2db34a",
  },
})

const CopyrightTypo = styled(Typography)({
  marginLeft: 23,
  fontSize: 12,
  fontWeight: 300,
  fontStyle: "italic",
});

function Footer () {
  return (
    <FooterWrapper container>
      <FooterTopBottom item>
        <Divider
          sx={{
            borderBottomWidth: 2,
          }}
        />
      </FooterTopBottom>
      <MainSection container columnSpacing={3}>
        <Grid item>
          <StyledLink to="/about">
            About Us
          </StyledLink>
        </Grid>
        <Grid item>
          <StyledLink to="/contact">
            Contact Us
          </StyledLink>
        </Grid>
      </MainSection>
      <FooterTopBottom item>
        <Chip sx={{
                width: "50%",
                height: "1px",
                background: "linear-gradient(to right, #dcdcdc, #00000000)"
                }}>
        </Chip>
        <CopyrightTypo>Copyright &copy; 2023 Evan Williams</CopyrightTypo>
      </FooterTopBottom>
    </FooterWrapper>
  );
}

export default Footer;