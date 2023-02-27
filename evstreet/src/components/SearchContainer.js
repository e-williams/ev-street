import React from "react";
import "../assets/styles/SearchContainer.css";
import MaxPriceFilter from "./filters/MaxPriceFilter";
import BodyStyleFilter from "./filters/BodyStyleFilter";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

function SearchContainer({
  checked,
  setChecked,
  setCheckboxEvent,
  handleCheckboxFilterSelection,
  selectedPrice,
  setSelectedPrice}) {
  
  const FilterTitle = styled(Typography)({
    textAlign: 'center',
    color: '#7e7e7e',
  });

  return (
    <Box>
      <FilterTitle variant='h6'>
        FILTERS
      </FilterTitle>
      <MaxPriceFilter
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <BodyStyleFilter
        checked={checked}
        setChecked={setChecked}
        setCheckboxEvent={setCheckboxEvent}
        handleCheckboxFilterSelection={handleCheckboxFilterSelection}
      />
    </Box>
  );
}

export default SearchContainer;
