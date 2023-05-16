import React, { useEffect, useState } from "react";
import { Tooltip, CircularProgress } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import VEHICLE_IMAGE_MAP from "../../config/vehicle_image_map";
import awsDownloadImages from "../../config/aws";
import styled from "@emotion/styled";

const Spinner = styled(CircularProgress)({
  position: "relative",
  left: "46%",
});

function CarouselImages({ vehicleModel }) {
  const [AWSImages, setAWSImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    awsVehicleImages();
  }, []);

  if (!AWSImages) {
    return <></>;
  }

  // Download all images before showing carousel for proper spinner function
  const awsVehicleImages = async () => {

    const AWSResponse = await Promise.all(
      VEHICLE_IMAGE_MAP[vehicleModel].map((vehicleInfo) => {
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
      {AWSImages.map((url, index) => (
        <CarouselItem key={`${url}-${index}`} url={url} />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
