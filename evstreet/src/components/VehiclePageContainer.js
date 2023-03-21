import React, { useState } from 'react';
import Header from './Header';
import VehiclePageCarousel from './VehiclePageCarousel';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import vehicleData from '../vehicleData.json';
import { useNavigate } from 'react-router-dom';

function VehiclePageContainer() {

  // Get vehicleId param from the URL.
  const { vehicleId } = useParams();

  const [vehicle, setVehicle] = useState(
    vehicleData.find((v) => v.id === +vehicleId)
      // Unary plus operator + converts vehicleId from string to num.
  );

  const NoVehicleWrapper = styled(Container)({
    fontFamily: 'Roboto, Verdana, sans-serif',
    marginTop: 40,
    color: '#7e7e7e',
  });

  const NoVehicleTypo = styled(Typography)({
    marginBottom: 6,
    fontSize: 19,
  });

  const StyledNav = styled(Typography)({
    fontSize: 15,
    cursor: 'pointer',
    display: 'inline',
    '&:hover': {
      borderBottom: '1px solid #2db34a',
      color: '#2db34a',
    },
  });

  const navigate = useNavigate();

  const VehiclePageWrapper = styled(Container)({
    fontFamily: 'Roboto, Verdana, sans-serif',
    marginTop: 40,
    color: '#7e7e7e',
  });

  const VehiclePageGrid = styled(Grid)({

  });

  const VehiclePageHeader = styled(Typography)({
    textAlign: 'center',
  })

  if (!vehicle) { // if vehicle evaluates to false
    return (
      <>
        <Header />
        <NoVehicleWrapper>
          <NoVehicleTypo>
            Oops, that vehicle does not exist.
          </NoVehicleTypo>
          <StyledNav onClick={ () => navigate(-1) }>
            Click here to return to the previous page.
          </StyledNav>
        </NoVehicleWrapper>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <VehiclePageWrapper>
          <VehiclePageGrid>
            <Grid item>
              <VehiclePageHeader variant='h5'>
                {vehicle.make} {vehicle.model}
              </VehiclePageHeader>
              <VehiclePageCarousel />

            </Grid>
          </VehiclePageGrid>
        </VehiclePageWrapper>
      </>
    );
  }
}

export default VehiclePageContainer;