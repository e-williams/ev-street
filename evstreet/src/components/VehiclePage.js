import React, { useState } from 'react';
import Header from './Header';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import vehicleData from '../vehicleData.json';

function VehiclePage() {

  // Get vehicleId param from the URL.
  const { vehicleId } = useParams();

  const [vehicle, setVehicle] = useState(
    vehicleData.find((v) => v.id === +vehicleId)
      // Unary plus operator + converts vehicleId from string to num.
  );

  const VehiclePageWrapper = styled(Grid)({
    fontFamily: 'Roboto, Verdana, sans-serif',
    marginTop: 40,
    marginLeft: 20,
    color: '#7e7e7e',
  });

  const NoVehicleMessage = styled(Typography)({
    marginTop: 40,
    marginLeft: 20,
    color: '#7e7e7e',
  })

  if (!vehicle) { // if vehicle evaluates to false
    return (
      <>
        <Header />
        <NoVehicleMessage variant='h6'>
          Oops, that vehicle does not exist.
        </NoVehicleMessage>
      </>
    );
  }

  return (
    <>
      <Header />
      <VehiclePageWrapper>
        <Grid item>
          <Typography variant='h5'>{vehicle.make} {vehicle.model}</Typography>
        </Grid>
      </VehiclePageWrapper>
    </>
  );
}

export default VehiclePage;