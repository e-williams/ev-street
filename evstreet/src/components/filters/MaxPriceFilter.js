import React from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function MaxPriceFilter({ selectedPrice, setSelectedPrice }) {

  const handleChange = (event) => (
    setSelectedPrice(event.target.value)
          // event parameter passed to setSelectedPrice here rather than in
          // findVehicleIdsMatchingSelectboxMaxPrice to avoid event being
          // undefined due to passing of the function without it when it is
          // stored as part of useMemo.
          // onChange event sets selectedPrice state to Event target value.
  );

  return (
    <FormControl size='small' sx={{ minWidth: 160, mt: 2.2, mb: 1.5 }}>
      <InputLabel id='basePriceLabel' sx={{ fontSize: 16, color: 'black' }}>
        Max Base Price
      </InputLabel>
      <Select
        label='Max Base price'
        labelId='basePriceLabel'
        value={selectedPrice}
        onChange={handleChange}
        sx={{ color: '#2db34a' }}
      >
        <MenuItem value='unlimited'>unlimited</MenuItem>
        <MenuItem value={200000}>$200,000</MenuItem>
        <MenuItem value={100000}>$100,000</MenuItem>
        <MenuItem value={70000}>$70,000</MenuItem>
        <MenuItem value={40000}>$40,000</MenuItem>
      </Select>
    </FormControl>
  );
}

/*
function MaxPriceFilter({ setSelectedPrice }) {
  return (
    <div className="selectbox">
      <label htmlFor="basePriceSelect" id="basePriceLabel">
        Max Base Price:
      </label>
      <select
        id="basePriceSelect"
        defaultValue="unlimited"
        onChange={(e) => setSelectedPrice(e.target.value)}
          // passes argument e as parameter of setSelectedPrice
          // Done here rather than in findVehicleIdsMatchingSelectboxMaxPrice
          // to avoid e being undefined due to passing of the function without
          // it when it is stored as part of useMemo.
          // onChange event sets selectedPrice state to Event target value.
      >
        <option value="40000" id="0">
          $40,000
        </option>
        <option value="70000" id="1">
          $70,000
        </option>
        <option value="100000" id="2">
          $100,000
        </option>
        <option value="200000" id="3">
          $200,000
        </option>
        <option value="unlimited" id="4">
          unlimited
        </option>
      </select>
    </div>
  );
}
*/
export default MaxPriceFilter;
