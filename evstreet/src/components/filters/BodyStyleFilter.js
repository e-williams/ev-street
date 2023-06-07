import { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, FormGroup } from "@mui/material";
import CustomCheckbox from "./Checkbox";

const FilterHeading = styled(Typography)({
  fontSize: 16,
  marginTop: 8,
  color: "black",
});

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
    // Update vehicleCheckboxFilters to receive an array with all the
    // Checkbox ids that were selected.
    setVehicleCheckboxFilters(checkedFilters);
  }, [setVehicleCheckboxFilters, checkedFilters]);

  const handleChange = useCallback(
    (event) => {

      if (event.target.checked) {
        // if checkbox checked, filter name added to checkedFilters array
        setCheckedFilters([...checkedFilters, event.target.id]);
        // ['4-door sedan', ...]
      } else {
        setCheckedFilters(
          checkedFilters.filter((check) => check !== event.target.id)
        );
        // Filters the checkedFilters array according to condition that each
        // element in the array is not equal to the filter name.
      }
    },
    [checkedFilters]
  );

  const hasBeenChecked = useCallback(
    (id) => checkedFilters.includes(id),
    [checkedFilters]
  );
  // Main purpose of this function is to keep the checked state of every
  // checkbox element in sync with all the currently selected filters.
  // Function is passed down to Checkbox.js as prop.
  // useCalback returns the stored function upon subsequent renders or the new
  // function if the dependency has changed.
  // includes() returns a boolean value - true if vehicleCheckboxFilters
  // includes the body_style name.

  // First, onChange triggers addition of filter to checkedFilters array.
  // When checkedFilters changes, useEffect updates vehicleCheckboxFilters.
  // Also when checkedFilters changes, hasBeenChecked() is updated to check if
  // checkedFilters array includes the filter value of each checkbox, and is
  // run upon re-render, which happens with a change in state.

  return (
    <Box>
      <FilterHeading>Body Style</FilterHeading>
      <Grid container sx={{ color: "#7e7e7e" }}>
        <Grid item>
          <FormGroup sx={{ ml: .6 }}>
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
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="5-door crossover"
              onChange={handleChange}
            />
            <CustomCheckbox
              hasBeenChecked={hasBeenChecked}
              id="truck"
              onChange={handleChange}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BodyStyleFilter;