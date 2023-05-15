import React from "react";
import { Tooltip } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import VEHICLE_GALLERY_MAP from "../../config/VehicleImageMap";

function CarouselImages({ vehicleModel }) {
  const vehicleImages = VEHICLE_GALLERY_MAP[vehicleModel];

  if (!vehicleImages) {
    return <></>;
  }

  const CarouselItem = (props) => {
    return (
      <Tooltip
        title={`IMAGE SOURCE: ${props.item.url}`}
        arrow
        placement="bottom-start"
      >
        <img
          src={props.item.filepath}
          alt="" // must define alt to avoid compilation warning
          width="670"
          height="380"
        />
      </Tooltip>
    );
  };

  return (
    <Carousel>
      {VEHICLE_GALLERY_MAP[vehicleModel].map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
