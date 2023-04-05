import React, { useState } from "react";
import Overview from "./Overview";
import Specifications from "./Specifications";
import { styled } from "@mui/material/styles";
import { Box, Tabs, Tab } from "@mui/material";

function VehicleDescription(vehicle) {

  // Define state for Tab selection
  const [value, setValue] = useState(0);

  // Handle Tab selection
  const handleSelection = (event, newValue) => {
    setValue(newValue);
  };

  const VehicleDescriptionWrapper = styled(Box)({
  marginTop: 20,
  backgroundColor: "#f9f9f9",
  });

  const StyledTab = styled(Tab)({
  fontSize: 17,
  color: "#505050",
  "&.Mui-selected": { // MUI Tabs API - CSS
    color: "#2e7d32",
  },
  "&:hover": {
    color: "#2e7d32",
  },
  });

  return (
      <VehicleDescriptionWrapper>
        <Tabs
          value={value}
          onChange={handleSelection}
          centered
          TabIndicatorProps={{ style: { backgroundColor: "#2e7d32" } }}
        >
          <StyledTab label="Overview" />
          <StyledTab label="Specifications" />
        </Tabs>
        {!value ?
          <Overview vehicle={vehicle} /> : <Specifications vehicle={vehicle} />}
      </VehicleDescriptionWrapper>
  );
}

export default VehicleDescription;