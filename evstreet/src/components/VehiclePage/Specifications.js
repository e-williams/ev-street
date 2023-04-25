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

function Specifications({ vehicle }) {
  // Find all the trims for each vehicle.
  // Render with a loop the information of those trims.

  const { trim = {} } = vehicle;
  // destructures trim and wraps it in an object
  // { standard: {..}, awd: {..}, performance: {..} }

  const renderVehicleTrims = () => {
    console.log("TEST", process.env.REACT_APP_NOT_SECRET_CODE);
    const vehicleTrims = Object.values(trim);
    // returns an array of the sting-keyed property values of trim
    // [ {label: 'Rear-Wheel Drive', etc.}, {base_price: 42990}, {..},
    // {..} ]

    return vehicleTrims.map((trimInformation) => {

      const LABEL_MAP = {
        base_price: {
          label: "Base Price",
          data: (price) => price === -1 ? "to be determined" : priceToDollars(price)
            // data value is -1 if no price available
            // value of price is from map() iterator - 'value'
        },
        weight: {
          label: "Weight",
          data: (weight) => `${formattedNumbers(weight)} lbs`
            // value of weight is from map() iterator - 'weight'
        },
        drivetrain: {
          label: "Drivetrain",
          data: () => `${trimInformation.drivetrain}`
        },
        motors: {
          label: "Motors",
          data: () => `${trimInformation.motors}`
        },
        horsepower: {
          label: "Horsepower",
          data: () => `${trimInformation.horsepower} hp (maximum)`
        },
        torque: {
          label: "Torque",
          data: () => `${trimInformation.torque} lb-ft`
        },
        range: {
          label: "range",
          data: () => `${trimInformation.range} mi (EPA est.)`
        },
        fuel_economy: {
          label: "Fuel Economy",
          data: () => `${trimInformation.fuel_economy} kWh / 100 miles - combined city/highway (EPA est.)`
        },
        MPGe: {
          label: "Fuel Economy (MPGe)",
          data: () =>
            `${trimInformation.MPGe}  - combined city/highway (EPA est.)`
        },
        "0_60": {
          label: "Acceleration (0-60)",
          data: () => `${trimInformation["0_60"]} s`
        },
        top_speed: {
          label: "Top Speed",
          data: () =>
            `${trimInformation.top_speed} mph (may be electronically limited) Always obey speed and traffic laws.`
        },
        max_ac_charging: {
          label: "Maximum Onboard (AC) Charging",
          data: () => `${trimInformation.max_ac_charging} kW`
        },
        max_dc_charging: {
          label: "Maximum Fast (DC) Charging",
          data: () => `${trimInformation.max_dc_charging} kW`
        },
        battery_type: {
          label: "Battery Type",
          data: () => `${trimInformation.battery_type}`
        },
        battery_capacity: {
          label: "Battery Capacity",
          data: () => `${trimInformation.battery_capacity} kWh`
        },
        towing_capacity: {
          label: "Towing Capacity",
          data: (towing_capacity) =>
            `${formattedNumbers(towing_capacity)} lbs`
        }
      }

      console.log("vehicle trims", vehicleTrims);
      const trimInfoEntries = Object.entries(trimInformation);
      console.log("trim info entries", trimInfoEntries);

      return (
        <Grid
          container
          direction="column"
          key={trimInformation.label}
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
            // label and value iterators take on object key & object value.

            console.log("label iterator", label);
            console.log("value iterator", value);
            console.log("LABEL_MAP label", LABEL_MAP[label]);

            return (
              <>
                {!LABEL_MAP[label]?.label ? (
                  <Grid item />
                ) : (
                <Grid item>
                  <BoldInlineTypoSm>
                    {LABEL_MAP[label]?.label}
                    {": "}
                  </BoldInlineTypoSm>
                  <InlineTypoSm>
                    {LABEL_MAP[label]?.data(value)}
                  </InlineTypoSm>
                </Grid>
                )}
              </>
            );
          })}

          {/*}
          <Grid item>
            <BoldInlineTypoSm>Base Price: </BoldInlineTypoSm>
            <InlineTypoSm>
              {trimInformation.base_price === -1
                // data value is -1 if no price available
                ? "to be determined"
                : priceToDollars(trimInformation.base_price)}
            </InlineTypoSm>
          </Grid>
          {!trimInformation.weight ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Weight: </BoldInlineTypoSm>
              <InlineTypoSm>
                {formattedNumbers(trimInformation.weight)}
                {" lbs"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.drivetrain ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Drivetrain: </BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation.drivetrain}</InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.motors ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Motors: </BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation.motors}</InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.hp ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Horsepower: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.hp}
                {" hp (maximum)"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.torque ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Torque: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.torque}
                {" lb-ft"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.range ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Range: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.range}
                {" mi (EPA est.)"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.fuel_economy ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Fuel Economy: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.fuel_economy}
                {" kWh / 100 miles - combined city/highway (EPA est.)"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.MPGe ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Fuel Economy (MGPe): </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.MPGe}
                {" - combined city/highway (EPA est.)"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation["0_60"] ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Acceleration (0-60): </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation["0_60"]}
                {" s"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.top_speed ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Top Speed: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.top_speed}
                {" mph (may be electronically limited)"}
              </InlineTypoSm>
              <TypoSm>{"Always obey speed and traffic laws."}</TypoSm>
            </Grid>
          )}
          {!trimInformation.max_ac_charging ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>
                Maximum Onboard (AC) Charging:{" "}
              </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.max_ac_charging}
                {" kW"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.max_dc_charging ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Maximum Fast (DC) Charging: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.max_dc_charging}
                {" kW"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.battery_type ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Battery Type: </BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation.battery_type}</InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.battery_capacity ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Battery Capacity: </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.battery_capacity}
                {" kWh"}
              </InlineTypoSm>
            </Grid>
          )}
          {!trimInformation.towing_capacity ? (
            <Grid item />
          ) : (
            <Grid item>
              <BoldInlineTypoSm>Towing Capacity: </BoldInlineTypoSm>
              <InlineTypoSm>
                {formattedNumbers(trimInformation.towing_capacity)}
                {" lbs"}
              </InlineTypoSm>
            </Grid>
          )}
          */}
        </Grid>
      );
    });
  }

  const { driver_assistance_packages = {} } = vehicle;

  console.log("driver assistance packages", driver_assistance_packages);

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
