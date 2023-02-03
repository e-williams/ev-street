import React, { useState, useMemo, useCallback } from "react";
import "../assets/styles/SearchPageContainer.css";
import vehicleData from "../vehicleData.json";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";

function SearchPageContainer() {
  const [vehicleFilters, setVehicleFilters] = useState([]);
  console.log({ vehicleData });

  // Function that finds all the vehicle IDs that match the selected filters.
  // The array of selected filters in initially empty until user input. Then,
  // vehicleFilters is updated and this function is re-invoked, due to useMemo
  // dependency array [vehicleFilters].
  const findVehicleIdsMatchingFilters = useMemo(() => {
    // useMemo produces a memoized CONSTANT value and the function receives a
    // dependency array [vehicleFilters], so the produced CONSTANT will only be
    // recalculated if the value of vehicleFilters changes.
    console.log("The filters have changed::: ", vehicleFilters);
    // Need to return an array of data values in vehicleData that includes an
    // element in vehicleFilters.

    // Parse vehicleData: convert objects within container array to arrays.
    // of data values so can iterate over them and match values with filters.
    const vehicleDataValues = vehicleData.map((objectData) =>
      Object.values(objectData)
      // Produces an array of data values from objects
    );
    console.log("vehicleDataValues after parsing::", vehicleDataValues);

    // Get only vehicle IDs matching filters so can use IDs to match original
    // vehicle object data to pass to ResultsContainer for better output.
    const getVehicleIds = () => {
      const vehicleIdsMatchingFilters = [];

      vehicleDataValues.forEach((vehicle) => {
        vehicleFilters.forEach((filter) => {
          if (vehicle.includes(filter)) {
            vehicleIdsMatchingFilters.push(vehicle[0]);
            // vehicle[0] selects "id" value
          }
        });
      });
      console.log("VehicleIdsMatchingFilters are::", vehicleIdsMatchingFilters);

      return vehicleIdsMatchingFilters;
    };

    return getVehicleIds();
   }, [vehicleFilters]
  );

  // Function that creates an array of all selected filters and changes the
  // state of vehicleFilters.
  // Function is re-invoked whenever a user clicks on a filter.
  const handleNewFilterSelection = useCallback((e) => {
    // useCallback: upon subsequent renders, if the dependencies haven't
    // changed, returns the stored FUNCTION; otherwise returns (not invokes)
    // re-rendered function.
    // e is parameter name taking on HTML Event() interface.
    // If a checkbox is checked:
    if (e.target.checked) { // if checked = true
      setVehicleFilters([...vehicleFilters, e.target.id]);
      // checked is <input> attribute = boolean value.
      // Event.target = target property of HTML Event interface - returns
      // the element where the event occured.
      // VALUE of <input> attribute id is added to vehicleFilters.
      // Spread syntax ... to add element id value to new array state; not
      // an array pointing to vehicleFilters memory.
    } else {
      console.log("value of checked after unchecking is::", e.target.checked);
      const filterIndex = vehicleFilters.indexOf(e.target.id);
      console.log({filterIndex});

      const copyVehicleFilters = [...vehicleFilters];
      // Spread syntax so create new array; not one pointing to memory  of
      // vehicleFilters. Do so state update works properly, after previously
      // being updated to value of vehicleFilters.

      copyVehicleFilters.splice(filterIndex, 1);
      // Deletes 1 element at position filterIndex.

      setVehicleFilters(copyVehicleFilters);
    }
   }, [vehicleFilters]
  ); // [] is defined with useCallback for output.

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
              Below is some selected sample output:
            </p>

            {findVehicleIdsMatchingFilters.map((vehicleId) => (
              <ResultsContainer
                key={vehicleId}
                filteredVehicleSpecs={vehicleData.find(
                  (vehicle) => vehicle.id === vehicleId
                )}
              />
            ))}
            {/* map used to produce ResultsContainer for each iteration of
                vehicleId over JSON object list.
                Each child element in a mapped list needs a unique key prop.
                filteredVehicleSpecs is property assigned to output of find()method, which returns the 1st element in vehicleData that meets the condition. */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPageContainer;
