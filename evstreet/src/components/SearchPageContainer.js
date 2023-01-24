import React, {useState} from 'react';
import '../assets/styles/SearchPageContainer.css';
import vehicleData from '../vehicleData.json';
import SearchContainer from './SearchContainer';
import ResultsContainer from './ResultsContainer';

function SearchPageContainer() {

  const [vehicleSpecsData, setVehicleSpecs] = useState(vehicleData);

  // output array of data for each filter condition
  const handle4DoorSedan = () => (
    vehicleSpecsData.filter(vehicleSpec => (
      vehicleSpec.body_style == '4-door sedan'
    ))
  )
  const handle5DoorSedan = () => (
    vehicleSpecsData.filter(vehicleSpec => (
      vehicleSpec.body_style == '5-door sedan'
    ))
  )

  const totalFiltersData = handle4DoorSedan().concat(handle5DoorSedan())
  console.log(vehicleSpecsData)
  console.log(handle4DoorSedan())
  console.log(handle5DoorSedan())
  console.log(totalFiltersData)

  return (
    <div id='searchPageWrapper'>
      <h3 className='searchPageHeadings'>Select your preferred electric vehicle specifications in the FILTERS column below:</h3>
      <div id='searchPageFlexbox'>
        <section id='flexItemSearch'>
          <h2 className='searchPageHeadings'>FILTERS</h2>
          <SearchContainer vehicleSpecsData={vehicleSpecsData}
            handle4DoorSedan={handle4DoorSedan} handle5DoorSedan={handle5DoorSedan} />
        </section>
        <section id='flexItemResults'>
          <div id='resultsWrapper'>
            <h2 id='resultsHeading'>SEARCH RESULTS WILL GO HERE</h2>
            <p>Below is some selected output simply to show JSON data & logic implementation:</p>
            
            {totalFiltersData.map(vehicleSpecs => (
              <ResultsContainer key={vehicleSpecs.id} vehicleSpecs={vehicleSpecs} />
            ))}
            {/* map used to iterate ResultsContainer over JSON object list
                each child element in a mapped list needs a unique key prop
                vehicleSpecsData = variable defined by const,
                vehicleSpecs = map iterator (parameter)
                3rd vehicleSpecs = property assigned to iterator */}

          </div>
        </section>
      </div>
    </div>
  )
}

export default SearchPageContainer