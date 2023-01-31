import React, { useState, useCallback, useMemo } from "react";
import "../assets/styles/SearchPageContainer.css";
import vehicleData from "../vehicleData.json";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";

function SearchPageContainer() {
  const [vehicleFilters, setVehicleFilters] = useState([]);
  
  // Function that finds all the vehicles that match the filters
  const findVehiclesMatchingFilters = useMemo(() => {
    // useMemo produces a memoized constant and the function receives a
    // dependency array [vehicleFilters], so the produced memoized CONSTANT will
    // only be recalculated if the value of vehicleFilters changes.
    console.log("The filters have changed::: ", vehicleFilters);
    // Return an array of elements in vehicleData that includes an element
    // in vehicleFilters

    // Parse vehicleData: convert objects within container array to arrays
    // of data values so can iterate over them and match values with filters
    var vehicleDataValues = vehicleData.map(objectData =>
      Object.values(objectData)
    );
    console.log('vehicleDataValues after parsing::', vehicleDataValues);

    const handleVehicleFilterComparison = () => {
      const filteredData = [];
      for(let i = 0; i < vehicleDataValues.length; i++) {
        for(let j = 0; j < vehicleDataValues[i].length; j++) {
          if (vehicleFilters[j] == vehicleDataValues[i]) {
            filteredData.splice(0, 0, vehicleDataValues[i]);
          }
        }
      }
      return filteredData;
    }

    console.log('filteredData is::', filteredData);
    console.log(
      'handleVehicleFilterComparison::', handleVehicleFilterComparison()
    );
    
    return handleVehicleFilterComparison;

  }, [vehicleFilters]);

  console.log('vehicles matching filters::', findVehiclesMatchingFilters);
  
  // Function that creates an array of all checked filters
  const handleNewFilterSelection = (e) => {
    // useCallback: upon subsequent renders, if the dependencies haven't
    // changed, returns the stored FUNCTION; otherwise returns (not calls)
    // re-rendered function.
    // e is parameter name taking on HTML Event() interface
    console.log(
      `The user has checked:: ${e.target.checked}, the checkbox ${e.target.id}`
    );
    // If a checkbox is checked
    if (e.target.checked) { // if checked = true
      console.log('value of checked after checking is::', e.target.checked);
      setVehicleFilters([...vehicleFilters, e.target.id]);
      // checked is <input> attribute = boolean value
      // Event.target = target property of HTML Event interface - returns
      // the element where the event occured.
      // value of <inpute> attribute id is added to vehicleFilters
      // can use spread syntax ... to add array elements
    }
    else {
      console.log('value of checked after unchecking is::', e.target.checked);
      let filterIndex = vehicleFilters.indexOf(e.target.id);
      console.log('filter index is::', filterIndex);
      setVehicleFilters(vehicleFilters.splice(filterIndex, 1));
      console.log('vehicleFilters after unchecking::', vehicleFilters);
    }
  } // [] is defined with useCallback for output

  // OLD CODE:
  // output array of data for each filter condition
  // Get all the cars that have 4 doors
  /*
  const handle4DoorSedan = () =>
    vehicleSpecsData.filter(
      (vehicleSpec) => vehicleSpec.body_style == "4-door sedan"
    );

  // Get all the cars that have 5 doors
  const handle5DoorSedan = () =>
    vehicleSpecsData.filter(
      (vehicleSpec) => vehicleSpec.body_style == "5-door sedan"
    );
  
  const totalFiltersData = handle4DoorSedan().concat(handle5DoorSedan());
  */

  return (
    <div id="searchPageWrapper">
      <h3 className="searchPageHeadings">
        Select your preferred electric vehicle specifications in the FILTERS
        column below:
      </h3>
      <div id="searchPageFlexbox">
        <section id="flexItemSearch">
          <h2 className="searchPageHeadings">FILTERS</h2>
          <SearchContainer
            handleNewFilterSelection={handleNewFilterSelection}
          />
        </section>
        <section id="flexItemResults">
          <div id="resultsWrapper">
            <h2 id="resultsHeading">SEARCH RESULTS WILL GO HERE</h2>
            <p>
              Below is some selected output simply to show JSON data & logic
              implementation:</p>

            {findVehiclesMatchingFilters.map(filteredVehicleSpecs => (
              <ResultsContainer
                key={filteredVehicleSpecs.id}
                filteredVehicleSpecs={filteredVehicleSpecs}
              />
            ))}
            {/* map used to produce ResultsContainer for each over JSON object
                iteration of filteredVehicleSpecs over JSON object list.
                Each child element in a mapped list needs a unique key prop.
                filteredVehicleSpecs = map iterator (parameter)
                3rd filteredVehicleSpecs = property assigned to iterator */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPageContainer
