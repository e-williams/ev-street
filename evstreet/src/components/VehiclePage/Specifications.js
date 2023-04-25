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

const LABEL_MAP = {
  base_price: {
    label: "Base Price",
    data: (price) =>
      price === -1 ? "to be determined" : priceToDollars(price),
    // data value is -1 if no price available
    // value of price is from map() iterator - 'value'
  },
  weight: {
    label: "Weight",
    data: (weight) => `${formattedNumbers(weight)} lbs`,
    // value of weight is from map() iterator - 'weight'
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
};

function Specifications({ vehicle }) {
  // Find all the trims for each vehicle.
  // Render with a loop the information of those trims.

  const { trim = {} } = vehicle;
  // destructures trim and wraps it in an object
  // { standard: {..}, awd: {..}, performance: {..} }

  const renderVehicleTrims = () => {
    const vehicleTrims = Object.values(trim);
    // returns an array of the sting-keyed property values of trim
    // [ {label: 'Rear-Wheel Drive', etc.}, {base_price: 42990}, {..},
    // {..} ]

    return vehicleTrims.map((trimInformation) => {
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
            if (!LABEL_MAP[label]) {
              return <Grid item key={`${label} ${value}`} />;
            }

            return (
              <Grid item key={`${label} ${value}`}>
                <BoldInlineTypoSm>
                  {LABEL_MAP[label].label}
                  {": "}
                </BoldInlineTypoSm>
                <InlineTypoSm>{LABEL_MAP[label].data(value)}</InlineTypoSm>
              </Grid>
            );
          })}
        </Grid>
      );
    });
  };

  const { driver_assistance_packages = {} } = vehicle;

  const renderDriverAssistPackages = () => {
    if (driver_assistance_packages === "none") {
      return <InlineTypo>{"none"}</InlineTypo>;
    } else {
      return Object.values(driver_assistance_packages).map(
        (driverAssistInformation) => {
          // Object.values returns an array of the sting-keyed property values
          // of driverAssistPackages.

          const { description } = driverAssistInformation;
          const items = Object.values(description);

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

                {items.map((item) => (
                  <TypoSm key={item}>{item}</TypoSm>
                ))}
              </Grid>
            </Grid>
          );
        }
      );
    }
  };

  return (
    <SpecsWrapper container columnSpacing={4}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item>
            <BoldInlineTypo>Make/Model: </BoldInlineTypo>
            <InlineTypo>
              {vehicle.make} {vehicle.model}
            </InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Body Style: </BoldInlineTypo>
            <InlineTypo>{vehicle.body_style}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Seating Capacity: </BoldInlineTypo>
            <InlineTypo>{vehicle.seating_capacity}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Cargo Space: </BoldInlineTypo>
            <InlineTypo>
              {vehicle.cargo_space}
              {" cu ft"}
            </InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Luxary Vehicle: </BoldInlineTypo>
            <InlineTypo>{vehicle.luxary_vehicle}</InlineTypo>
          </Grid>
          <Grid item sx={{ mt: 3 }}>
            <BoldInlineHeader>Driver Assistance Packages</BoldInlineHeader>
            <TypoSm>(names are manufacturer-specific)</TypoSm>
          </Grid>
        </Grid>
        {renderDriverAssistPackages()}
      </Grid>
      <Grid item xs={6}>
        {renderVehicleTrims()}
      </Grid>
    </SpecsWrapper>
  );
}

export default Specifications;
