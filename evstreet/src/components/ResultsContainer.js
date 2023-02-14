import React from "react";
import { Paper, Grid, ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../assets/styles/ResultsContainer.css";
import map_vehicle_to_image from "./images";

function ResultsContainer({ filteredVehicleSpecs, lang }) {
  const priceToDollars = () =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(filteredVehicleSpecs.base_price);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderBottomLeftRadius: 5,
  });

  console.log(filteredVehicleSpecs.model);

  console.log("DOT:::", map_vehicle_to_image.EV6);

  console.log("[]::::", map_vehicle_to_image[filteredVehicleSpecs.model]);

  return (
    <div id="output">
      <Paper
        sx={{
          backgroundColor: "#f2f2f2",
          flexGrow: 1,
          mb: 2,
        }}
      >
        <Grid container columnSpacing={2}>
          <Grid item>
            <Typography
              sx={{
                textAlign: "center",
                lineHeight: 1.5,
                pt: 0.4,
                backgroundColor: "rgb(175, 227, 175)",
                borderTopLeftRadius: 5,
              }}
            >
              {filteredVehicleSpecs.make} {filteredVehicleSpecs.model}
            </Typography>
            <ButtonBase sx={{ width: 210, height: 140 }}>
              <Img
                alt="Tesla Model 3"
                src={map_vehicle_to_image[filteredVehicleSpecs.model]}
              />
            </ButtonBase>
          </Grid>
          <Grid item>
            <Typography
              sx={{ mt: 2.9, fontSize: 14, color: "rgb(98, 98, 98)" }}
            >
              Base Price: {priceToDollars()}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "rgb(98, 98, 98)" }}>
              Body Style: {filteredVehicleSpecs.body_style}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ResultsContainer;
