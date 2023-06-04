import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Typography,
  Tooltip,
  CircularProgress,
  Box,
} from "@mui/material";
import VEHICLE_IMAGE_MAP from "../../config/vehicle_image_map";
import LABEL_MAP from "../../config/results_label_map";
import { useNavigate } from "react-router-dom";
import { priceToDollars, formattedNumbers } from "../../utils/utils";
import useFetchVehicleImages from "../../hooks/useFetchImages";

const ResultsWrapper = styled(Paper)({
  backgroundColor: "#f9f9f9",
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
});

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
  const { make, model } = filteredVehicleSpecs;

  const { isLoading, AWSImages } = useFetchVehicleImages(model, 0);
    // destructures isLoading and AWSImages from returned result of
    // useFetchVehicleImages().
    // 2nd arguement 0 becomes imagePosition (index) in custom hook
    // useFetchVehicleImages().

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

  const MAX_SPECS_LABEL_MAP = [
    {
      label: "Range: ",
      data: maxRange,
      units: " mi (EPA est.) - ",
      maxLabel: maxRangeLabel,
    },
    {
      label: "Fuel Economy (MPGe): ",
      data: maxMPGe,
      units: " (EPA est.) - ",
      maxLabel: maxMPGeLabel,
    },
    {
      label: "Acceleration (0-60): ",
      data: minAcceleration,
      units: " s - ",
      maxLabel: minAccelerationLabel,
    },
    {
      label: "Max Charging: ",
      data: maxDcCharging,
      units: " kW - ",
      maxLabel: maxDcChargingLabel,
    },
  ];

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
        <ListingImg alt={`${make} ${model}`} src={AWSImages} />
      </Tooltip>
    );
  }

  const renderDriverAssistanceValue = () => {
    if (filteredVehicleSpecs.driver_assistance_packages === "no") {
      return <ListingSpecs>none</ListingSpecs>
    }
    return <ListingSpecs>yes</ListingSpecs>
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

            {Object.entries(filteredVehicleSpecs).map(([label, value]) => {
              // Object.entries(filteredVehicleSpecs) returns array of arrays:
              // [ ['id, 0], ['make', 'TESLA'], ...]
              // label and value iterators take on array values
              if (!LABEL_MAP[label]) {
                return <Grid item key={`${label} ${value}`} />;
              }

              return (
                <SpecsRows item key={`${label} ${value}`}>
                  <BoldTypo>
                    {LABEL_MAP[label].label}
                    {": "}
                  </BoldTypo>
                  <ListingSpecs>{LABEL_MAP[label].data(value)}</ListingSpecs>
                </SpecsRows>
              );
            })}
          </Grid>
        </Grid>

        <Grid item sx={{ mt: 2.5 }}>
          <Grid container direction={"column"}>
            {MAX_SPECS_LABEL_MAP.map((specs) => {
              return (
                <SpecsRows item key={specs.label}>
                  <BoldTypo>{specs.label}</BoldTypo>
                  <ListingSpecs>
                    {specs.data}
                    {specs.units}
                    {specs.maxLabel.join(", ")}
                    {" trim"}
                  </ListingSpecs>
                </SpecsRows>
              );
            })}

            <SpecsRows item>
              <BoldTypo>Driver Assistance System: </BoldTypo>
              {renderDriverAssistanceValue()}
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