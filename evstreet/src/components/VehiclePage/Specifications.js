import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { priceToDollars, formattedNumbers } from "../Common/Utils";

const SpecsWrapper = styled(Grid)({
  padding: 20,
  color: "#505050",
});

const InlineTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: 300,
  display: "inline",
});

const BoldInlineTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  display: "inline",
});

const BoldInlineHeader = styled(Typography)({
  fontSize: 15.5,
  fontWeight: 500,
  display: "inline",
});

const InlineTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 300,
  display: "inline",
});

const TypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 300,
});

const BoldInlineTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 500,
  display: "inline",
});

const BoldTypoSm = styled(Typography)({
  fontSize: 12.5,
  fontWeight: 500,
});

// Create map of data labels/values for loops used to generate rendered
// components.
const LABEL_MAP = {
  body_style: {
    label: "Body Style",
    data: (body_style) => body_style,
  },
  seating_capacity: {
    label: "Seating Capacity",
    data: (seating_capacity) => seating_capacity,
  },
  cargo_space: {
    label: "Cargo Space",
    data: (cargo_space) => `${cargo_space} cu ft`,
  },
  luxary_vehicle: {
    label: "Luxary Vehicle",
    data: (luxary_vehicle) => luxary_vehicle,
  },
  base_price: {
    label: "Base Price",
    data: (price) =>
      price === -1 ? "to be determined" : priceToDollars(price),
    // data value is -1 if no price available
  },
  weight: {
    label: "Weight",
    data: (weight) => `${formattedNumbers(weight)} lbs`,
  },
  drivetrain: {
    label: "Drivetrain",
    data: (drivetrain) => drivetrain,
  },
  motors: {
    label: "Motors",
    data: (motors) => motors,
  },
  horsepower: {
    label: "Horsepower",
    data: (horsepower) => `${horsepower} hp (maximum)`,
  },
  torque: {
    label: "Torque",
    data: (torque) => `${torque} lb-ft`,
  },
  range: {
    label: "range",
    data: (range) => `${range} mi (EPA est.)`,
  },
  fuel_economy: {
    label: "Fuel Economy",
    data: (fuel_economy) =>
      `${fuel_economy} kWh / 100 miles - combined city/highway (EPA est.)`,
  },
  MPGe: {
    label: "Fuel Economy (MPGe)",
    data: (MPGe) => `${MPGe}  - combined city/highway (EPA est.)`,
  },
  "0_60": {
    label: "Acceleration (0-60)",
    data: (acceleration) => `${acceleration} s`,
  },
  top_speed: {
    label: "Top Speed",
    data: (top_speed) => (
      <>
        {top_speed} mph (may be electronically limited).
        <br />
        Always obey speed and traffic laws.
      </>
    ),
  },
  max_ac_charging: {
    label: "Maximum Onboard (AC) Charging",
    data: (max_ac_charging) => `${max_ac_charging} kW`,
  },
  max_dc_charging: {
    label: "Maximum Fast (DC) Charging",
    data: (max_dc_charging) => `${max_dc_charging} kW`,
  },
  battery_type: {
    label: "Battery Type",
    data: (battery_type) => battery_type,
  },
  battery_capacity: {
    label: "Battery Capacity",
    data: (battery_capacity) => `${battery_capacity} kWh`,
  },
  towing_capacity: {
    label: "Towing Capacity",
    data: (towing_capacity) => `${formattedNumbers(towing_capacity)} lbs`,
  },
}

function Specifications({ vehicle }) {

  const renderMainSpecs = () => {
    return (
      <Grid container direction="column">

        <Grid item>
          <BoldInlineTypo>Make/Model: </BoldInlineTypo>
          <InlineTypo>
            {vehicle.make} {vehicle.model}
          </InlineTypo>
        </Grid>

        {Object.entries(vehicle).map(([label, value]) => {
          // Object.entries(vehicle) returns an array of arrays:
          // [ ['id', 0], ['make', 'TESLA'], ...]
          // label and value iterators take on array values.


          if (!LABEL_MAP[label]) {
            return <Grid item key={`${label} ${value}`} />;
          }

          return (
            <Grid item key={`${label} ${value}`}>
              <BoldInlineTypo>
                {LABEL_MAP[label].label}
                {": "}
              </BoldInlineTypo>
              <InlineTypo>
                {LABEL_MAP[label].data(value)}
              </InlineTypo>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  const { driver_assistance_packages = {} } = vehicle;
    // destructures driver_assistance_packages and wraps it in an object
    // { level1: {..}, level2: {..}, level3: {..} }

  const renderDriverAssistPackages = () => {
    if (driver_assistance_packages === "none") {
      return <InlineTypo>{"none"}</InlineTypo>;
    }

    return (
      <Grid container>
        <Grid item sx={{ mt: 2.5 }}>
          <BoldInlineHeader>Driver Assistance Packages</BoldInlineHeader>
          <TypoSm>(names are manufacturer-specific)</TypoSm>
        </Grid>

        <Grid item>
          {Object.values(driver_assistance_packages).map(
            (driverAssistInformation) => {

              const { description } = driverAssistInformation;

              return (
                <Grid
                  container
                  direction="column"
                  rowSpacing={1}
                  key={driverAssistInformation.label}
                >
                  <Grid item sx={{ mt: "8px" }}>
                    <BoldTypoSm>
                      {driverAssistInformation.label}
                      {": "}
                    </BoldTypoSm>

                    {Object.values(description).map((item) => (
                      <TypoSm key={item}>{item}</TypoSm>
                    ))}
                  </Grid>
                </Grid>
              );
          })}
        </Grid>
      </Grid>                             
    );
  }

  // Find all the trims for each vehicle.
  // Render with a loop the information of those trims.

  const { trim = {} } = vehicle;
  // destructures trim and wraps it in an object
  // { standard: {..}, awd: {..}, performance: {..} }

  const renderVehicleTrims = () => {

    return Object.values(trim).map((trimInformation) => {
      // Object.values(trim) returns:
      // [ {label: 'Rear-Wheel Drive'}, {base_price: 42990}, {..}, {..} ]

      return (
        <Grid
          key={trimInformation.label}
          container
          direction="column"
          sx={{ mb: 2 }}
        >
          <Grid item>
            <BoldInlineHeader>
              {trimInformation.label}
              {" trim"}
            </BoldInlineHeader>
          </Grid>

          {Object.entries(trimInformation).map(([label, value]) => {
            // Object.entries(trimInformation) produces an array of arrays,
            // each array with 2 elements representing key & value from data
            // trims, for example:
            // [ [ 'label', 'Rear-Wheel Drive' ], [ 'base_price', 42990 ], ... ]
            // label and value iterators take on array values.
            
            if (!LABEL_MAP[label]) {
              return <Grid item key={`${label} ${value}`} />;
            }

            return (
              <Grid item key={`${label} ${value}`}>
                <BoldInlineTypoSm>
                  {LABEL_MAP[label].label}
                  {": "}
                </BoldInlineTypoSm>
                <InlineTypoSm>
                  {LABEL_MAP[label].data(value)}
                </InlineTypoSm>
              </Grid>
            );
          })}
        </Grid>
      );
    });
  }

  return (
    <SpecsWrapper container columnSpacing={4}>
      <Grid item xs={6}>
        {renderMainSpecs()}
        {renderDriverAssistPackages()}
      </Grid>
      <Grid item xs={6}>
        {renderVehicleTrims()}
      </Grid>
    </SpecsWrapper>
  );
}

export default Specifications;
