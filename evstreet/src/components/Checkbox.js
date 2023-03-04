import React from "react";
import { styled } from "@mui/material/styles";
import { Checkbox, Typography, FormControlLabel } from "@mui/material";

const CustomCheckbox = ({ hasBeenChecked, id, onChange }) => {

  const labelColor = hasBeenChecked(id) ? "#2db34a" : "#7e7e7e";

  const CheckboxLabels = styled(Typography)({
    fontSize: 14,
    color: labelColor,
  });

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color="success"
          sx={{ padding: .7 }}
          checked={hasBeenChecked(id)}
            // checked prop = parameter hasBeenChecked which is defined in
            // BodyStyleFilter with argument id and passed down to here.
            // The id parameter is assigned below to passed prop from
            // BodyStyleFilter.
          id={id} // receives 
          onChange={onChange} // Receives prop onChange=handleChange from
            // BodyStyleFilter.
        />
      }
      label={<CheckboxLabels>{id}</CheckboxLabels>}
    />
  );
};

export default CustomCheckbox;
