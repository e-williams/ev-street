import { useState, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import vehicleData from "../../config/vehicleData.json";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./ResultsContainer";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Container } from "@mui/material";

const NoResultsMessage = styled(Paper)({
  width: 424,
  fontSize: 18,
  textAlign: "center",
  color: "#536d90",
  backgroundColor: "#f9f9f9",
  lineHeight: 3,
  padding: 10,
  borderRadius: 4,
});

const SearchPageWrapper = styled(Grid)({
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 300,
  marginLeft: 0, // required for columnSpacing on left
});

const FilterWrapper = styled(Grid)({
  marginTop: 10,
  marginRight: 22,
  paddingTop: 8,
  paddingRight: 14,
  paddingBottom: 8,
  "&.MuiGrid-item": {
    paddingLeft: 16,
  },
  border: 1.8,
  borderStyle: "solid",
  borderColor: "#3be15f",
  borderRadius: 10,
});

function SearchPageContainer() {

  const params = useParams();
    // useParams() returns an object of key/value pairs of the dynamic params
    // of current URL.

  const urlParams = useMemo(() => !!Object.values(params).length, [params]);
    // Object.values returns an array of an object's keyed propery values, so
    // if a result is selected, Object.values(params) will be an array of one
    // number, the vehicle id.
    // !! converts the number to a boolean value so if lenghth is 1, result is
    // true and if length is 0, result is false.
    // useMemo applied so that urlParams is updated when params changes.

  const [vehicleCheckboxFilters, setVehicleCheckboxFilters] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");

  const findVehicleIdsMatchingCheckboxFilters = useMemo(
    () => {
      // Finds all vehicle IDs that match the selected checkbox filters.
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

      return vehicleIdsMatchingCheckboxFilters; // [0, 2]
    },
    [vehicleCheckboxFilters]
  );

  const findVehicleIdsMatchingSelectboxMaxPrice = useMemo(() => {
    // Function finds all the vehicle IDs that match vehicles with a price
    // that is <= selection of max price.

    const vehicleIdsMatchingSelectedPrice = [];

    vehicleData.forEach(({ trim: {standard: {base_price}}, id }) => {
      // destructured vehicleData.base_price = parameter for example

      if (base_price <= selectedPrice || selectedPrice === "unlimited") {
        vehicleIdsMatchingSelectedPrice.push(id);
      }
    });
    return vehicleIdsMatchingSelectedPrice;
  }, [selectedPrice]);

  const findVehicleIdsMatchingMultipleFilterTypes = useMemo(() => {
    // Function finds all the vehicle IDs that match the conditions of all
    // selected filters if checkbox(es) AND max price are selected.

    const vehicleIdsMatchingMultipleFilterTypes = [];

    vehicleData.forEach(({ trim: {standard: {base_price}}, body_style, id }) => {
      vehicleCheckboxFilters.forEach((filter) => {
        if (
          body_style === filter &&
          (base_price <= selectedPrice || selectedPrice === "unlimited")
        ) {
          vehicleIdsMatchingMultipleFilterTypes.push(id);
        }
      });
    });

    return vehicleIdsMatchingMultipleFilterTypes;
  }, [vehicleCheckboxFilters, selectedPrice]);

  const handleResultsRender = () => {
    // IF NO FILTERS SELECTED:
    if (vehicleCheckboxFilters.length === 0 && selectedPrice === "") {
      return vehicleData.map((vehicleSpecs) => (
        <ResultsContainer
          key={vehicleSpecs.id}
          filteredVehicleSpecs={vehicleSpecs}
        />
      ));
    }
    // IF ONLY CHECKBOXES SELECTED:
    else if (
      vehicleCheckboxFilters.length > 0 &&
      selectedPrice === "" &&
      findVehicleIdsMatchingCheckboxFilters.length > 0
    ) {
      return findVehicleIdsMatchingCheckboxFilters.map((vehicleId) => (
        <ResultsContainer
          key={vehicleId}
          filteredVehicleSpecs={vehicleData.find(
            (vehicle) => vehicle.id === vehicleId
          )}
        />
      ));
    }
    // IF ONLY MAX PRICE SELECTED:
    else if (
      vehicleCheckboxFilters.length === 0 &&
      selectedPrice !== "" &&
      findVehicleIdsMatchingSelectboxMaxPrice.length > 0
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
      vehicleCheckboxFilters.length > 0 &&
      selectedPrice !== "" &&
      findVehicleIdsMatchingMultipleFilterTypes.length > 0
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
      (vehicleCheckboxFilters.length > 0 &&
        selectedPrice === "" &&
        findVehicleIdsMatchingCheckboxFilters.length === 0) ||
      (vehicleCheckboxFilters.length === 0 &&
        selectedPrice !== "" &&
        findVehicleIdsMatchingSelectboxMaxPrice.length === 0) ||
      (vehicleCheckboxFilters.length > 0 &&
        selectedPrice !== "" &&
        findVehicleIdsMatchingMultipleFilterTypes.length === 0)
    ) {
      return (
        <NoResultsMessage elevation={2}>
          NO VEHICLES MATCH THE SELECTED FILTERS.
          <br />
          PLEASE REDUCE OR CHANGE THE SELECTIONS.
        </NoResultsMessage>
      );
    }
  };

  return (
    <Container>
      <SearchPageWrapper container>
        <FilterWrapper item>
          <SearchContainer
            setVehicleCheckboxFilters={setVehicleCheckboxFilters}
            vehicleCheckboxFilters={vehicleCheckboxFilters}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </FilterWrapper>
        {!urlParams &&
          <Grid item sx={{ mt: "10px", width: 818 }}>
            {handleResultsRender()}
          </Grid>}
          {/* if urlParams is not true (has no vehicle id), render results */}
        <Grid item sx={{width: 670}}>
          <Outlet />
        </Grid>
      </SearchPageWrapper>
    </Container>
  );
}

export default SearchPageContainer;