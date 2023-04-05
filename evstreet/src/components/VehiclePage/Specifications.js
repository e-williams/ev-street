import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const SpecsWrapper = styled(Grid)({
  padding: 20,
});

const InlineTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: 300,
  color: "#505050",
  display: "inline",
});

const BoldInlineTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: "#505050",
  display: "inline",
});

const InlineTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 300,
  color: "#505050",
  display: "inline",
});

const BoldInlineTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 500,
  color: "#505050",
  display: "inline",
});

const IndentedGrid = styled(Grid)({
  marginLeft: 24,
})

function Specifications(vehicle) {

  console.log("vehicle prop2::::", vehicle);

  const vehicleObj = vehicle.vehicle.vehicle;
  const standard = vehicleObj.trim.standard;
  const awd = vehicleObj.trim.awd;
  const performance = vehicleObj.trim.performance;

  return (
    <SpecsWrapper container columnSpacing={6}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item>
            <BoldInlineTypo>Make/Model:</BoldInlineTypo> <InlineTypo>{vehicleObj.make} {vehicleObj.model}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Body Style:</BoldInlineTypo> <InlineTypo>{vehicleObj.body_style}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Seating Capacity:</BoldInlineTypo> <InlineTypo>{vehicleObj.seating_capacity}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Cargo Space:</BoldInlineTypo> <InlineTypo>{vehicleObj.cargo_space}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Luxary Vehicle:</BoldInlineTypo> <InlineTypo>{vehicleObj.luxary_vehicle}</InlineTypo>
          </Grid>
        </Grid>

        <Grid container direction="column" rowSpacing={.7} sx={{ mt: 2 }}>
          <Grid item>
            <BoldInlineTypo>Driver Assistance Packages:</BoldInlineTypo>
          </Grid>
          <IndentedGrid item>
            <BoldInlineTypoSm>
              {`${vehicleObj.driver_assistance_packages.level1.label}:`}
            </BoldInlineTypoSm> <InlineTypoSm>{vehicleObj.driver_assistance_packages.level1.description}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>
              {`${vehicleObj.driver_assistance_packages.level2.label}:`}
            </BoldInlineTypoSm> <InlineTypoSm>{vehicleObj.driver_assistance_packages.level2.description}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>
              {`${vehicleObj.driver_assistance_packages.level3.label}:`}
            </BoldInlineTypoSm> <InlineTypoSm>{vehicleObj.driver_assistance_packages.level3.description}</InlineTypoSm>
          </IndentedGrid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid Container direction="column">
          <Grid item>
            <BoldInlineTypo>{`${standard.label}:`}</BoldInlineTypo>
          </Grid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Base Price:</BoldInlineTypoSm> <InlineTypoSm>{standard.base_price}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Weight:</BoldInlineTypoSm> <InlineTypoSm>{standard.weight}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Drivetrain:</BoldInlineTypoSm> <InlineTypoSm>{standard.drivetrain}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Motors:</BoldInlineTypoSm> <InlineTypoSm>{standard.motors}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Range:</BoldInlineTypoSm> <InlineTypoSm>{standard.range}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Fuel Economy:</BoldInlineTypoSm> <InlineTypoSm>{standard.fuel_economy}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>MGPe:</BoldInlineTypoSm> <InlineTypoSm>{standard.MPGe}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Acceleration (0-60):</BoldInlineTypoSm> <InlineTypoSm>{standard["0_60"]}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Supercharging Maximum:</BoldInlineTypoSm> <InlineTypoSm>{standard.supercharging}</InlineTypoSm>
          </IndentedGrid>
        </Grid>

        <Grid Container direction="column">
          <Grid item sx={{ mt: 3 }}>
            <BoldInlineTypo>{`${awd.label}:`}</BoldInlineTypo>
          </Grid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Base Price:</BoldInlineTypoSm> <InlineTypoSm>{awd.base_price}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Weight:</BoldInlineTypoSm> <InlineTypoSm>{awd.weight}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Drivetrain:</BoldInlineTypoSm> <InlineTypoSm>{awd.drivetrain}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Motors:</BoldInlineTypoSm> <InlineTypoSm>{awd.motors}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Range:</BoldInlineTypoSm> <InlineTypoSm>{awd.range}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Fuel Economy:</BoldInlineTypoSm> <InlineTypoSm>{awd.fuel_economy}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>MGPe:</BoldInlineTypoSm> <InlineTypoSm>{awd.MPGe}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Acceleration (0-60):</BoldInlineTypoSm> <InlineTypoSm>{awd["0_60"]}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Supercharging Maximum:</BoldInlineTypoSm> <InlineTypoSm>{awd.supercharging}</InlineTypoSm>
          </IndentedGrid>
        </Grid>

        <Grid Container direction="column">
          <Grid item sx={{ mt: 3 }}>
            <BoldInlineTypo>{`${performance.label}:`}</BoldInlineTypo>
          </Grid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Base Price:</BoldInlineTypoSm> <InlineTypoSm>{performance.base_price}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Weight:</BoldInlineTypoSm> <InlineTypoSm>{performance.weight}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Drivetrain:</BoldInlineTypoSm> <InlineTypoSm>{performance.drivetrain}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Motors:</BoldInlineTypoSm> <InlineTypoSm>{performance.motors}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Range:</BoldInlineTypoSm> <InlineTypoSm>{performance.range}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Fuel Economy:</BoldInlineTypoSm> <InlineTypoSm>{performance.fuel_economy}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>MGPe:</BoldInlineTypoSm> <InlineTypoSm>{performance.MPGe}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Acceleration (0-60):</BoldInlineTypoSm> <InlineTypoSm>{performance["0_60"]}</InlineTypoSm>
          </IndentedGrid>
          <IndentedGrid item>
            <BoldInlineTypoSm>Supercharging Maximum:</BoldInlineTypoSm> <InlineTypoSm>{performance.supercharging}</InlineTypoSm>
          </IndentedGrid>
        </Grid>
      </Grid>
    </SpecsWrapper>
  );
}

export default Specifications;