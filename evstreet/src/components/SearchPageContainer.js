import React, { useState, useMemo } from "react";
import "../assets/styles/SearchPageContainer.css";
import vehicleData from "../vehicleData.json";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Container } from "@mui/material";

function SearchPageContainer() {
  const [vehicleCheckboxFilters, setVehicleCheckboxFilters] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");

  console.log({ vehicleCheckboxFilters });

  const [checked, setChecked] = useState(false);

  const [checkboxEvent, setCheckboxEvent] = useState("");
  // [state value variable, function to change state]

  const typeCheckboxEvent = typeof checkboxEvent.checked;
  console.log({ typeCheckboxEvent });
  console.log("checkbox event checked value is::", checkboxEvent.checked);
  console.log("checkbox event is::", checkboxEvent);
  console.log("checkbox event id is::", checkboxEvent.id);
  console.log("selected price is::", selectedPrice);

  const findVehicleIdsMatchingCheckboxFilters = useMemo(
    () => {
      console.log({ vehicleData });
      console.log(
        "The checkbox filters have changed::: ",
        vehicleCheckboxFilters
      );
      // Function that finds all vehicle IDs that match the selected filters.
      // Array of selected filters is initially empty until user input. Then,
      // vehicleCheckboxFilters is updated and this function is re-invoked, due
      // to the change in the dependency array.
      // useMemo produces a memoized CONSTANT for [vehicleIdsMatchingFlilters].
      // CONSTANT is recalculated only if the value of vehicleFilters changes.

      // Need to match data values in vehicleData to elements in vehicleFilters.
      // Parse vehicleData: convert objects within container array to arrays of
      // data values so can iterate over them and match values with filters.

      const vehicleDataValues = vehicleData.map((objectData) =>
        Object.values(objectData)
      );
      console.log("vehicleDataValues after parsing::", vehicleDataValues);
      // Produces an array of vehicle data arrays.
      // [[0, "TESLA", ...], [1, "Kia", ...]]

      // Get only vehicle IDs matching filters so can use IDs to match original
      // vehicle object data to pass to ResultsContainer for output.

      const getVehicleIdsForCheckbox = () => {
        const vehicleIdsMatchingFilters = [];

        vehicleDataValues.forEach((vehicle) => {
          vehicleCheckboxFilters.forEach((filter) => {
            if (vehicle.includes(filter)) {
              vehicleIdsMatchingFilters.push(vehicle[0]);
              // vehicle[0] selects "id" value
            }
          });
        });
        console.log(
          "VehicleIdsMatchingCheckboxFilters are::",
          vehicleIdsMatchingFilters
        );

        return vehicleIdsMatchingFilters; // [0, 2]
      };

      return getVehicleIdsForCheckbox(); // [0, 2]
      // () to return function returned value.
    },
    [vehicleCheckboxFilters] // dependency array
  );

  // STRATEGY FOR FILTER REFACTORING
  // Create array of checkbox filters - already done
  // Get selectbox max price - already done

  // As already done, output all vehicles from vehicleData if checkbox filter
  // array is 0 and if (selected price is 0 or selected price is 'unlimited').

  // Create array of vehicle IDs matching selected price - arleady done.
  // Output those vehicles if checkbox array is empty and if selected price
  // doesn't equal 0 or 'unlimited'.

  // Create array of vehicle IDs matching checkbox filters - already done.
  // Output those vehicles if selected price equals 0 or 'unlimited' and if
  // array of IDs matching checkbox filters > 0.

  // Create an array of checkbox filters vehicle IDs matching selected price.
  // Create an array of max price vehicle IDs matching checkbox filters.
  // Combine the two arrays eliminiating duplicate IDs (set).
  // Output vehicle data for combined array in else statement to first output
  // step above - if checkbox array is > 0 and selected price doesn't equal
  // 0 or 'unlimited'.

  // Original Plan (not going to work):
  // Create array of vehicle IDs matching selected price that only includes
  // vehicles with a body_style that equals any of the checkbox filter array
  // elements.
  // Output those vehicles if checkbox filter array > 0 and if
  // selected price does not equal 0 or 'unlimited' (else statement).

  // ??? What about situation where selected max price is $40,000 and there is a
  // matching 3-door sedan for $30,000 and there is a checked checkbox filter
  // vehicle 4-door sedan for $35,000 so the checkbox vehicle would NOT be
  // included in output!

  /*
  const handleCheckboxFilterSelection = useCallback(
    (e) => {
      // Function that creates an array of all selected filters and as output,
      // changes the state of vehicleCheckboxFilters.
      // Function is re-invoked whenever a user clicks on a filter.
      // useCallback: upon subsequent renders, if the dependencies haven't
      // changed, returns the stored FUNCTION; otherwise returns (not invokes)
      // re-rendered function.
      // e is parameter name taking on HTML Event() interface.

      // If a checkbox is checked:
      if (e.target.checked) { // if checked = true
        setVehicleCheckboxFilters([...vehicleCheckboxFilters, e.target.id]);
        // checked is <input> attribute = boolean value.
        // Event.target.id = target property of HTML Event interface - returns
        // the element's id value where the event occured.
        // VALUE of <input> attribute id is added to vehicleFilters.
        // Spread syntax ... to add element id value to new array state; not
        // an array pointing to vehicleFilters memory.
        // * console.log({vehicleCheckboxFilters}) would produce an empty array
        // here because this useCallback function is only stored until called.
      }
      // If a checkbox is unchecked:
      else if (e.target.checked === false) {
        console.log("value of checked after unchecking is::", e.target.checked);
        const filterIndex = vehicleCheckboxFilters.indexOf(e.target.id);
        console.log({ filterIndex });
        const copyVehicleCheckboxFilters = [...vehicleCheckboxFilters];
          // So array state is new and not pointing to vehicleFilters memory.
        copyVehicleCheckboxFilters.splice(filterIndex, 1);
          // Deletes 1 element at position filterIndex.
        setVehicleCheckboxFilters(copyVehicleCheckboxFilters);
          // ["4-door sedan", "5-door crossover", ...]
      }
      console.log(e.target.id);

    }, [vehicleCheckboxFilters]
  );
  */
  const findVehicleIdsMatchingSelectboxMaxPrice = useMemo(() => {
    // Function finds all the vehicle IDs that match vehicles with a price
    // that is <= filter selection of max price.

    const vehicleIdsMatchingPrice = [];

    vehicleData.forEach(({ base_price, id }) => {
      // destructured vehicleData.base_price = parameter
      if (base_price <= selectedPrice) {
        // selectedPrice is state value
        vehicleIdsMatchingPrice.push(id);
      }
    });
    // structured form:
    //   vehicleData.forEach((vehicle) => {
    //     const vehiclePrice = vehicle.base_price;
    //     if (vehiclePrice <= selectedPrice) {
    //       vehicleIdsMatchingPrice.push(vehicle.id);
    //     }
    //   });

    return vehicleIdsMatchingPrice;
  }, [selectedPrice]);

  // Merging 2 arrays
  const vehicleIdsAllFilters = () => {
    const duplicateIds = [
      ...findVehicleIdsMatchingCheckboxFilters,
      ...findVehicleIdsMatchingSelectboxMaxPrice,
    ];
    // spread syntax used to combine arrays. Combination contains possible
    // duplicate IDs of same vehicles matching checkboxes & selectboxes.

    const uniqueIds = new Set(duplicateIds); // new to create a new set
    // Set eliminates duplicate IDs. A value in a set can occur only once.

    return Array.from(uniqueIds);
    // Array.from() creates shallow copy of Array instance from an iterable.
  };

  // Function to handle display of all vehicles if no filters selected.
  const handleResultsRender = () => {
    if (
      vehicleCheckboxFilters.length === 0 &&
      (selectedPrice === "" || selectedPrice === "unlimited")
    ) {
      return vehicleData.map((vehicleSpecs) => (
        <ResultsContainer
          key={vehicleSpecs.id}
          filteredVehicleSpecs={vehicleSpecs}
        />
      ));
    } else if (vehicleIdsAllFilters().length > 0) {
      return vehicleIdsAllFilters().map((vehicleId) => (
        <ResultsContainer
          key={vehicleId}
          filteredVehicleSpecs={vehicleData.find(
            (vehicle) => vehicle.id === vehicleId
          )}
        />
      ));
      // map used to produce ResultsContainer for each iteration of
      // vehicleId over JSON object list. Each child element in a mapped
      // list needs a unique key prop.
      // filteredVehicleSpecs is property assigned to output of find(),
      // which returns the 1st element in vehicleData that meets the
      // condition, in this case the object for a vehicle containing keys
      // and values.
    } else {
      const NoResultsMessage = styled(Paper)({
        fontSize: 18,
        color: "#536d90",
        backgroundColor: "#f9f9f9",
        lineHeight: 3,
        marginTop: 26,
        padding: 14,
        borderRadius: 4,
      });

      return (
        <NoResultsMessage elevation={2}>
          NO VEHICLES MATCH THE SELECTED FILTERS.
          <br />
          PLEASE REDUCE THE NUMBER OF SELECTIONS.
        </NoResultsMessage>
      );
    }
  };

  const SearchPageWrapper = styled(Grid)({
    fontFamily: "Verdana, Tahoma, sans-serif",
    marginTop: 14,
    marginLeft: 0,
  });

  const FilterWrapper = styled(Container)({
    marginTop: 8,
    padding: 8,
    border: 1.8,
    borderStyle: "solid",
    borderColor: "#3be15f",
    borderRadius: 10,
  });

  return (
    // new code for MUI implementation
    <SearchPageWrapper container columnSpacing={3}>
      <Grid item>
        <FilterWrapper>
          <SearchContainer
            checked={checked}
            setChecked={setChecked}
            setCheckboxEvent={setCheckboxEvent}
            setVehicleCheckboxFilters={setVehicleCheckboxFilters}
            vehicleCheckboxFilters={vehicleCheckboxFilters}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </FilterWrapper>
      </Grid>
      <Grid item sx={{ mt: 1 }}>
        {handleResultsRender()}
      </Grid>
    </SearchPageWrapper>

    /*
    <div id="searchPageWrapper">
      <div id="searchPageFlexbox">
        <section id="flexItemSearch">
          <h2 className="searchPageHeadings">
            FILTERS
          </h2>
          <SearchContainer
            handleCheckboxFilterSelection={handleCheckboxFilterSelection}
            setSelectedPrice={setSelectedPrice}
          />
        </section>
        <section id="flexItemResults">
          <div id="resultsWrapper">
            {handleResultsRender()}
          </div>
        </section>
      </div>
    </div>
    */
  );
}

export default SearchPageContainer;
