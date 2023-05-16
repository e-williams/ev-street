import { priceToDollars, formattedNumbers } from "../utils/utils";

// Create map of vehicle labels/values for loops used to generate rendered
// output in Specifications component.

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

export default LABEL_MAP;