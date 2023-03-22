import React from "react";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";

import VEHICLE_IMAGE_MAP from "../imagesGallery";

const CarouselItem = (props) => {
  console.log({ props });
  return (
    <Paper>
      <img src={props.item.main} width="400" height="200" />
      <p>{props.item.location}</p>
    </Paper>
  );
};

const VehiclePageCarousel = ({ vehicleModel }) => {
  return (
    <Carousel NextIcon={<ShuffleIcon />} PrevIcon={<ShuffleIcon />}>
      {VEHICLE_IMAGE_MAP[vehicleModel].map((item) => (
        <CarouselItem key={item.location} item={item} />
      ))}
    </Carousel>
  );
};

export default VehiclePageCarousel;
