import React, { useCallback, useMemo, useState } from "react";
import "../assets/styles/SearchPageContainer.css";
import vehicleData from "../vehicleData.json";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";

function SearchPageContainer() {
  const [vehicleSpecsData, setVehicleSpecs] = useState(vehicleData);
  const [vehicleFilters, setVehicleFilter] = useState([]);
  //['3-door sedan', 'truck', '2-door sedan']

  // vehicleSpecsData.filter((vehicle) => { vehicle matches any of the vehicle filters })

  // Function responsible for finding all the vehicles that match the filters
  const findVehiclesMatchingFilters = useMemo(() => {
    console.log("The filters have changed:::: ", vehicleFilters);
    return [];
  }, [vehicleFilters]);

  const handleNewFilterSelection = useCallback((filter) => {
    console.log(
      `The user has checked: ${filter.target.checked}, the checkbox ${filter.target.id}`
    );

    // If a checkbox is checked
    if (filter.target.checked) {
      setVehicleFilter([...vehicleFilters, filter.target.id]);
    }
  }, []);

  // output array of data for each filter condition
  // Get all the cars that have 4 doors
  const handle4DoorSedan = () =>
    vehicleSpecsData.filter(
      (vehicleSpec) => vehicleSpec.body_style == "4-door sedan"
    );

  // Get all the cars that have 5 doors
  const handle5DoorSedan = () =>
    vehicleSpecsData.filter(
      (vehicleSpec) => vehicleSpec.body_style == "5-door sedan"
    );

  // Find a different way to get all the cars.
  //const totalFiltersData = handle4DoorSedan().concat(handle5DoorSedan());

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
            vehicleSpecsData={vehicleSpecsData}
            handleNewFilterSelection={handleNewFilterSelection}
          />
        </section>
        <section id="flexItemResults">
          <div id="resultsWrapper">
            <h2 id="resultsHeading">SEARCH RESULTS WILL GO HERE</h2>
            <p>
              Below is some selected output simply to show JSON data & logic
              implementation:
            </p>

            {findVehiclesMatchingFilters.map((vehicleSpecs) => (
              <ResultsContainer
                key={vehicleSpecs.id}
                vehicleSpecs={vehicleSpecs}
              />
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
  );
}

export default SearchPageContainer;
