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
  zIndex: 30000,
});

function CarouselImages({ vehicleModel }) {
  const [AWSImages, setAWSImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const vehicleImages = vehicle_gallery_map[vehicleModel];

  useEffect(() => {
    awsVehicleImages();
  }, []);

  if (!vehicleImages) {
    return <></>;
  }

  // Goal: to download all the images before showing the carousel
  const awsVehicleImages = async () => {
    setIsLoading(true);

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

  if (isLoading) {
    return <Spinner color="success" size={70} />;
  }

  return (
    <Carousel>
      {AWSImages.map(({ data, status }, index) => (
        <CarouselItem key={`${data}-${index}`} url={data} />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
