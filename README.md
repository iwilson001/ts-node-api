This project sets up a basic node and typescript API
Used this guide to start:
https://dev.to/pabath99/a-step-by-step-guide-to-setting-up-a-nodejs-project-with-typescript-4dn2

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import

export const handler = async (event, context) => {
    const myBucketName = 'ian-test-pdf-bucket-lambda';
    const fileName = 'myPdf.txt';
    const fileContent = 'This is my file content';
    const myRegion = 'us-east-2';
    
    const params = {
         Bucket: myBucketName,
         Key: fileName,
         Body: JSON.stringify(fileContent),
         ContentType: 'text/plain',
    };
    
    const config = {region: myRegion};
    
    const client = new S3Client(config);
    
    const command = new PutObjectCommand(params);
    const response = await client.send(command);
    
    console.log('response: ' + response);
};
