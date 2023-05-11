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
  try {
    const response = await s3.getObject(params).promise();

    // Return is a String => `data:${response.ContentType};base64,${response.Body.toString("base64")}`
    // Convert the return to be an object.
    // { status: 'success/error', data: 'errorMessage/urlFromAWS' }
    return {
      status: "success",
      data: `data:${response.ContentType};base64,${response.Body.toString(
        "base64"
      )}`,
    };
  } catch (er) {
    return {
      status: "error",
      data: ev6_side,
    };
  }
};

export default downloadImageFromS3;
