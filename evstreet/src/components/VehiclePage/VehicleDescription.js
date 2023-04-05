import React, { useState } from "react";
import PropTypes from "prop-types";

import Overview from "./Overview";
import Specifications from "./Specifications";
import { styled } from "@mui/material/styles";
import { Box, Tabs, Tab } from "@mui/material";

function VehicleDescription({ vehicle }) {
  console.log("RELOAD:::::");
  // We want to store in a variable the weight in the performace trim
  // const weight = vehicle.vehicle.trim.performance.weight;

  // const {
  //   vehicle: {
  //     trim: {
  //       performance: { weight },
  //     },
  //   },
  // } = vehicle;

  /**
   * vehicle = {
   *    vehicle: {
   *      trim: {
   *        peformance: {
   *          weight: '1000kg'
   *        },
   *        awd: {
   *          weight: '1200kg'
   *        }
   *      }
   *    }
   * }
   */

  // const weight = vehicle.vehicle.trim.performance.weight;
  //
  // const { weight } = vehicle.vehicle.trim.performance;
  //
  // const {
  //   performance,
  //   awd
  // } = vehicle.vehicle.trim;

  // const array1 = ['1', {trim: {performance: {weight: '1000kg'}}}, '2']

  // const [1, {trim: {performance: {weight}}}] = array1
  //console.log({weight})

  // const awd = vehicle.vehicle.trim.awd
  // const performance = vehicle.vehicle.trim.performance

  //
  // const {
  //   trim: {
  //     performance: { weight },
  //   },
  // } = vehicle.vehicle;
  //
  // const {
  //   vehicle: {
  //     trim: {
  //       performance: { weight },
  //     },
  //   },
  // } = vehicle;

  // props = { vehicle: { id: 1, attributes: { wheels: 4, mileage: '300miles' } } }
  // const mileage = props.vehicle.attributes.mileage
  // const { vehicle: { attributes: { mileage } } } = props

  // 1 create a variable called vehicle.
  // 2 assing to variable vehicle => value from props ==> const vehicle = props.vehicle

  // Define state for Tab selection
  const [value, setValue] = useState("one");

  // Handle Tab selection
  const handleSelection = (event, newValue) => {
    console.log({ newValue });
    setValue(newValue);
  };

  const VehicleDescriptionWrapper = styled(Box)({});

  const StyledTab = styled(Tab)({
    fontSize: 17,
    color: "#505050",
    "&.Mui-selected": {
      // MUI Tabs API - CSS
      color: "#2e7d32",
    },
    "&:hover": {
      color: "#2e7d32",
    },
  });

  return (
    <Box>
      <Tabs value={value} onChange={handleSelection}>
        <StyledTab label="Overview" value="one" />
        <StyledTab label="Specifications" value="two" />
      </Tabs>
      {value === "one" && <Overview vehicle={vehicle} />}
      {value === "two" && <Specifications vehicle={vehicle} />}
    </Box>
  );
}

VehicleDescription.propTypes = {
  // base_price: PropTypes.number.isRequired,
  // body_style: PropTypes.string.isRequired,
  // cargo_space: PropTypes.string.isRequired,
  // convertible_option: PropTypes.string.isRequired,
  // driver_assistance: PropTypes.string.isRequired,
  // driver_assistance_packages: PropTypes.object.isRequired,
  // drivetrain: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  // luxary_vehicle: PropTypes.string.isRequired,
  // make: PropTypes.string.isRequired,
  // model: PropTypes.string.isRequired,
  // results: PropTypes.string.isRequired,
  // seating_capacity: PropTypes.string.isRequired,
  // self_parking: PropTypes.string.isRequired,
  // test_format_year: PropTypes.string.isRequired,
  // trim: PropTypes.string.isRequired,
  vehicle: PropTypes.object.isRequired,
};

export default VehicleDescription;
