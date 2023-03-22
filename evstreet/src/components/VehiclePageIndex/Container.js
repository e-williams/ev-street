import React, { useState } from "react";
import Header from "../common/Header";
import VehiclePageCarousel from "./CarouselImages";
import VehiclePageSelection from "./HeaderSelection";
import VehiclePageOverview from "./Overview";
import VehiclePageSpecs from "./Specs";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import vehicleData from "../../vehicleData.json";
import { useNavigate } from "react-router-dom";

function VehiclePageContainer() {
  const [isOverview, setIsOverview] = useState(true);

  // Get vehicleId param from the URL.
  const { vehicleId } = useParams();
  console.log({ vehicleId });

  const [vehicle, setVehicle] = useState(
    vehicleData.find((v) => v.id === +vehicleId)
    // Unary plus operator + converts vehicleId from string to num.
  );

  const NoVehicleWrapper = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    marginTop: 40,
    color: "#7e7e7e",
  });

  const NoVehicleTypo = styled(Typography)({
    marginBottom: 6,
    fontSize: 19,
  });

  const StyledNav = styled(Typography)({
    fontSize: 15,
    cursor: "pointer",
    display: "inline",
    "&:hover": {
      borderBottom: "1px solid #2db34a",
      color: "#2db34a",
    },
  });

  const navigate = useNavigate();

  const VehiclePageWrapper = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    marginTop: 40,
    color: "#7e7e7e",
  });

  const HeaderTypo = styled(Typography)({
    textAlign: "center",
  });

  if (!vehicle) {
    // if vehicle evaluates to false
    return (
      <>
        <Header />
        <NoVehicleWrapper>
          <NoVehicleTypo>Oops, that vehicle does not exist.</NoVehicleTypo>
          <StyledNav onClick={() => navigate(-1)}>
            Click here to return to the previous page.
          </StyledNav>
        </NoVehicleWrapper>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <VehiclePageWrapper maxWidth="md">
          <HeaderTypo variant="h5">
            {vehicle.make} {vehicle.model}
          </HeaderTypo>
          <VehiclePageCarousel vehicleModel={vehicle.model} />
          <VehiclePageSelection
            setIsOverview={setIsOverview}
            isOverview={isOverview}
          />
          {isOverview ? <VehiclePageOverview /> : <VehiclePageSpecs />}
        </VehiclePageWrapper>
      </>
    );
  }
}

export default VehiclePageContainer;
