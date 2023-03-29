import React from "@testing-library/user-event";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Tooltip } from "@mui/material";
import VehicleImageMap from "../ImageHandling/VehicleImageMap";
import { useNavigate } from "react-router-dom";

function ResultsContainer({ filteredVehicleSpecs, lang }) {

  const priceToDollars = () =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(filteredVehicleSpecs.base_price);

  const ResultsWrapper = styled(Paper)({
    backgroundColor: "#f9f9f9",
    paddingRight: 14,
    marginBottom: 14,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 7px #626262",
    },
  });

  const ListingHeader = styled(Typography)({
    textAlign: "center",
    lineHeight: 1.5,
    pt: 0.4,
    backgroundColor: "#bfffce",
    borderTopLeftRadius: 5,
  });

  const ListingImg = styled("img")({
    display: "block",
    width: 236,
    height: 134,
    borderBottomLeftRadius: 5,
  });

  const ListingSpecs = styled(Typography)({
    fontSize: 12.6,
    fontWeight: 300,
    color: "#505050",
  });

  const navigate = useNavigate();

  const vehicleMake = filteredVehicleSpecs.make;
  const vehicleModel = filteredVehicleSpecs.model;

  return (
    <ResultsWrapper
      elevation={2}
      onClick={() => navigate(`/vehicle/${filteredVehicleSpecs.id}`)}
    >
      <Grid container columnSpacing={2}>
        <Grid item>
          <ListingHeader>
            {vehicleMake} {vehicleModel}
          </ListingHeader>
          <Tooltip
            title={`IMAGE SOURCE: ${VehicleImageMap[vehicleModel][0].url}`}
            arrow
            placement="right-end"
          >
            <ListingImg
              alt={`${vehicleMake} ${vehicleModel}`}
              src={VehicleImageMap[vehicleModel][0].filepath}
              // [filteredVehicleSpecs.model] is used to access
              // VehicleThumbnailMap object properties to obtain
              // images imported to images.js, b/c React won't handle
              // relative image reference in src attribute.
            />
          </Tooltip>
        </Grid>
        <Grid item sx={{ mt: 2.9 }}>
          <ListingSpecs >
            Base Price: {priceToDollars()}
          </ListingSpecs>
          <ListingSpecs>
            Body Style: {filteredVehicleSpecs.body_style}
          </ListingSpecs>
          <ListingSpecs>
            Convertible Option: {filteredVehicleSpecs.convertible_option}
          </ListingSpecs>
          <ListingSpecs>
            Seating Capacity: {filteredVehicleSpecs.seating_capacity}
          </ListingSpecs>
          <ListingSpecs>
            Cargo Space: {filteredVehicleSpecs.cargo_space}
          </ListingSpecs>
          <ListingSpecs>
            Luxary Vehicle: {filteredVehicleSpecs.luxary_vehicle}
          </ListingSpecs>
          <ListingSpecs>
            Drivetrain: {filteredVehicleSpecs.drivetrain}
          </ListingSpecs>
        </Grid>
        <Grid item sx={{ mt: 2.9 }}>
          <ListingSpecs>
            Max Range: {filteredVehicleSpecs.max_range}
          </ListingSpecs>
          <ListingSpecs>
            Max Fuel Economy (MPGe): {filteredVehicleSpecs.max_MPGe}
          </ListingSpecs>
          <ListingSpecs>
            Top Acceleration (0-60 mph): {filteredVehicleSpecs.top_acceleration_0_60}
          </ListingSpecs>
          <ListingSpecs>
            Max Supercharging: {filteredVehicleSpecs.max_supercharging}
          </ListingSpecs>
          <ListingSpecs>
            Driver Assistance: {filteredVehicleSpecs.driver_assist}
          </ListingSpecs>
          <ListingSpecs>
            Self-Parking: {filteredVehicleSpecs.self_parking}
          </ListingSpecs>
          <ListingSpecs>
            Weight: {filteredVehicleSpecs.base_weight}
          </ListingSpecs>
        </Grid>
      </Grid>
    </ResultsWrapper>
  );
}

export default ResultsContainer;
