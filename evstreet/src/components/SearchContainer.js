import "../assets/styles/SearchContainer.css";
import BodyStyleFilter from "./filters/BodyStyleFilter";
import MaxPriceFilter from "./filters/MaxPriceFilter";

function SearchContainer({ handleCheckboxFilterSelection, setSelectedPrice }) {

  return (
    <form id="searchWrapper">
      <MaxPriceFilter setSelectedPrice={setSelectedPrice} />
      <BodyStyleFilter
        handleCheckboxFilterSelection={handleCheckboxFilterSelection}
      />
    </form>
  );
}

export default SearchContainer;
