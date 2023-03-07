import React from '@testing-library/user-event';
import { styled } from '@mui/material/styles';
import { Paper, Grid, ButtonBase, Typography } from '@mui/material';
import map_vehicle_to_image from './images';

function ResultsContainer({ filteredVehicleSpecs, lang }) {
  const priceToDollars = () => (
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(filteredVehicleSpecs.base_price)
  );

  const ResultsWrapper = styled(Paper)({
    backgroundColor: '#f9f9f9',
    paddingRight: 14,
    marginBottom: 14,
  });

  const ListingHeader = styled(Typography)({
    textAlign: 'center',
    lineHeight: 1.5,
    pt: 0.4,
    backgroundColor: '#bfffce',
    borderTopLeftRadius: 5,
  });

  const ListingImg = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderBottomLeftRadius: 5,
    alt: 'Tesla Model 3',
  });

  const ListingSpecs = styled(Typography)({
    fontSize: 13.5,
    color: '#626262',
  });

  return (
    <ResultsWrapper elevation={2}>
      <Grid container columnSpacing={2}>
        <Grid item>
          <ListingHeader>
            {filteredVehicleSpecs.make} {filteredVehicleSpecs.model}
          </ListingHeader>
          <ButtonBase sx={{ width: 210, height: 140 }}>
            <ListingImg
              src={map_vehicle_to_image[filteredVehicleSpecs.model]}
                // [filteredVehicleSpecs.model] is used to access
                // map_vehicle_to_image object properties to obtain images
                // imported to images.js, b/c React won't handle relative
                // image reference in src attribute.
            />
          </ButtonBase>
        </Grid>
        <Grid item>
          <ListingSpecs sx={{ mt: 2.9 }}>
            Base Price: { priceToDollars() }
          </ListingSpecs>
          <ListingSpecs>
            Body Style: {filteredVehicleSpecs.body_style}
          </ListingSpecs>
        </Grid>
      </Grid>
    </ResultsWrapper>
  );
}

export default ResultsContainer;
