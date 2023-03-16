import React, { useState } from 'react';
import Header from './Header';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import vehicleData from '../vehicleData.json';
import { useNavigate } from 'react-router-dom';

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

  const NoVehicleContainer = styled(Container)({
    fontFamily: 'Roboto, Verdana, sans-serif',
    marginTop: 40,
    color: '#7e7e7e',
  });

  const Typo = styled(Typography)({
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

  if (!vehicle) { // if vehicle evaluates to false
    return (
      <>
        <Header />
        <NoVehicleContainer>
          <Typo>
            Oops, that vehicle does not exist.
          </Typo>
          <StyledNav onClick={ () => navigate(-1) }>
            Click here to return to the previous page.
          </StyledNav>
        </NoVehicleContainer>
      </>
    );
  } else {
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
}

export default VehiclePage;