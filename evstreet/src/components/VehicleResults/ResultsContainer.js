import React from "@testing-library/user-event";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Tooltip } from "@mui/material";
import vehicle_thumbnail_map from "../ImageManagement/VehicleThumbnailMap";
import vehicle_image_map from "../ImageManagement/VehicleImageMap";
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
    width: 210,
    height: 140,
    borderBottomLeftRadius: 5,
  });

  const ListingSpecs = styled(Typography)({
    fontSize: 13.5,
    color: "#626262",
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
            //title={`IMAGE SOURCE: ${vehicle_image_map[vehicleModel][0].url}`}
            title={`IMAGE SOURCE: ${vehicle_thumbnail_map[vehicleModel].url}`}
            arrow
            placement="right-end"
          >
            <ListingImg
              alt={`${vehicleMake} ${vehicleModel}`}
              src={vehicle_thumbnail_map[vehicleModel].filepath}
              // [filteredVehicleSpecs.model] is used to access
              // map_vehicle_to_thumbnail object properties to obtain
              // images imported to images.js, b/c React won't handle
              // relative image reference in src attribute.
            />
          </Tooltip>
        </Grid>
        <Grid item>
          <ListingSpecs sx={{ mt: 2.9 }}>
            Base Price: {priceToDollars()}
          </ListingSpecs>
          <ListingSpecs>
            Body Style: {filteredVehicleSpecs.body_style}
          </ListingSpecs>
        </Grid>
      </Grid>
    </ResultsWrapper>
  );
}

export default ResultsContainer;
