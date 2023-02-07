import React, { useState, useMemo, useCallback } from "react";
import "../assets/styles/SearchPageContainer.css";
import vehicleData from "../vehicleData.json";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";

function SearchPageContainer() {
  const [vehicleCheckboxFilters, setVehicleCheckboxFilters] = useState([]);
  console.log({ vehicleData }); // [{...}, {...}]

  const findVehicleIdsMatchingCheckboxFilters = useMemo(() => {
    console.log("The filters have changed::: ", vehicleCheckboxFilters);
    // Function that finds all the vehicle IDs that match the selected filters.
    // The array of selected filters is initially empty until user input. Then,
    // vehicleFilters is updated and this function is re-invoked, due to useMemo
    // dependency array [vehicleFilters].
    // useMemo produces a memoized CONSTANT value for
    // [vehicleIdsMatchingFlilters] and the function receives a dependency array
    // [vehicleFilters], so the produced CONSTANT will only be recalculated if
    // the value of vehicleFilters changes.
    // Need to return an array of data values in vehicleData that includes the
    // elements in vehicleFilters.

    // Parse vehicleData: convert objects within container array to arrays of
    // data values so can iterate over them and match values with filters.

    const vehicleDataValues = vehicleData.map((objectData) =>
      Object.values(objectData)
    );
    console.log("vehicleDataValues for checkbox after parsing::",
      vehicleDataValues);
      // Produces an array containing arrays of data values (from the objects)
      // for each vehicle. [[0, "TESLA", ...], [1, "Kia", ...]]

      // Get only vehicle IDs matching filters so can use IDs to match original
      // vehicle object data to pass to ResultsContainer for better output.

    const getVehicleIdsForCheckbox = () => {
      const vehicleIdsMatchingCheckboxFilters = [];

      vehicleDataValues.forEach((vehicle) => {
        vehicleCheckboxFilters.forEach((filter) => {
          if (vehicle.includes(filter)) {
            vehicleIdsMatchingCheckboxFilters.push(vehicle[0]);
            // vehicle[0] selects "id" value
          }
        });
      });
      console.log("VehicleIdsMatchingCheckboxFilters are::", vehicleIdsMatchingCheckboxFilters);

      return vehicleIdsMatchingCheckboxFilters; // [0, 2]
    }

    return getVehicleIdsForCheckbox(); // [0, 2]
      //us () for returned function value rather than function istelf
  }, [vehicleCheckboxFilters] ); // dependency array
  
  
  const handleCheckboxFilterSelection = useCallback((e) => {
    // Function that creates an array of all selected filters and as output,
    // changes the state of vehicleFilters.
    // Function is re-invoked whenever a user clicks on a filter.
    // useCallback: upon subsequent renders, if the dependencies haven't
    // changed, returns the stored FUNCTION; otherwise returns (not invokes)
    // re-rendered function.
    // e is parameter name taking on HTML Event() interface.

    // If a checkbox is checked:

    if (e.target.checked) { // if checked === true
      setVehicleCheckboxFilters([...vehicleCheckboxFilters, e.target.id]);
      // checked is <input> attribute = boolean value.
      // Event.target = target property of HTML Event interface - returns
      // the element where the event occured.
      // VALUE of <input> attribute id is added to vehicleFilters.
      // Spread syntax ... to add element id value to new array state; not
      // an array pointing to vehicleFilters memory.
    }
    // If a checkbox is unchecked:

    else if (e.target.checked === false) {
      console.log("value of checked after unchecking is::", e.target.checked);
      const filterIndex = vehicleCheckboxFilters.indexOf(e.target.id);
      console.log({filterIndex});
      const copyVehicleCheckboxFilters = [...vehicleCheckboxFilters];
        // So array state is new and not pointing to vehicleFilters memory.
      copyVehicleCheckboxFilters.splice(filterIndex, 1);
        // Deletes 1 element at position filterIndex.
      setVehicleCheckboxFilters(copyVehicleCheckboxFilters);
        // ["Model 3", "Kia", ...]
    }

  }, [vehicleCheckboxFilters] ); // dependency array


  const findVehicleIdsMatchingSelectboxMaxPrice = useCallback((e) => {
    // Function finds all the vehicle IDs that match vehicles with a price
    // that is <= to the filter selection price.
    // Parse vehicleData to convert objects to arrays of data values.
    // Create array of numeric selectbox filter values <= selected value.
    // Get IDs of vehicles with prices <= any filter value in selectbox filter
    // array (will need to convert strings to numbers).
    
    // Parse vehicleData: convert objects within container array to arrays of
    // data values so can iterate over them and match values with filters.

    const vehicleDataValues = vehicleData.map((objectData) =>
      Object.values(objectData)
    );
    console.log("vehicleDataValues for selectbox after parsing::",
      vehicleDataValues);
      // Produces an array containing arrays of data values (from the objects)
      // for each vehicle. [[0, "TESLA", ...], [1, "Kia", ...]]

    const getSelectboxFilter = () => {
      // Get string value of selected Max Price filter and convert to integer.
      const maxPriceSelection = e.target.value;
      // Convert string to integer:
      const selectboxMaxPriceSelection = parseInt(maxPriceSelection);
      console.log({selectboxMaxPriceSelection});
      return selectboxMaxPriceSelection;
    }

    const getVehicleIdsMatchingSelectboxMaxPrice = () => {
      // Create array of only vehicle data price values.
      // Create array of vehicle prices <= Max Price selection and then
      // find IDs of vehicles with a matching price.

      // Create array of only vehicle price values:
      const vehiclePriceValues = [];
      vehicleDataValues.forEach((vehicle) => {
        vehicle.forEach((dataValueElement) => {
          if (dataValueElement[0] === '$') {
            const dataValueElementMinusDollarSign =
              dataValueElement.substring(1);
            vehiclePriceValues.push(dataValueElementMinusDollarSign);
          }
        });
      });
      console.log({vehiclePriceValues});
      
      // Create array of vehicle prices <= Max Price selection:
      const vehiclePricesMatchingSelectboxMaxPrice = [];
      const selectboxMaxPriceSelection = getSelectboxFilter();
      // vehiclePriceIntValues [43990, 48700, 104900]
      // selectboxMaxPriceIntFilter 70000
      vehiclePriceValues.forEach((vehiclePrice) => {
        if (parseInt(vehiclePrice) <= selectboxMaxPriceSelection) {
          vehiclePricesMatchingSelectboxMaxPrice.push(vehiclePrice);
        }
      })
      console.log({vehiclePricesMatchingSelectboxMaxPrice});
      
      // Create array of IDs for vehicles with prices <= values in
      // selectboxMaxPriceSelection.
      // vehicleDataValues [[0, "TESLA", "$43990", ...], [1, "Kia", ...]]
      const vehicleIdsMatchingSelectboxMaxPrice = [];
      vehicleDataValues.forEach((vehicle) => {
        if (vehiclePricesMatchingSelectboxMaxPrice.includes(
          vehicle[3].substring(1))) { // substring() removes '$'
          vehicleIdsMatchingSelectboxMaxPrice.push(vehicle[0]);
        }
      });
      console.log({vehicleIdsMatchingSelectboxMaxPrice});

      return vehicleIdsMatchingSelectboxMaxPrice;
    }

    return getVehicleIdsMatchingSelectboxMaxPrice();
  }, [] );

  const combinedVehicleIdsAllFilters = () => {
    
    const combinedVehicleIds = [];
    const vehicleIdsMatchingSelectboxMaxPrice =
      findVehicleIdsMatchingSelectboxMaxPrice();

    findVehicleIdsMatchingCheckboxFilters.forEach((id) => {
      combinedVehicleIds.push(id);
    });
    vehicleIdsMatchingSelectboxMaxPrice.forEach((id) => {
      combinedVehicleIds.push(id);
    });
    console.log({combinedVehicleIds});
    
    return combinedVehicleIds;
  }
  const vehicleIdsAllFilters = combinedVehicleIdsAllFilters();


  /*
  const handleSelectboxFilterSelection = useCallback((e) => {
    // Function handles the addition of selectbox filter selections to
    // vehicleFilters.
    /*
    console.log('selected target value::', e.target.value);
    console.log('e.target.options index of selection::',
      e.target.options.selectedIndex);

    const getSelectboxFilters = () => {
      const selectboxFiltersToAdd = [];

      // Create array of all vehicle prices that are <= selected price.

      for (let i = 0; i <= e.target.options.selectedIndex; i++) {
        selectboxFiltersToAdd.push(e.target.options[i].value);
      }
      console.log({selectboxFiltersToAdd});
      setVehicleFilters([...vehicleFilters, ...selectboxFiltersToAdd]);
    }

    return getSelectboxFilters();
    
  }, [vehicleFilters] );
  
  
  const handleSelectboxFilterRemoval = useCallback((e) => {
    // Function handles the removal of a previously selected filter, so it
    // doesn't remain in vehicleFilters when a new option is selected.
    // Function is triggered by onFocus event on first tap of selectbox.
    // event target e.target.value will return current (previous) selection.
    
    console.log('onFocus tapped target value::', e.target.value);

    const selectionIndex = vehicleFilters.indexOf(e.target.value);
    console.log({selectionIndex});
    const copyVehicleFilters = [...vehicleFilters];
    copyVehicleFilters.splice(selectionIndex, 1);
      // Deletes 1 element at position selectionIndex.
    console.log(copyVehicleFilters);
    setVehicleFilters(copyVehicleFilters);
      // ["$40,000", "$70,000", ...]

    e.target.blur();
      // Resets onFocus event if user does not click elsewhere in between
      // different selections.
  
  }, [vehicleFilters] );
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
            handleCheckboxFilterSelection={handleCheckboxFilterSelection}
            findVehicleIdsMatchingSelectboxMaxPrice=
              {findVehicleIdsMatchingSelectboxMaxPrice}
          />
        </section>
        <section id="flexItemResults">
          <div id="resultsWrapper">
            <h2 id="resultsHeading">SEARCH RESULTS WILL GO HERE</h2>
            <p>
              Below is some selected sample output:
            </p>

            {/* Output all vehicles if no filters are selected. */}

            {vehicleCheckboxFilters.length === 0 && // condition
              vehicleData.map((vehicleSpecs) => (
                <ResultsContainer
                  key={vehicleSpecs.id}
                  filteredVehicleSpecs={vehicleSpecs}
                />
              ))
            }

            {/* Output vehicles that match selected filters. */}
            
            {vehicleIdsAllFilters.map((vehicleId) => (
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
                filteredVehicleSpecs is property assigned to output of find
                method, which returns the 1st element in vehicleData that meets the condition, in this case the object for a vehicle
                containing keys and values.  */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPageContainer
