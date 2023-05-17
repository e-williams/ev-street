import aws from "aws-sdk";
import evLogo from "../assets/images/evLogoSignXXXSm.png";

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

  /*
   * Try/Catch is the way to handle errors when an API Request fails.
   * In this case the API request is the request to AWS to get the images.
   * If the request fails and there is an error, the error will bubble up all
   * the way to the browser where is can be seen in the console.
   */
  try {
    const response = await s3.getObject(params).promise();

    return `data:${response.ContentType};base64,${response.Body.toString(
      "base64"
    )}`;
  } catch (er) {
    return evLogo;
  }
};

export default downloadImageFromS3;
