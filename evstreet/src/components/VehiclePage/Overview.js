import { Typography, Container } from "@mui/material";
import styled from "@emotion/styled";

const OverviewWrapper = styled(Container)({
  marginTop: 20,
  color: "#505050"
})

const StyledTypo = styled(Typography)({
  fontSize: 15,
  fontWeight: 300,
  marginBottom: 10,
})

function Overview({ vehicle }) {

  const { overview } = vehicle;

  return (
    <OverviewWrapper>
      <StyledTypo>{overview.paragraph1}</StyledTypo>
      <StyledTypo>{overview.paragraph2}</StyledTypo>
      <StyledTypo>{overview.paragraph3}</StyledTypo>
      {overview.paragraph4 &&
        <StyledTypo>{overview.paragraph4}</StyledTypo>}
    </OverviewWrapper>
  );
}

export default Overview;