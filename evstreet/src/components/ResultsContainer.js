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

  const Test = styled(Typography)({
    fontSize: "40px",
  });

  const WrapperLabel = styled("h1")({
    backgroundColor: "red",
    fontSize: "10px",
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
        <WrapperLabel>This is a Label</WrapperLabel>
        <Grid container columnSpacing={2}>
          <Grid item>
            <Test
              sx={{
                textAlign: "center",
                lineHeight: 1.5,
                pt: 0.4,
                backgroundColor: "rgb(175, 227, 175)",
                borderTopLeftRadius: 5,
              }}
            >
              {filteredVehicleSpecs.make} {filteredVehicleSpecs.model}
            </Test>
            <ButtonBase sx={{ width: 210, height: 140 }}>
              <Img
                alt="Tesla Model 3"
                src={map_vehicle_to_image[filteredVehicleSpecs.model]}
              />
            </ButtonBase>
          </Grid>
          <Grid item>
            <Test sx={{ fontSize: "10px", mt: 2.9, color: "rgb(98, 98, 98)" }}>
              Base Price: {priceToDollars()}
            </Test>
            <Test sx={{ color: "rgb(98, 98, 98)" }}>
              Body Style: {filteredVehicleSpecs.body_style}
            </Test>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ResultsContainer;
