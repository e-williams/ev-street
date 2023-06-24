import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from "@mui/material/styles";

const StyledNav = styled(ArrowBackIcon)({
  color: "#7e7e7e",
  cursor: "pointer",
  "&:hover": {
    color: "#2db34a",
  },
});

const BackArrowIcon = () => (
  <StyledNav>
    <ArrowBackIcon />
  </StyledNav>
);

export default BackArrowIcon;