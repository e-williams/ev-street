import { useState } from "react";
import PropTypes from "prop-types";
import Overview from "./Overview";
import Specifications from "./Specifications";
import { styled } from "@mui/material/styles";
import { Box, Tabs, Tab } from "@mui/material";

const StyledTab = styled(Tab)({
  fontSize: 17,
  color: "#505050",
  "&.Mui-selected": {
    // MUI Tabs API - CSS
    color: "#2e7d32",
  },
  "&:hover": {
    color: "#2e7d32",
  },
});

function VehicleDescription({ vehicle }) {

  // Define state for Tab selection
  const [value, setValue] = useState("one");

  // Handle Tab selection
  const handleSelection = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 2.5, backgroundColor: "#f9f9f9" }}>
      <Tabs 
        centered
        value={value}
        onChange={handleSelection}
        TabIndicatorProps={{ style: { backgroundColor: "#2e7d32" } }}
      >
        
        <StyledTab label="Overview" value="one" />
        <StyledTab label="Specifications" value="two" />
      </Tabs>
      {value === "one" && <Overview vehicle={vehicle} />}
      {value === "two" && <Specifications vehicle={vehicle} />}
    </Box>
  );
}

VehicleDescription.propTypes = {
  vehicle: PropTypes.object.isRequired,
};

export default VehicleDescription;