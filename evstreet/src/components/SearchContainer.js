import "../assets/styles/SearchContainer.css";
import BodyStyleFilter from "./filters/BodyStyleFilter";
import MaxPriceFilter from "./filters/MaxPriceFilter";
import SelectAllFilter from "./filters/SelectAllFilter";

function SearchContainer({ handleNewFilterSelection }) {
  return (
    <form id="searchWrapper">
      <SelectAllFilter />
      <MaxPriceFilter />
      <BodyStyleFilter handleNewFilterSelection={handleNewFilterSelection} />
    </form>
  )
}

export default SearchContainer
