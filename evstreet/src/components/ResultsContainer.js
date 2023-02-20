import React from "react";
import { Paper, Grid, ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import map_vehicle_to_image from "./images";

function ResultsContainer({ filteredVehicleSpecs, lang }) {
  const priceToDollars = () =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(filteredVehicleSpecs.base_price);

  const ListingHeader = styled(Typography)({
    textAlign: "center",
    lineHeight: 1.5,
    pt: 0.4,
    backgroundColor: "#afe3af",
    borderTopLeftRadius: 5,
  })

  const ListingImg = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderBottomLeftRadius: 5,
  });

  const ListingSpecs = styled(Typography)({
    // pass Typography argument into styled() to apply styles to the component
    fontSize: 13.5,
    color: "#626262",
  });

  return (
    <div id="output">
      <Paper
        elevation={2}
        sx={{
          backgroundColor: "#f2f2f2",
          flexGrow: 1,
          mb: 2,
        }}
      >
        <Grid container columnSpacing={2}>
          <Grid item>
            <ListingHeader>
              {filteredVehicleSpecs.make} {filteredVehicleSpecs.model}
            </ListingHeader>
            <ButtonBase sx={{ width: 210, height: 140 }}>
              <ListingImg
                alt="Tesla Model 3"
                src={map_vehicle_to_image[filteredVehicleSpecs.model]}
                  // So, [filteredVehicleSpecs.model] is used to access
                  // map_vehicle_to_image object properties to obtain images
                  // imported to images.js, b/c React won't handle relative
                  // image reference in src attribute.
              />
            </ButtonBase>
          </Grid>
          <Grid item>
            <ListingSpecs sx={{ mt: 2.9 }}>
              Base Price: { priceToDollars() }
            </ListingSpecs>
            <ListingSpecs>
              Body Style: {filteredVehicleSpecs.body_style}
            </ListingSpecs>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ResultsContainer;
