import React from "react";
import MaxPriceFilter from "../Filters/MaxPriceFilter";
import BodyStyleFilter from "../Filters/BodyStyleFilter";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const FilterTitle = styled(Typography)({
  textAlign: "center",
  color: "#7e7e7e",
});

function SearchContainer({
  setVehicleCheckboxFilters,
  vehicleCheckboxFilters,
  selectedPrice,
  setSelectedPrice,
}) {

  return (
    <Box>
      <FilterTitle variant="h6">FILTERS</FilterTitle>
      <MaxPriceFilter
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <BodyStyleFilter
        vehicleCheckboxFilters={vehicleCheckboxFilters}
        setVehicleCheckboxFilters={setVehicleCheckboxFilters}
      />
    </Box>
  );
}

export default SearchContainer;
