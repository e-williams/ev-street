import React, { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Checkbox,
  Box,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import CustomCheckbox from "../Checkbox";

function BodyStyleFilter({
  vehicleCheckboxFilters,
  setVehicleCheckboxFilters,
}) {
  const [checked, setChecked] = useState(vehicleCheckboxFilters);

  const [isChecked, setIsChecked] = useState(false);
  const labelColor = isChecked ? "#2db34a" : "#7e7e7e";

  useEffect(() => {
    // update handleCheckboxFilterSelection to receive an array with all the
    // Checkboxes ids that were selected.
    setVehicleCheckboxFilters(checked);
  }, [checked, setVehicleCheckboxFilters]);

  const handleChange = useCallback(
    (event) => {
      console.log("HANDLE CHANGE::::");
      if (event.target.checked) {
        setChecked([...checked, event.target.id]);
      } else {
        setChecked(checked.filter((check) => check !== event.target.id));
      }

      setIsChecked(event.target.checked);
    },
    [checked]
  );

  const FlexColumn2 = styled(Grid)({
    marginLeft: 10,
  });

  const FilterHeading = styled(Typography)({
    fontSize: 16,
    marginTop: 10,
    color: "black",
  });

  const CheckboxLabels = styled(Typography)({
    fontSize: 13,
    color: labelColor,
  });

  const hasBeenChecked = useCallback((id) => checked.includes(id), [checked]);

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
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="2-door sedan"
                  checked={hasBeenChecked("2-door sedan")}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>2-door sedan</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="3-door sedan"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>3-door sedan</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="4-door sedan"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>4-door sedan</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="5-door sedan"
                  checked={hasBeenChecked("5-door sedan")}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>5-door sedan</CheckboxLabels>}
            />
          </FormGroup>
        </Grid>
        <FlexColumn2 item>
          <FormGroup sx={{ fontSize: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="wagon"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>wagon</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="3-door crossover"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>3-door crossover</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="5-door crossover"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>5-door crossover</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="3-door SUV"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>3-door SUV</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="5-door SUV"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>5-door SUV</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="minivan/van"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>minivan/van</CheckboxLabels>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  id="truck"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={<CheckboxLabels>truck</CheckboxLabels>}
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
