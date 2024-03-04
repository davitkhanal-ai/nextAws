"use client";
import { useEffect, useState } from "react";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const S3_BUCKET_NAME = process.env.NEXT_AWS_S3_BUCKET;
const S3_REGION = process.env.NEXT_AWS_S3_REGION;
const S3_ACCESS_KEY = process.env.NEXT_AWS_S3_ACCESS_KEY;
const S3_SECRET_ACCESS_KEY = process.env.NEXT_AWS_S3_SECRET_KEY;

const DisplayS3File = () => {
  // const [fileUrl, setFileUrl] = useState("");

  // useEffect(() => {
  //   const s3Client = new S3Client({
  //     region: S3_REGION,
  //     credentials: {
  //       accessKeyId: S3_ACCESS_KEY,
  //       secretAccessKey: S3_SECRET_ACCESS_KEY,
  //     },
  //   });

  //   const getObjectParams = {
  //     Bucket: S3_BUCKET_NAME,
  //     Key: "sea.jpg", // Replace "YourFileKey.jpg" with the actual key of your file
  //   };

  //   const getObjectCommand = new GetObjectCommand(getObjectParams);

  //   const getObject = async () => {
  //     try {
  //       console.log("Fetching file from S3...");
  //       const response = await s3Client.send(getObjectCommand);
  //       console.log("File response:", response);
  //       const fileUrl = URL.createObjectURL(
  //         new Blob([await response.Body.arrayBuffer()])
  //       );
  //       console.log("File URL:", fileUrl);
  //       setFileUrl(fileUrl);
  //     } catch (error) {
  //       console.error("Error fetching S3 file:", error);
  //     }
  //   };

  //   getObject();
  // }, []);

  return (
    <div>
      <h1>Hello</h1>
      {/* {fileUrl && <img src={fileUrl} alt="S3 File" />} */}
    </div>
  );
};

export default DisplayS3File;
