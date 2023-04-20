import React from "@testing-library/user-event";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Tooltip } from "@mui/material";
import VehicleImageMap from "../ImageHandling/VehicleImageMap";
import { useNavigate } from "react-router-dom";
// import { priceToDollars, formattedNumbers } from "../Common/Utils";

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

const SpecsRows = styled(Grid)({
  height: 19,
  color: "#505050",
});

const ListingSpecs = styled(Typography)({
  fontSize: 12.2,
  fontWeight: 300,
  display: "inline",
});

const BoldTypo = styled(Typography)({
  fontSize: 12.2,
  fontWeight: 500,
  display: "inline",
});

function ResultsContainer({ filteredVehicleSpecs, lang }) {
  // Get max range, MPGe, 0_60, supercharging of all trims:
  const { trim = {} } = filteredVehicleSpecs;
  // destructures trim and wraps it in an object

  const MPGeArray = [];
  const accelerationArray = [];
  const DcChargingArray = [];
  const vehicleTrims = Object.values(trim);

  /* TODO:
    If a value is the same as the existing value we want to be able to add all the
    labels that have the same value.
    Look into other edge cases.
  */
  const maxTrims = vehicleTrims.reduce(
    (acc, trim) => {
      if (trim.range > acc.maxRange) {
        acc.maxRange = trim.range;
        acc.maxRangeLabel = trim.label;
      }

      if (trim.MPGe > acc.maxMPGe) {
        acc.maxMPGe = trim.MPGe;
        acc.maxMPGeLabel = trim.label;
      }

      if (trim["0_60"] < acc.minAcceleration || !acc.minAcceleration) {
        acc.minAcceleration = trim["0_60"];
        acc.minAccelerationLabel = trim.label;
      }

      if (trim.max_dc_charging > acc.maxDcCharging) {
        acc.maxDcCharging = trim.max_dc_charging;
        acc.maxDcChargingLabel = trim.label;
      }

      return acc;
    },
    {
      maxRange: null,
      maxRangeLabel: "",
      maxMPGe: null,
      maxMPGeLabel: "",
      minAcceleration: null,
      minAccelerationLabel: "",
      maxDcCharging: null,
      maxDcChargingLabel: "",
    }
  );

  console.log({ maxTrims });

  // returns an array of the sting-keyed property values of trim
  // Loop through trims and add range to rangeArray:
  vehicleTrims.forEach((trim) => {
    MPGeArray.push(trim.MPGe || -1);
    accelerationArray.push(trim["0_60"] || 1000);
    DcChargingArray.push(trim.max_dc_charging || -1);
  });

  // Get max/min value from each array
  const maxMPGe = Math.max(...MPGeArray);
  const minAcceleration = Math.min(...accelerationArray);
  const maxDcCharging = Math.max(...DcChargingArray);

  // Get trim labels for max/min values
  let maxMPGeLabel = [];
  let minAccelerationLabel = [];
  let maxDcChargingLabel = [];
  vehicleTrims.forEach((trim) => {
    if (trim.MPGe === maxMPGe) {
      maxMPGeLabel.push(trim.label);
    }
    if (trim["0_60"] === minAcceleration) {
      minAccelerationLabel.push(trim.label);
    }
    if (trim.max_dc_charging === maxDcCharging) {
      maxDcChargingLabel.push(trim.label);
    }
  });

  const { make, model } = filteredVehicleSpecs;
  const { base_price, label, weight } = filteredVehicleSpecs.trim.standard;

  const priceToDollars = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  const formattedNumbers = (number) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
    }).format(number);

  const navigate = useNavigate();

  return (
    <ResultsWrapper
      elevation={2}
      onClick={() => navigate(`/vehicle/${filteredVehicleSpecs.id}`)}
    >
      <Grid container>
        <Grid item>
          <ListingHeader>
            {make} {model}
          </ListingHeader>
          <Tooltip
            title={`IMAGE SOURCE: ${VehicleImageMap[model][0].url}`}
            arrow
            placement="right-end"
          >
            <ListingImg
              alt={`${make} ${model}`}
              src={VehicleImageMap[model][0].filepath}
              // [filteredVehicleSpecs.model] is used to access
              // VehicleThumbnailMap object properties to obtain
              // images imported to images.js, b/c React won't handle
              // relative image reference in src attribute.
            />
          </Tooltip>
        </Grid>

        <Grid item xs={2.9} sx={{ mt: 2.5, pl: 2 }}>
          <Grid container direction={"column"}>
            <SpecsRows item>
              <BoldTypo>Base Price: </BoldTypo>
              <ListingSpecs>{priceToDollars(base_price)}</ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Body Style: </BoldTypo>
              <ListingSpecs>{filteredVehicleSpecs.body_style}</ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Convertible Option: </BoldTypo>
              <ListingSpecs>
                {filteredVehicleSpecs.convertible_option}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Seating Capacity: </BoldTypo>
              <ListingSpecs>
                {filteredVehicleSpecs.seating_capacity}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Cargo Space: </BoldTypo>
              <ListingSpecs>
                {filteredVehicleSpecs.cargo_space}
                {" cu ft"}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Luxary Vehicle: </BoldTypo>
              <ListingSpecs>{filteredVehicleSpecs.luxary_vehicle}</ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Drivetrain: </BoldTypo>
              <ListingSpecs>{filteredVehicleSpecs.drivetrain}</ListingSpecs>
            </SpecsRows>
          </Grid>
        </Grid>

        <Grid item sx={{ mt: 2.5 }}>
          <Grid container direction={"column"}>
            <SpecsRows item>
              <BoldTypo>Range: </BoldTypo>
              <ListingSpecs>
                {maxTrims.maxRange}
                {" mi (EPA est.) - "}
                {maxTrims.maxRangeLabel}
                {" trim"}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Fuel Economy (MPGe): </BoldTypo>
              <ListingSpecs>
                {maxMPGe}
                {" (EPA est.) - "}
                {maxMPGeLabel.join(", ")}
                {" trim"}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Acceleration (0-60): </BoldTypo>
              <ListingSpecs>
                {minAcceleration}
                {" s - "}
                {minAccelerationLabel.join(", ")}
                {" trim"}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Max Charging: </BoldTypo>
              <ListingSpecs>
                {maxDcCharging}
                {" kW - "}
                {maxDcChargingLabel.join(", ")}
                {" trim"}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Driver Assistance System: </BoldTypo>
              <ListingSpecs>
                {filteredVehicleSpecs.driver_assistance}
              </ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Self-Parking: </BoldTypo>
              <ListingSpecs>{filteredVehicleSpecs.self_parking}</ListingSpecs>
            </SpecsRows>
            <SpecsRows item>
              <BoldTypo>Weight: </BoldTypo>
              <ListingSpecs>
                {formattedNumbers(weight)}
                {" lbs - "}
                {label}
                {" trim"}
              </ListingSpecs>
            </SpecsRows>
          </Grid>
        </Grid>
      </Grid>
    </ResultsWrapper>
  );
}

export default ResultsContainer;
