import "../assets/styles/SearchContainer.css";
import BodyStyleFilter from "./filters/BodyStyleFilter";
import MaxPriceFilter from "./filters/MaxPriceFilter";

function SearchContainer({
  handleCheckboxFilterSelection,
  findVehicleIdsMatchingSelectboxMaxPrice  }) {
  return (
    <form id="searchWrapper">
      <MaxPriceFilter
        findVehicleIdsMatchingSelectboxMaxPrice=
          {findVehicleIdsMatchingSelectboxMaxPrice}
      />
      <BodyStyleFilter
        handleCheckboxFilterSelection={handleCheckboxFilterSelection}
      />
    </form>
  );
}

export default SearchContainer
