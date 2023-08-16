import dotenv from 'dotenv';
import aws from 'aws-sdk';
import crypto, { randomBytes } from 'crypto';
import {promisify} from 'util'

dotenv.config();

const region = 'us-west-1';
const bucketName = 'resumes-collection';
const accessKeyId=process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey=process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export async function generateUploadURL(){
    const rawBytes = await randomBytes(16);
    const fileNamex = rawBytes.toString('hex');
     const fileName = `${fileNamex}.pdf`;

    const params = ({
        Bucket: bucketName,
        Key: fileName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}