import React, { useState, useEffect, useCallback } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Tooltip, CircularProgress, Box }
  from "@mui/material";
import VEHICLE_IMAGE_MAP from "../../config/vehicle_image_map";
import { useNavigate } from "react-router-dom";
import { priceToDollars, formattedNumbers } from "../../utils/utils";
import awsDownloadImages from "../../config/aws";

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

const SpinnerBox = styled(Box)({
  width: 236,
  height: 134,
})

const Spinner = styled(CircularProgress)({
  position: "relative",
  left: "40%",
  top: "30%",
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
  // Get max or min range, MPGe, 0_60, max_dc_charging of all trims

  const { trim = {} } = filteredVehicleSpecs;
  // destructures trim and wraps it in an object

  const vehicleTrims = Object.values(trim);

  const maxTrims = vehicleTrims.reduce(
    (acc, trim) => {
      if (trim.range > acc.maxRange) {
        acc.maxRange = trim.range;
      }

      if (trim.MPGe > acc.maxMPGe) {
        acc.maxMPGe = trim.MPGe;
      }

      if (trim["0_60"] < acc.minAcceleration || !acc.minAcceleration) {
        acc.minAcceleration = trim["0_60"];
      }

      if (trim.max_dc_charging > acc.maxDcCharging) {
        acc.maxDcCharging = trim.max_dc_charging;
      }

      return acc;
    },
    {
      // initial attribute values per reduce()
      maxRange: null,
      maxMPGe: null,
      minAcceleration: null,
      maxDcCharging: null,
    }
  );

  console.log({ maxTrims });

  // Get trim labels for max/min values
  let maxRangeLabel = [];
  let maxMPGeLabel = [];
  let minAccelerationLabel = [];
  let maxDcChargingLabel = [];

  const { maxRange, maxMPGe, minAcceleration, maxDcCharging } = maxTrims;

  vehicleTrims.forEach((trim) => {
    if (trim.range === maxRange) {
      maxRangeLabel.push(trim.label);
    }
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

  // Get image from aws_key in VehicleImageMap and store in state
  // Only show spinner before image is loaded
  const [AWSImage, setAWSImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { make, model } = filteredVehicleSpecs;

  const awsVehicleImage = useCallback(async () => {

    const fetchImage = async () => {
      const image = await awsDownloadImages(VEHICLE_IMAGE_MAP[model][0].aws_key);
      setIsLoading(false);
      setAWSImage(image);
    };

    fetchImage();
  }, [model]);

  useEffect(() => {
    awsVehicleImage();
  }, [awsVehicleImage]);

  const renderVehicleImage = () => {
    if (isLoading) {
      return (
        <SpinnerBox>
          <Spinner color="success" size={50} />
        </SpinnerBox>
      );
    }

    return (
      <Tooltip
      title={`IMAGE SOURCE: ${VEHICLE_IMAGE_MAP[model][0].url}`}
      arrow
      placement="right-end"
      >
        <ListingImg
          alt={`${make} ${model}`} src={AWSImage} />
      </Tooltip>
    );
  }

  const { base_price, label, weight } = filteredVehicleSpecs.trim.standard;

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
          {renderVehicleImage()}
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
                {maxRange}
                {" mi (EPA est.) - "}
                {maxRangeLabel.join(", ")}
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
