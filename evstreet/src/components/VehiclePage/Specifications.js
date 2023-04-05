import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const SpecsWrapper = styled(Grid)({
  padding: 20,
  color: "#505050",
});

const InlineTypo = styled(Typography)({
  display: "inline",
});

const BoldInlineTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  display: "inline",
});

const InlineTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 300,
  display: "inline",
});

const BoldInlineTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 500,
  display: "inline",
});

const IndentedGrid = styled(Grid)({
  marginLeft: 24,
});

function Specifications({ vehicle }) {
  // const { vehicle } = props;

  // {
  //   vehicle: {
  //    trim: {
  //     standard: {
  //       base_price: "$42,990",
  //     },
  //     awd: {
  //       base_price: "tbd",
  //     },
  //     performance: {
  //       base_price: "$53,990",
  //     },
  //   }},
  // };

  //const standard = vehicle.trim.standard;
  //const awd = vehicle.trim.awd;
  //const performance = vehicle.trim.performance;

  // const {
  //   trim: { standard },
  // } = vehicle;

  // const {
  //   trim: { awd },
  // } = vehicle;
  // //const awd = vehicle.trim.awd;

  // const {
  //   trim: { performance },
  // } = vehicle;
  // //const performance = vehicle.trim.performance;

  const { trim = {} } = vehicle;

  const renderVehicleTrims = () => {
    const vehicleTrims = Object.values(trim);

    return vehicleTrims.map((trimInformation, index) => {
      return (
        <Grid container direction="column" key={trimInformation.label}>
          <Grid item>
            <BoldInlineTypo>{`${trimInformation.label}:`}</BoldInlineTypo>
          </Grid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Base Price:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.base_price}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Weight:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.weight}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Drivetrain:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.drivetrain}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Motors:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.motors}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Range:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.range}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Fuel Economy:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>
              {trimInformation.fuel_economy}kWh / 100 miles
            </InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>MGPe:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.MPGe}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Acceleration (0-60):</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation["0_60"]}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Supercharging Maximum:</BoldInlineTypoSm>{" "}
            <InlineTypoSm>{trimInformation.supercharging}</InlineTypoSm>
          </IndentedGrid>
        </Grid>
      );
    });
  };

  // Find all the trims a vehicle has.
  // Render with a loop the information of those trims.

  // TODO destructure the following dot notations vehicle.driver_assistance_packages.level1.label
  return (
    <SpecsWrapper container columnSpacing={6}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item>
            <BoldInlineTypo>Make/Model:</BoldInlineTypo>{" "}
            <InlineTypo>
              {vehicle.make} {vehicle.model}
            </InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Body Style:</BoldInlineTypo>{" "}
            <InlineTypo>{vehicle.body_style}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Seating Capacity:</BoldInlineTypo>{" "}
            <InlineTypo>{vehicle.seating_capacity}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Cargo Space:</BoldInlineTypo>{" "}
            <InlineTypo>{vehicle.cargo_space}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Luxary Vehicle:</BoldInlineTypo>{" "}
            <InlineTypo>{vehicle.luxary_vehicle}</InlineTypo>
          </Grid>
        </Grid>

        <Grid container direction="column" rowSpacing={0.7} sx={{ mt: 2 }}>
          <Grid item>
            <BoldInlineTypo>Driver Assistance Packages:</BoldInlineTypo>
          </Grid>
          <IndentedGrid item>
            <BoldInlineTypoSm>
              {`${vehicle.driver_assistance_packages?.level1.label}:`}
            </BoldInlineTypoSm>{" "}
            <InlineTypoSm>
              {vehicle.driver_assistance_packages?.level1.description}
            </InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>
              {`${vehicle.driver_assistance_packages?.level2.label}:`}
            </BoldInlineTypoSm>{" "}
            <InlineTypoSm>
              {vehicle.driver_assistance_packages?.level2.description}
            </InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>
              {`${vehicle.driver_assistance_packages?.level3.label}:`}
            </BoldInlineTypoSm>{" "}
            <InlineTypoSm>
              {vehicle.driver_assistance_packages?.level3.description}
            </InlineTypoSm>
          </IndentedGrid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        {renderVehicleTrims()}
      </Grid>
    </SpecsWrapper>
  );
}

export default Specifications;
