import React, { useState, useMemo } from 'react';
import vehicleData from '../vehicleData.json';
import SearchContainer from './SearchContainer';
import ResultsContainer from './ResultsContainer';
import { styled } from '@mui/material/styles';
import { Paper, Grid, Container } from '@mui/material';

function SearchPageContainer() {
  const [vehicleCheckboxFilters, setVehicleCheckboxFilters] = useState([]);
    // [state value variable, function to change state]
  const [selectedPrice, setSelectedPrice] = useState('');

  const findVehicleIdsMatchingCheckboxFilters = useMemo(
    () => {
      console.log(
        'The checkbox filters have changed::: ', vehicleCheckboxFilters
      );
      // Function that finds all vehicle IDs that match the selected checkbox
      // filters.
      // When a checkbox is checked, vehicleCheckboxFilters is updated and this
      // function is re-invoked, due to the change in the dependency array.

      // Need to match data values in vehicleData to elements in
      // vehicleCheckboxFilters.
      // Get only vehicle IDs matching filters so can use IDs to match original
      // vehicle object data to pass to ResultsContainer for output.

      const vehicleIdsMatchingCheckboxFilters = [];

      vehicleData.forEach(({ body_style, id }) => {
        vehicleCheckboxFilters.forEach((filter) => {
          if (body_style === filter) {
            vehicleIdsMatchingCheckboxFilters.push(id);
          }
        });
      });
      console.log({vehicleIdsMatchingCheckboxFilters});

      return vehicleIdsMatchingCheckboxFilters; // [0, 2]
      // () used to invoke function and get returned value, rather than
      // just referencing the variable that stores the function.
    },
    [vehicleCheckboxFilters] // dependency array
  );

  const findVehicleIdsMatchingSelectboxMaxPrice = useMemo(
    () => {
      // Function finds all the vehicle IDs that match vehicles with a price
      // that is <= selection of max price.

      console.log({selectedPrice});

      const vehicleIdsMatchingSelectedPrice = [];

      vehicleData.forEach(({ base_price, id }) => {
        // destructured vehicleData.base_price = parameter
        if ((base_price <= selectedPrice) || (selectedPrice === 'unlimited')) {
          vehicleIdsMatchingSelectedPrice.push(id);
        }
      });
      // structured form:
      //   vehicleData.forEach((vehicle) => {
      //     const vehiclePrice = vehicle.base_price;
      //     if (vehiclePrice <= selectedPrice) {
      //       vehicleIdsMatchingPrice.push(vehicle.id);
      //     }
      //   });

      console.log({vehicleIdsMatchingSelectedPrice});

      return vehicleIdsMatchingSelectedPrice;
    },
    [selectedPrice]
  );

  const findVehicleIdsMatchingMultipleFilterTypes = useMemo(
    () => {
      // Function finds all the vehicle IDs that match the conditions of all
      // selected filters if checkbox(es) AND max price are selected.

      const vehicleIdsMatchingMultipleFilterTypes = [];

      vehicleData.forEach(({ body_style, base_price, id }) => {
        vehicleCheckboxFilters.forEach((filter) => {
          if (
            (body_style === filter) &&
            (
              (base_price <= selectedPrice) ||
              (selectedPrice === 'unlimited')
            )
            ) {
              vehicleIdsMatchingMultipleFilterTypes.push(id);
          }
        });
      });
      console.log({vehicleIdsMatchingMultipleFilterTypes});

      return vehicleIdsMatchingMultipleFilterTypes;
    },
    [vehicleCheckboxFilters, selectedPrice]
  );

  // THIS IS AN ALTERNATIVE PROCESSING METHOD TO POSSIBLY IMPROVE OPTIMIZATAION
  const findVehicleIdsMatchingAllFilters = useMemo(
    () => {
      // Function adds vehicle IDs to an array for various user input conditions.
      const vehicleIdsMatchingAllFilters = [];

      // IF ONLY CHECKBOXES SELECTED:
      if ( (vehicleCheckboxFilters.length > 0) && (selectedPrice === '') ) {
        vehicleData.forEach(({ body_style, id }) => {
          vehicleCheckboxFilters.forEach((filter) => {
            if (body_style === filter) {
              vehicleIdsMatchingAllFilters.push(id);
              console.log('vehicle Ids all filters after checkbox selection',
                vehicleIdsMatchingAllFilters);
            }
          });
        });
      }
      // IF ONLY MAX PRICE SELECTED:
      else if (
        (vehicleCheckboxFilters.length === 0) && (selectedPrice !== '')
        ) {
          vehicleData.forEach(({ base_price, id }) => {
            // destructured vehicleData.base_price = parameter
            if (
              (base_price <= selectedPrice) || (selectedPrice === 'unlimited')
              ) {
              vehicleIdsMatchingAllFilters.push(id);
              console.log('vehicle Ids all filters after max price selection',
                vehicleIdsMatchingAllFilters);
            }
          });
      }
      // IF MULTIPLE FILTER TYPES SELECTED:
      else if (
        (vehicleCheckboxFilters.length > 0) && (selectedPrice !== '')
        ) {
          vehicleData.forEach(({ body_style, base_price, id }) => {
            vehicleCheckboxFilters.forEach((filter) => {
              if (
                (body_style === filter) &&
                (
                  (base_price <= selectedPrice) ||
                  (selectedPrice === 'unlimited')
                )
                ) {
                  vehicleIdsMatchingAllFilters.push(id);
                  console.log('vehicle Ids all filters after selection of multiple filter types', vehicleIdsMatchingAllFilters);
              }
            });
          });
        return vehicleIdsMatchingAllFilters;
      }
    },
    [vehicleCheckboxFilters, selectedPrice]
  );

  /* // Saving this function for now in case needed.
  // Merge all arrays of vehicle IDs from all filters for results output
  const vehicleIdsAllFiltersCombined = () => {
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
  */

  // Function to handle display of all vehicles if no filters selected.
  const handleResultsRender = () => {
    
    // IF NO FILTERS SELECTED:
    if (
      (vehicleCheckboxFilters.length === 0) &&
      (selectedPrice === '')
      ) {
        return vehicleData.map((vehicleSpecs) => (
          <ResultsContainer
            key={vehicleSpecs.id}
            filteredVehicleSpecs={vehicleSpecs}
          />
        ));
        // map used to produce ResultsContainer for each iteration of
        // vehicleId over JSON object list. Each child element in a mapped
        // list needs a unique key prop.
    }
    // IF ONLY CHECKBOXES SELECTED:
    else if (
      (vehicleCheckboxFilters.length > 0) &&
      (selectedPrice === '') &&
      (findVehicleIdsMatchingCheckboxFilters.length > 0)
      ) {
        return findVehicleIdsMatchingCheckboxFilters.map((vehicleId) => (
          <ResultsContainer
            key={vehicleId}
            filteredVehicleSpecs={vehicleData.find(
              (vehicle) => vehicle.id === vehicleId
            )}
          />
        ));
        // filteredVehicleSpecs is property assigned to output of find(),
        // which returns the 1st element in vehicleData that meets the
        // condition, in this case the object for a vehicle containing keys
        // and values.
    }
    // IF ONLY MAX PRICE SELECTED:
    else if (
      (vehicleCheckboxFilters.length === 0) &&
      (selectedPrice !== '') &&
      (findVehicleIdsMatchingSelectboxMaxPrice.length > 0)
      ) {
        return findVehicleIdsMatchingSelectboxMaxPrice.map((vehicleId) => (
          <ResultsContainer
            key={vehicleId}
            filteredVehicleSpecs={vehicleData.find(
              (vehicle) => vehicle.id === vehicleId
            )}
          />
        ));
    }
    // IF MULTIPLE FILTER TYPES SELECTED:
    else if (
      (vehicleCheckboxFilters.length > 0) &&
      (selectedPrice !== '') &&
      (findVehicleIdsMatchingMultipleFilterTypes.length > 0)
      ) {
        return findVehicleIdsMatchingMultipleFilterTypes.map((vehicleId) => (
          <ResultsContainer
            key={vehicleId}
            filteredVehicleSpecs={vehicleData.find(
              (vehicle) => vehicle.id === vehicleId
            )}
          />
        ));
    }
    // IF NO VEHICLES MATCH FILTER SELECTIONS:
    else if (
      (
        ((vehicleCheckboxFilters.length > 0) && (selectedPrice === '')) &&
        (findVehicleIdsMatchingCheckboxFilters.length === 0)
      ) ||
      (
        (vehicleCheckboxFilters.length === 0) && (selectedPrice !== '') &&
        (findVehicleIdsMatchingSelectboxMaxPrice.length === 0)
      ) ||
      (
        ((vehicleCheckboxFilters.length > 0) && (selectedPrice !== '')) &&
        (findVehicleIdsMatchingMultipleFilterTypes.length === 0)
      )
      ) {

        const NoResultsMessage = styled(Paper)({
          fontSize: 18,
          color: '#536d90',
          backgroundColor: '#f9f9f9',
          lineHeight: 3,
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
    /*
    // ALTERNATE METHOD OF RESULTS OUTPUT USING findVehicleIdsMatchingAllFilters

    // IF NO FILTERS SELECTED
    if ((vehicleCheckboxFilters.length === 0) && (selectedPrice === '')) {
        return vehicleData.map((vehicleSpecs) => (
          <ResultsContainer
            key={vehicleSpecs.id}
            filteredVehicleSpecs={vehicleSpecs}
          />
        ));
    }
    // IF ANY FILTER SELECTED
    else if (
      (
        (vehicleCheckboxFilters.length > 0) &&
        (selectedPrice === '')
      ) ||
      (
        (vehicleCheckboxFilters.length === 0) &&
        (selectedPrice !== '')
      ) ||
      (
        (vehicleCheckboxFilters.length > 0) &&
        (selectedPrice !== '')
      )
      ) {
        return findVehicleIdsMatchingAllFilters.map((vehicleId) => (
          <ResultsContainer
            key={vehicleId}
            filteredVehicleSpecs={vehicleData.find(
              (vehicle) => vehicle.id === vehicleId
            )}
          />
        ));
    }
    */
  };

  const SearchPageWrapper = styled(Grid)({
    fontFamily: 'Roboto, Verdana, sans-serif',
    fontWeight: 300,
    marginTop: 14,
    marginLeft: 0,
  });

  const FilterWrapper = styled(Container)({
    marginTop: 8,
    padding: 8,
    border: 1.8,
    borderStyle: 'solid',
    borderColor: '#3be15f',
    borderRadius: 10,
  });

  return (
    // new code for MUI implementation
    <SearchPageWrapper container columnSpacing={3}>
      <Grid item>
        <FilterWrapper>
          <SearchContainer
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
  );
}

export default SearchPageContainer;
