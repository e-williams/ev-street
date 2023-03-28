import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Tabs, Tab, Grid, Typography, Button } from "@mui/material";

function HeaderSelection() {

  // Handle content display for Overview and Specifications selection.
  //const handleOverviewSelection = () => setIsOverview(true);
  //const handleSpecsSelection = () => setIsOverview(false);

  const [value, setValue] = useState(0);

  // Handle Tabs
  const handleSelection = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    fontSize: 17,
  });

  //const overviewHeaderStyling = isOverview ? "underline" : "none";

  //const specsHeaderStyling = isOverview ? "none" : "underline";

  const ContentSelection = styled(Grid)({
    justifyContent: "center",
  });

  const StyledTypography = styled(Typography)({
    cursor: "pointer",
    fontSize: 18,
    color: "#2db34a",
    "&:hover": {
      textDecoration: "underline",
      color: "#2db34a",
      backgroundColor: "transparent",
    },
  });

  const StyledButton = styled(Button)({
    fontSize: 18,
    color: "#2db34a",
    "&:hover": {
      textDecoration: "underline",
      color: "#2db34a",
      backgroundColor: "transparent",
    },
  });

  return (
    <Box>
      <Tabs 
        value={value}
        onChange={handleSelection}
        centered
      >
        <StyledTab label="Overview" />
        <StyledTab label="Specifications" />
      </Tabs>
    </Box>
  );

  {/*}
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
  */}
}

export default HeaderSelection;
