import React from "react";
import { Tooltip, CircularProgress } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import VEHICLE_IMAGE_MAP from "../../config/vehicle_image_map";
import styled from "@emotion/styled";
import useFetchVehicleImages from "../../hooks/useFetchImages";

const Spinner = styled(CircularProgress)({
  position: "relative",
  left: "46%",
});

function CarouselImages({ vehicleModel }) {
  const { isLoading, AWSImages } = useFetchVehicleImages(vehicleModel);

  if (!AWSImages) {
    return <></>;
  }

  // Component props passed with CarouselItem component below, in this
  // CarouselImages function.
  const CarouselItem = ({ url, item }) => {
    return (
      <Tooltip
        title={`IMAGE SOURCE: ${item.url}`}
        arrow
        placement="bottom-start"
      >
        <img
          src={url}
          alt="" // must define alt to avoid compilation warning
          width="670"
          height="380"
        />
      </Tooltip>
    );
  };

  if (isLoading) {
    return <Spinner color="success" size={70} />;
  }

  const getImageById = (index) =>
    VEHICLE_IMAGE_MAP[vehicleModel].find((imageData) => {
      return imageData.id === index;
    });

  return (
    <Carousel>
      {AWSImages.map((url, index) => (
        <CarouselItem
          key={`${url}-${index}`}
          url={url}
          item={getImageById(index)}
        />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
