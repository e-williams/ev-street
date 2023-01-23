import '../assets/styles/SearchContainer.css';
import BodyStyleFilter from './filters/BodyStyleFilter';
import MaxPriceFilter from './filters/MaxPriceFilter';
import SelectAllFilter from './filters/SelectAllFilter';


function SearchContainer({vehicleSpecsData}) {
  return (
    <form id='searchWrapper'>
      <SelectAllFilter />
      <MaxPriceFilter />
      <BodyStyleFilter vehicleSpecsData={vehicleSpecsData} />
    </form>
  )
}

export default SearchContainer