import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import LABEL_MAP from "../../config/specs_label_map";

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

  const renderMainSpecs = () => {
    return (
      <Grid container direction="column">

        <Grid item>
          <BoldInlineTypo>Make/Model: </BoldInlineTypo>
          <InlineTypo>
            {vehicle.make} {vehicle.model}
          </InlineTypo>
        </Grid>

        {Object.entries(vehicle).map(([label, value]) => {
          // Object.entries(vehicle) returns an array of arrays:
          // [ ['id', 0], ['make', 'TESLA'], ...]
          // label and value iterators take on array values.
      
          if (!LABEL_MAP[label]) {
            return <Grid item key={`${label} ${value}`} />;
          }

          return (
            <Grid item key={`${label} ${value}`}>
              <BoldInlineTypo>
                {LABEL_MAP[label].label}
                {": "}
              </BoldInlineTypo>
              <InlineTypo>
                {LABEL_MAP[label].data(value)}
              </InlineTypo>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  const { driver_assistance_packages = {} } = vehicle;
    // destructures driver_assistance_packages and wraps it in an object
    // { level1: {..}, level2: {..}, level3: {..} }

  const renderDriverAssistPackages = () => {
    if (driver_assistance_packages === "none") {
      return <InlineTypo>{"none"}</InlineTypo>;
    }

    return (
      <Grid container>
        <Grid item sx={{ mt: 2.5 }}>
          <BoldInlineHeader>Driver Assistance Packages</BoldInlineHeader>
          <TypoSm>(names are manufacturer-specific)</TypoSm>
        </Grid>

        <Grid item>
          {Object.values(driver_assistance_packages).map(
            (driverAssistInformation) => {

              const { description } = driverAssistInformation;

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

                    {Object.values(description).map((item) => (
                      <TypoSm key={item}>{item}</TypoSm>
                    ))}
                  </Grid>
                </Grid>
              );
          })}
        </Grid>
      </Grid>                             
    );
  }

  // Find all the trims for each vehicle.
  // Render with a loop the information of those trims.

  const { trim = {} } = vehicle;
  // destructures trim and wraps it in an object
  // { standard: {..}, awd: {..}, performance: {..} }

  const renderVehicleTrims = () => {

    return Object.values(trim).map((trimInformation) => {
      // Object.values(trim) returns:
      // [ {label: 'Rear-Wheel Drive'}, {base_price: 42990}, {..}, {..} ]

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
            // Object.entries(trimInformation) produces an array of arrays,
            // each array with 2 elements representing key & value from data
            // trims, for example:
            // [ [ 'label', 'Rear-Wheel Drive' ], [ 'base_price', 42990 ], ... ]
            // label and value iterators take on array values.
            
            if (!LABEL_MAP[label]) {
              return <Grid item key={`${label} ${value}`} />;
            }

            return (
              <Grid item key={`${label} ${value}`}>
                <BoldInlineTypoSm>
                  {LABEL_MAP[label].label}
                  {": "}
                </BoldInlineTypoSm>
                <InlineTypoSm>
                  {LABEL_MAP[label].data(value)}
                </InlineTypoSm>
              </Grid>
            );
          })}
        </Grid>
      );
    });
  }

  return (
    <SpecsWrapper container columnSpacing={4}>
      <Grid item xs={6}>
        {renderMainSpecs()}
        {renderDriverAssistPackages()}
      </Grid>
      <Grid item xs={6}>
        {renderVehicleTrims()}
      </Grid>
    </SpecsWrapper>
  );
}

export default Specifications;
