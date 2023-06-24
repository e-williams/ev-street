const RESULTS_LABEL_MAP = {
  body_style: {
    label: "Body Style",
    data: (body_style) => body_style,
  },
  convertible_option: {
    label: "Convertible Option",
    data: (convertible_option) => convertible_option,
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
  drivetrain: {
    label: "Drivetrain",
    data: (drivetrain) => drivetrain,
  },
};

export default RESULTS_LABEL_MAP;