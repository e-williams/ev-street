import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

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
})

function Specifications({ vehicle }) {

  const priceToDollars = (price) => {
    return (
      isNaN(price) ? price :
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(price)
    );
  }

  const formattedNumbers = (number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  }).format(number);

  // Find all the trims for each vehicle.
  // Render with a loop the information of those trims.

  const { trim = {} } = vehicle;
    // destructures trim and wraps it in an object
    // { standard: {..}, awd: {..}, performance: {..} }

  const renderVehicleTrims = () => {
    const vehicleTrims = Object.values(trim);
      // returns an array of the sting-keyed property values of trim
      // [ {base_price: '$42,990'}, {label: 'Rear-Wheel Drive', etc.}, {..},
      // {..} ]

    return vehicleTrims.map((trimInformation, index) => { // index unused

      return (
        <Grid container direction="column" key={trimInformation.label}
          sx={{ mb: 2 }}
        >
          <Grid item>
            <BoldInlineHeader>{trimInformation.label}{" trim"}</BoldInlineHeader>
          </Grid>          
          <Grid item>
            <BoldInlineTypoSm>Base Price:{" "}</BoldInlineTypoSm>
            <InlineTypoSm>
              {priceToDollars(trimInformation.base_price)}
            </InlineTypoSm>
          </Grid>
          {!trimInformation.description ? <Grid item /> :
            <Grid item>
              <BoldInlineTypoSm>{trimInformation.description}</BoldInlineTypoSm>
            </Grid>}
          {!trimInformation.weight ? <Grid item /> :
            <Grid item>
              <BoldInlineTypoSm>Weight:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {formattedNumbers(trimInformation.weight)}{" lbs"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.drivetrain ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Drivetrain:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation.drivetrain}</InlineTypoSm>
            </Grid>}
          {!trimInformation.motors ? <Grid item /> :
            <Grid item>
              <BoldInlineTypoSm>Motors:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation.motors}</InlineTypoSm>
            </Grid>}
          {!trimInformation.hp ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Horsepower:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.hp}{" hp (maximum)"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.torque ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Torque:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation.torque}{" lb-ft"}</InlineTypoSm>
            </Grid>}
          {!trimInformation.range ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Range:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.range}{" mi (EPA est.)"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.fuel_economy ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Fuel Economy:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.fuel_economy}
                {" kWh / 100 miles - combined city/highway (EPA est.)"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.MPGe ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Fuel Economy (MGPe):{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.MPGe}{" - combined city/highway (EPA est.)"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation["0_60"] ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Acceleration (0-60):{" "}</BoldInlineTypoSm>
              <InlineTypoSm>{trimInformation["0_60"]}{" s"}</InlineTypoSm>
            </Grid>}
          {!trimInformation.top_speed ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Top Speed:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.top_speed}
                {" mph (may be electronically limited)"}
              </InlineTypoSm>
              <TypoSm>
                {"Always obey speed and traffic laws."}
              </TypoSm>
            </Grid>}
          {!trimInformation.max_ac_charging ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>
                Maximum Onboard (AC) Charging:{" "}
              </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.max_ac_charging}{" kW"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.max_dc_charging ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>
                Maximum Fast (DC) Charging:{" "}
              </BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.max_dc_charging}{" kW"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.battery_type ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Battery Type:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.battery_type}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.battery_capacity ? <Grid item /> :
            <Grid item>
              <BoldInlineTypoSm>Battery Capacity:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.battery_capacity}{" kWh"}
              </InlineTypoSm>
            </Grid>}
          {!trimInformation.torque ? <Grid item /> : 
            <Grid item>
              <BoldInlineTypoSm>Towing Capacity:{" "}</BoldInlineTypoSm>
              <InlineTypoSm>
                {trimInformation.towing_capacity}{" lbs"}
              </InlineTypoSm>
            </Grid>}
        </Grid>
      );
    });
  }

  const { driver_assistance_packages = {} } = vehicle;

  console.log("driver assistance packages", driver_assistance_packages);

  const renderDriverAssistPackages = () => {
    const driverAssistPackages = Object.values(driver_assistance_packages);
      // returns an array of the sting-keyed property values of
      // driverAssistPackages

    if (driver_assistance_packages === "none") {
      return <InlineTypo>{"none"}</InlineTypo>
    }
    else {
      return driverAssistPackages.map((driverAssistInformation, index) => {
        
        const { description } = driverAssistInformation;
        const items = Object.values(description);

        console.log("description", description);
        console.log("items", items);

        return (
          <Grid container direction="column" rowSpacing={1}
            key={driverAssistInformation.label}
          >
            <Grid item sx={{ mt: "8px" }}>
              <BoldTypoSm>{driverAssistInformation.label}{": "}</BoldTypoSm>

              {items.map((item, index) => {
                <TypoSm key={driverAssistInformation.label}>{items}</TypoSm>
              })}

              {/*            
              <TypoSm>{description.item1}</TypoSm>
              <TypoSm>{description.item2}</TypoSm>
              <TypoSm>{description.item3}</TypoSm>
              <TypoSm>{description.item4}</TypoSm>
              <TypoSm>{description.item5}</TypoSm>
              <TypoSm>{description.item6}</TypoSm>
              <TypoSm>{description.item7}</TypoSm>
              <TypoSm>{description.item8}</TypoSm>
              <TypoSm>{description.item9}</TypoSm>
              <TypoSm>{description.item10}</TypoSm>
              <TypoSm>{description.item11}</TypoSm>
              <TypoSm>{description.item12}</TypoSm>
              <TypoSm>{description.item13}</TypoSm>
              <TypoSm>{description.item14}</TypoSm>
              <TypoSm>{description.item15}</TypoSm>
              <TypoSm>{description.item16}</TypoSm>
              <TypoSm>{description.item17}</TypoSm>
              <TypoSm>{description.item18}</TypoSm>
              <TypoSm>{description.item19}</TypoSm>
              <TypoSm>{description.item20}</TypoSm>
            */}
            </Grid>
          </Grid>
        );
      });
    }
  }

  return (
    <SpecsWrapper container columnSpacing={4}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item>
            <BoldInlineTypo>Make/Model:{" "}</BoldInlineTypo>
            <InlineTypo>
              {vehicle.make}{" "}{vehicle.model}
            </InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Body Style:{" "}</BoldInlineTypo>
            <InlineTypo>{vehicle.body_style}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Seating Capacity:{" "}</BoldInlineTypo>
            <InlineTypo>{vehicle.seating_capacity}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Cargo Space:{" "}</BoldInlineTypo>
            <InlineTypo>{vehicle.cargo_space}{" cu ft"}</InlineTypo>
          </Grid>
          <Grid item>
            <BoldInlineTypo>Luxary Vehicle:{" "}</BoldInlineTypo>
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
