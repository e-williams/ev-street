import aws from "aws-sdk";
import ev6_side from "../assets/images/vehicles/kia/ev6_side_2023_crop_resize.jpeg";

aws.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "us-west-1",
});

const s3 = new aws.S3();
const bucketName = "evstreet";

const downloadImageFromS3 = async (key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  /**
   * Try/Catch is the way to handle errors when an API Request fails.
   * In this case the API request is the request to AWS to get the images.
   * If the request fails and there is an error, the error will bubble up all
   * the way to the browser, and you will be able to see the error in the
   * console of the browser.
   * However, there are better ways to handle API Request errors, and that is by
   * adding the try/catch around the api request.
   * In this case if the request fails, I am returning a placeholder image
   * so any component that uses this file will always be able to render an image.
   */
  try {
    const response = await s3.getObject(params).promise();

    return `data:${response.ContentType};base64,${response.Body.toString(
      "base64"
    )}`;
  } catch (er) {
    return ev6_side;
  }
};

export default downloadImageFromS3;
