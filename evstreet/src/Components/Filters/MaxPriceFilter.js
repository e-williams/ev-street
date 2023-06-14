import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function MaxPriceFilter({ selectedPrice, setSelectedPrice }) {

  const handleChange = (event) => (
    setSelectedPrice(event.target.value)
      // event parameter passed to setSelectedPrice here rather than in
      // findVehicleIdsMatchingSelectboxMaxPrice to avoid event being undefined
      // due to passing of the function without it when it is stored by useMemo.
      // onChange event sets selectedPrice state to Event target value.
  );

  return (
    <FormControl size="small" sx={{ minWidth: 140, mt: 2, mb: 1.5 }}>
      <InputLabel id="basePriceLabel" sx={{ fontSize: 14, color: "black" }}>
        Max Base Price
      </InputLabel>
      <Select
        label="Max Base price"
        labelId="basePriceLabel"
        value={selectedPrice}
        onChange={handleChange}
        sx={{ color: "#2db34a" }}
      >
        <MenuItem value="unlimited">Unlimited</MenuItem>
        <MenuItem value={100000}>$100,000</MenuItem>
        <MenuItem value={70000}>$70,000</MenuItem>
        <MenuItem value={40000}>$40,000</MenuItem>
      </Select>
    </FormControl>
  );
}

export default MaxPriceFilter;