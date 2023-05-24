import { useCallback, useEffect, useState } from "react";
import awsDownloadImages from "../config/aws";
import VEHICLE_IMAGE_MAP from "../config/vehicle_image_map";

const useFetchVehicleImages = (model, imagePosition = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [AWSImages, setAWSImages] = useState([]);

  const awsVehicleImage = useCallback(async () => {
    const fetchImages = async () => {
      let images;

      if (imagePosition !== null) {
        const { aws_key } = VEHICLE_IMAGE_MAP[model][imagePosition];

        images = await awsDownloadImages(aws_key);
      } else {
        images = await Promise.all(
          VEHICLE_IMAGE_MAP[model].map((vehicleInfo) => {
            const { aws_key } = vehicleInfo;

            return awsDownloadImages(aws_key);
          })
        );
      }

      setIsLoading(false);
      setAWSImages(images);
    };

    fetchImages();
  }, [model]);

  useEffect(() => {
    awsVehicleImage();
  }, [awsVehicleImage]);

  console.log({ AWSImages });

  return {
    isLoading,
    AWSImages,
  };
};

export default useFetchVehicleImages;
