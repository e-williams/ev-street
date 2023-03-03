import React from "react";
import "../assets/styles/SearchContainer.css";
import MaxPriceFilter from "./filters/MaxPriceFilter";
import BodyStyleFilter from "./filters/BodyStyleFilter";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

function SearchContainer({
  setVehicleCheckboxFilters,
  vehicleCheckboxFilters,
  selectedPrice,
  setSelectedPrice,
}) {
  const FilterTitle = styled(Typography)({
    textAlign: "center",
    color: "#7e7e7e",
  });

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
