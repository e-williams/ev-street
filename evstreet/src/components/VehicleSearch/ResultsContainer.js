import React from "@testing-library/user-event";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Tooltip } from "@mui/material";
import VehicleImageMap from "../ImageHandling/VehicleImageMap";
import { useNavigate } from "react-router-dom";

function ResultsContainer({ filteredVehicleSpecs, lang }) {

  console.log("filtvehspecs:::", filteredVehicleSpecs);

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

  const BoldTypo = styled(Typography)({
    fontSize: 12.6,
    fontWeight: 500,
    display: "inline",
  });

  const navigate = useNavigate();

  const vehicleMake = filteredVehicleSpecs.make;
  const vehicleModel = filteredVehicleSpecs.model;
  const trim = filteredVehicleSpecs.trim;
  const results = filteredVehicleSpecs.results

  console.log('range::::', filteredVehicleSpecs.trim?.performance.range);

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
        <Grid item xs={2.4} sx={{ mt: 2.9 }}>
          <ListingSpecs>
            <BoldTypo>Base Price:</BoldTypo> {priceToDollars()}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Body Style:</BoldTypo> {filteredVehicleSpecs.body_style}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Convertible Option:</BoldTypo> {filteredVehicleSpecs.convertible_option}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Seating Capacity:</BoldTypo> {filteredVehicleSpecs.seating_capacity}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Cargo Space:</BoldTypo> {filteredVehicleSpecs.cargo_space}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Luxary Vehicle:</BoldTypo> {filteredVehicleSpecs.luxary_vehicle}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Drivetrain:</BoldTypo> {filteredVehicleSpecs.drivetrain}
          </ListingSpecs>
        </Grid>
        <Grid item sx={{ mt: 2.9 }}>
          <ListingSpecs>
            <BoldTypo>Range:</BoldTypo> {results?.range}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Fuel Economy:</BoldTypo> {results?.MPGe}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Acceleration (0-60):</BoldTypo> {results?.["0_60"]}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Supercharging Max:</BoldTypo> {results?.supercharging}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Driver Assistance System:</BoldTypo> {filteredVehicleSpecs.driver_assist}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Self-Parking:</BoldTypo> {filteredVehicleSpecs.self_parking}
          </ListingSpecs>
          <ListingSpecs>
            <BoldTypo>Weight:</BoldTypo> {trim?.standard.weight} {`- ${trim?.standard.label} trim`}
          </ListingSpecs>
        </Grid>
      </Grid>
    </ResultsWrapper>
  );
}

export default ResultsContainer;
