import React, {useState} from 'react';
import '../assets/styles/ResultsContainer.css';
import vehicleData from '../vehicleData.json';
import ResultsList from './ResultsList';

function ResultsContainer() {
  const [vehicleSpecs, setVehicleSpecs] = useState(vehicleData);

  return (
    <div id='resultsWrapper'>
      <h2 id='heading'>SEARCH RESULTS WILL GO HERE</h2>
      <p>Below is some selected output to simply show JSON data & props implementation:</p>
      <ResultsList vehicleSpecs={vehicleSpecs} />
      { /* 1st vehicleSpecs = property, 2nd vehicleSpecs = varible defined by const */  }
    </div>
  )
}

export default ResultsContainer