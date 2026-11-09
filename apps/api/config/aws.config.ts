export default () => ({
  aws: {
    region: process.env.AWS_REGION || 'ap-south-1',
    s3Bucket: process.env.AWS_S3_BUCKET || 'hrms-documents',
  },
});
