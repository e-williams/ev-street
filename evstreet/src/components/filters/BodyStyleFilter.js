import React, { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  FormGroup,
} from "@mui/material";

import CustomCheckbox from "../Checkbox";

function BodyStyleFilter({
  vehicleCheckboxFilters,
  setVehicleCheckboxFilters,
}) {

  const [checkedFilters, setCheckedFilters] = useState(vehicleCheckboxFilters);
    // checkedFilters and setCheckedFilters is essentially a chain to
    // vehicleCheckboxFilters and setVehicleCheckboxFilters, done so the
    // component is handling its own logic and state, in this case, the
    // checkedFilters array, and passing it to vehicleCheckboxFilters in
    // useEffect() below.

  useEffect(() => {
    // update vehicleCheckboxFilters to receive an array with all the
    // Checkbox ids that were selected.
    setVehicleCheckboxFilters(checkedFilters);
  }, [checkedFilters]);

  const handleChange = useCallback(
    (event) => {
      console.log("HANDLE CHANGE::::");
      if (event.target.checked) {
          // if checkbox checked, filter added to checkedFilters array
        setCheckedFilters([...checkedFilters, event.target.id]);
          // ['4-door seand']
      } else {
        setCheckedFilters(checkedFilters.filter((check) => check !== event.target.id));
          // filters the checkedFilters array according to condition that each
          // element in the array is not equal to the filter name.
      }
    },
    [checkedFilters]
  );

  const hasBeenChecked = useCallback((id) => checkedFilters.includes(id),
    [checkedFilters]);
  // Passed down to Checkbox.js as prop.
  // useCalback returns the stored function upon subsequent renders or the new
  // function if the dependency has changed.
  // includes() returns a boolean value - true if vehicleCheckboxFilters
  // includes the body_style name.
  // * The main purpose of this function is to keep the checked state of every
  // checkbox element in sync with all the currently selected filters.
  // First, onChange triggers addition of filter to checkedFilters array.
  // When checkedFilters changes, useEffect updates vehicleCheckboxFilters.
  // Also when checkedFilters changes, hasBeenChecked() is updated to check if
  // checkedFilters array includes the filter value of each checkbox, and is
  // run upon re-render, which happens with a change in state.

  console.log({checkedFilters});

  const FlexColumn2 = styled(Grid)({
    marginLeft: 10,
  });

  const FilterHeading = styled(Typography)({
    fontSize: 16,
    marginTop: 10,
    color: "black",
  });

  return (
    <Box>
      <FilterHeading>Body Style</FilterHeading>
      <Grid container sx={{ color: "#7e7e7e" }}>
        <Grid item>
          <FormGroup sx={{ fontSize: 2 }}>
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="mini/subcompact"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="2-door sports car"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="3-door sports car"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="2-door sedan"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="3-door sedan"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="4-door sedan"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="5-door sedan"
              onChange={handleChange}
            />
          </FormGroup>
        </Grid>
        <FlexColumn2 item>
          <FormGroup sx={{ fontSize: 2 }}>
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="wagon"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="3-door crossover"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="5-door crossover"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="3-door SUV"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="5-door SUV"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="minivan/van"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="truck"
              onChange={handleChange}
            />
          </FormGroup>
        </FlexColumn2>
      </Grid>
    </Box>
  );
}

/*
function BodyStyleFilter({ handleCheckboxFilterSelection }) {
  return (
    <div>
      <h4 className="filterHeadings">Body Style:</h4>
      <div className="filterFlexbox">
        <div className="flexColumn1">
          <li>
            <input 
              type="checkbox" 
              className="checkbox"
              id="mini/subcompact"
              onChange={handleCheckboxFilterSelection}
            />
            mini/subcompact
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="2-door sports car"
              onChange={handleCheckboxFilterSelection}
            />
            2-door sports car
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door sports car"
              onChange={handleCheckboxFilterSelection}
            />
            3-door sports car
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="2-door sedan"
              onChange={handleCheckboxFilterSelection}
            />
            2-door sedan
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door sedan"
              onChange={handleCheckboxFilterSelection}
            />
            3-door sedan
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="4-door sedan"
              onChange={handleCheckboxFilterSelection}
            />
            4-door sedan
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="5-door sedan"
              onChange={handleCheckboxFilterSelection}
            />
            5-door sedan
          </li>
        </div>
        <div>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="wagon"
              onChange={handleCheckboxFilterSelection}
            />
            wagon
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door crossover"
              onChange={handleCheckboxFilterSelection}
            />
            3-door crossover
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="5-door crossover"
              onChange={handleCheckboxFilterSelection}
            />
            5-door crossover
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="3-door SUV"
              onChange={handleCheckboxFilterSelection}
            />
            3-door SUV
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="5-door SUV"
              onChange={handleCheckboxFilterSelection}
            />
            5-door SUV
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="minivan/van"
              onChange={handleCheckboxFilterSelection}
            />
            minivan/van
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id="truck"
              onChange={handleCheckboxFilterSelection}
            />
            truck
          </li>
        </div>
      </div>
    </div>
  );
}
*/
export default BodyStyleFilter;
