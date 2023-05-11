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
  zIndex: 30000,
});

function CarouselImages({ vehicleModel }) {
  const [AWSImages, setAWSImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const vehicleImages = vehicle_gallery_map[vehicleModel];

  useEffect(() => {
    awsVehicleImages();
  }, []);

  if (!vehicleImages) {
    return <></>;
  }

  // REMOVE THIS FUNCTION just for testing
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Goal: to download all the images before showing the carousel
  const awsVehicleImages = async () => {
    // REMOVE THIS DELAY
    await delay(4000);

    const AWSResponse = await Promise.all(
      vehicle_gallery_map[vehicleModel].map((vehicleInfo) => {
        const { aws_key } = vehicleInfo;

        return awsDownloadImages(aws_key);
      })
    );

    setIsLoading(false);
    setAWSImages(AWSResponse);
  };

  // Component props passed with CarouselItem component below, in this
  // CarouselImages function.
  const CarouselItem = ({ url }) => {
    return (
      <>
        <Tooltip title={`IMAGE SOURCE: ${url}`} arrow placement="bottom-start">
          <>
            <img
              src={url}
              alt="" // must define alt to avoid compilation warning
              width="670"
              height="380"
            />
          </>
        </Tooltip>
      </>
    );
  };

  console.log({ isLoading });
  if (isLoading) {
    return <Spinner color="success" size={70} />;
  }

  return (
    <Carousel>
      {AWSImages.map((url, index) => (
        <CarouselItem key={`${url}-${index}`} url={url} />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
