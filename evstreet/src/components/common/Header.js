import evLogo from "../../assets/images/evLogoSignXXXSm_optzil.png";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled(Grid)({
  backgroundColor: "black",
  marginBottom: 10,
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
  letterSpacing: 1.3,
  fontWeight: "700",
});

function Header() {

  const navigate = useNavigate();

  return (
    <HeaderWrapper container>
      <LogoWrapper item onClick={() => navigate("/")}>
        <Img alt="EVstreet logo" src={evLogo} />
        <LogoTypo>Find your ride</LogoTypo>
      </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;