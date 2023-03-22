import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import evLogo from "../../assets/images/evLogoSignXXXSm.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const HeaderWrapper = styled(Grid)({
    backgroundColor: "black",
    marginBottom: 21,
  });

  const LogoWrapper = styled(Grid)({
    padding: 15,
    cursor: "pointer",
  });

  const Img = styled("img")({
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const LogoTypo = styled(Typography)({
    textAlign: "center",
    color: "#2db34a",
    fontSize: 12,
    fontFamily: "Roboto, Verdana, sans-serif",
    letterSpacing: 1.3,
    fontWeight: "700",
  });

  const navigate = useNavigate();

  return (
    <HeaderWrapper container>
      <LogoWrapper item onClick={() => navigate("/")}>
        <Img alt="EVstreet logo" src={evLogo} />
        <LogoTypo>Find the right car</LogoTypo>
      </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
