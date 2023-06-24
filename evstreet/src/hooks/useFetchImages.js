import { useCallback, useEffect, useState } from "react";
import awsDownloadImages from "../config/aws";
import VEHICLE_IMAGE_MAP from "../config/vehicle_image_map";

const useFetchVehicleImages = (model, imagePosition = null) => {
  // Custom hook, used by ResultsContainer and CarouselImages
  // Initializes imagePosition to null so if an argument is not received,
  // as is the case with CarouselImages, the variable is not undefined.
  const [isLoading, setIsLoading] = useState(true);
  const [AWSImages, setAWSImages] = useState([]);

  const awsVehicleImage = useCallback(async () => {
    const fetchImages = async () => {
      let images;

      // if an imagePosition parameter is received (as from ResultsContainer),
      // get aws_key for 1st image only.
      if (imagePosition !== null) {
        const { aws_key } = VEHICLE_IMAGE_MAP[model][imagePosition];

        images = await awsDownloadImages(aws_key);
      } else { // get aws_key for all vehicle images
        images = await Promise.all(
          VEHICLE_IMAGE_MAP[model].map((vehicleInfo) => {
            const { aws_key } = vehicleInfo;

            return awsDownloadImages(aws_key);
          })
        );
      }

      setIsLoading(false); // set back to false when stops loading
      setAWSImages(images);
    }

    fetchImages();
  }, [model, imagePosition]);

  useEffect(() => {
    awsVehicleImage();
  }, [awsVehicleImage]);

  return {
    isLoading,
    AWSImages,
  };
};

export default useFetchVehicleImages;