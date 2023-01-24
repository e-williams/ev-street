import '../assets/styles/SearchContainer.css';
import BodyStyleFilter from './filters/BodyStyleFilter';
import MaxPriceFilter from './filters/MaxPriceFilter';
import SelectAllFilter from './filters/SelectAllFilter';


function SearchContainer({handle4DoorSedan, handle5DoorSedan}) {
  return (
    <form id='searchWrapper'>
      <SelectAllFilter />
      <MaxPriceFilter />
      <BodyStyleFilter handle4DoorSedan={handle4DoorSedan} handle5DoorSedan={handle5DoorSedan} />
    </form>
  )
}

export default SearchContainer