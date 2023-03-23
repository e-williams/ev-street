import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button, Typography } from "@mui/material";

function VehiclePageSelection({ isOverview, setIsOverview }) {
  const handleOverviewSelection = () => setIsOverview(true);

  const handleSpecsSelection = () => setIsOverview(false);

  const overviewHeaderStyling = isOverview ? "underline" : "none";

  const specsHeaderStyling = isOverview ? "none" : "underline";

  const ContentSelection = styled(Grid)({
    justifyContent: "center",
  });

  const StyledTypography = styled(Typography)({
    cursor: "pointer",
    fontSize: 19,
    color: "#2db34a",
    "&:hover": {
      textDecoration: "underline",
      color: "#2db34a",
      backgroundColor: "transparent",
    },
  });

  const StyledButton = styled(Button)({
    fontSize: 19,
    color: "#2db34a",
    "&:hover": {
      textDecoration: "underline",
      color: "#2db34a",
      backgroundColor: "transparent",
    },
  });

  return (
    <ContentSelection container columnSpacing={7}>
      <Grid item>
        <StyledTypography onClick={handleOverviewSelection}>
          Overview
        </StyledTypography>
      </Grid>
      <Grid item>
        <StyledButton
          variant="text"
          size="large"
          onClick={handleSpecsSelection}
          sx={{ textDecoration: specsHeaderStyling }}
        >
          Specifications
        </StyledButton>
      </Grid>
    </ContentSelection>
  );
}

export default VehiclePageSelection;
