import aws from 'aws-sdk';

aws.config.update({
    accessKeyId: 'AKIAXBOFHEUCHSV2T7UV',
    secretAccessKey: '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',
    region: 'us-west-1',
  });

  const s3 = new aws.S3();
  const bucketName = 'evstreet';

  const downloadImageFromS3 = async (key) => {
    const params = {
      Bucket: bucketName,
      Key: key,
    };
    const response = await s3.getObject(params).promise();
    return `data:${response.ContentType};base64,${response.Body.toString('base64')}`;
  };

  export default downloadImageFromS3;