import React, { useState } from "react";
import Header from "../Common/Header";
import CarouselImages from "./CarouselImages";
import HeaderSelection from "./HeaderSelection";
import Overview from "./Overview";
import Specifications from "./Specifications";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import vehicleData from "../../vehicleData.json";
import { useNavigate } from "react-router-dom";

function VehiclePageContainer() {
  const [isOverview, setIsOverview] = useState(true);

  // Get vehicleId param from the URL.
  const { vehicleId } = useParams();
    // useParams() returns an object of key/value pairs of the dynamic params
    // of the current URL.
    // destructured from: const vehicleId = useParams().vehicleId
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
          <CarouselImages vehicleModel={vehicle.model} />
          <HeaderSelection
            setIsOverview={setIsOverview}
            isOverview={isOverview}
          />
          {isOverview ? <Overview /> : <Specifications />}
        </VehiclePageWrapper>
      </>
    );
  }
}

export default VehiclePageContainer;
