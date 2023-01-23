import React, {useState} from 'react';
import '../assets/styles/SearchPageContainer.css';
import vehicleData from '../vehicleData.json';
import SearchContainer from './SearchContainer';
import ResultsContainer from './ResultsContainer';

function SearchPageContainer() {
  const [vehicleSpecsData, setVehicleSpecs] = useState(vehicleData);

  /*
  handleToggle = (id) => {
    setVehicleSpecs (
      vehicleSpecsData.map(vehicleSpecs => {
        if (vehicleSpecs.id === id) {

        }
      })
    )
  }
  */
  
  return (
    <div id='searchPageWrapper'>
      <h3 className='searchPageHeadings'>Select your preferred electric vehicle specifications in the FILTERS column below:</h3>
      <div id='searchPageFlexbox'>
        <section id='flexItemSearch'>
          <h2 className='searchPageHeadings'>FILTERS</h2>
          <SearchContainer vehicleSpecsData={vehicleSpecsData} />
        </section>
        <section id='flexItemResults'>
          <div id='resultsWrapper'>
            <h2 id='resultsHeading'>SEARCH RESULTS WILL GO HERE</h2>
            <p>Below is some selected output simply to show JSON data & logic implementation:</p>
            
            { /* Output ResultsContainer for each array item by mapping */ }
            {vehicleSpecsData.map(vehicleSpecs => (
              <ResultsContainer key={vehicleSpecs.id} vehicleSpecs={vehicleSpecs} />
            ))}
            { /* map used to iterate ResultsContainer over JSON object list
                 vehicleSpecsData = variable defined by const,
                 vehicleSpecs = map iterator (parameter)
                 3rd vehicleSpecs = property assigned to iterator */ }

          </div>
        </section>
      </div>
    </div>
  )
}

export default SearchPageContainer