import React from "react";
import { styled } from "@mui/material/styles";
import { Checkbox, Typography, FormControlLabel } from "@mui/material";

const CustomCheckbox = ({ hasBeenChecked, id, onChange }) => {
  const labelColor = hasBeenChecked(id) ? "#2db34a" : "#7e7e7e";

  const CheckboxLabels = styled(Typography)({
    fontSize: 13,
    color: labelColor,
  });

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color="success"
          checked={hasBeenChecked(id)}
          id={id}
          onChange={onChange}
        />
      }
      label={<CheckboxLabels>{id}</CheckboxLabels>}
    />
  );
};

export default CustomCheckbox;
