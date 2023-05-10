import React, { useEffect, useState } from "react";
import { Tooltip, CircularProgress, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import vehicle_gallery_map from "../ImageHandling/VehicleImageMap";
import awsDownloadImages from "../../config/aws";
import styled from "@emotion/styled";

/*
const SpinnerBox = styled(Box)({
  width: 380,
  height: 670,
  justifyContent: "center",
});
*/

const Spinner = styled(CircularProgress)({
  position: "relative",
  left: "47%",
  bottom: 220,
})

function CarouselImages({ vehicleModel }) {

  const vehicleImages = vehicle_gallery_map[vehicleModel];

  if (!vehicleImages) {
    return <></>;
  }

  // Component props passed with CarouselItem component below, in this
  // CarouselImages function.
  const CarouselItem = (props) => {

    // Get images from aws_key in VehicleImageMap and store in state
    const [imageData, setImageData] = useState("");
    const [imageHasLoaded, setImageHasLoaded] = useState(false);

    useEffect(() => {
      const fetchImage = async () => {
        const data = await awsDownloadImages(props.item.aws_key);
          // argument is passed to (key) in aws.js
        setImageData(data);
      };
      fetchImage();
    }, [props.item.aws_key]);

    const handleImageLoad = () => {
      setImageHasLoaded(true);
    }

    /*
    if (imageData === "") {
      return (
        <SpinnerBox>
          <CircularProgress color="success" />
        </SpinnerBox>
      );
    } else {
    */

    return (
      <>
        <Tooltip
          title={`IMAGE SOURCE: ${props.item.url}`}
          arrow
          placement="bottom-start"
        >
          <img
            src={imageData}
            onLoad={handleImageLoad}
            alt="" // must define alt to avoid compilation warning
            width="670"
            height="380"
          />
        </Tooltip>
        { !imageHasLoaded && <Spinner color="success"/>}
      </>              
    );
  };

  return (
    <Carousel>
      {vehicle_gallery_map[vehicleModel].map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
