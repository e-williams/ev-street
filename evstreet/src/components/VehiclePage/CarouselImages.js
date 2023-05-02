import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import vehicle_gallery_map from "../ImageHandling/VehicleImageMap";
import awsDownloadImages from "../../config/aws";

function CarouselImages({ vehicleModel }) {

  const vehicleImages = vehicle_gallery_map[vehicleModel];

  if (!vehicleImages) {
    return <></>;
  }

  // Component props passed with CarouselItem component below, in this
  // CarouselImages function.
  const CarouselItem = (props) => {

    // Get images from aws_key in VehicleImageMap and store in state
    const [imageData, setImageData] = useState('');

    useEffect(() => {
      const fetchImage = async () => {
        const data = await awsDownloadImages(props.item.aws_key);
          // argument is passed to (key) in aws.js
        setImageData(data);
      };
      fetchImage();
    }, [props.item.aws_key]);

    return (
        <Tooltip
          title={`IMAGE SOURCE: ${props.item.url}`}
          arrow
          placement="bottom-start"
        >
          <img
            src={imageData}
            alt="" // must define alt to avoid compilation warning
            width="670"
            height="380"
          />
        </Tooltip>
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
