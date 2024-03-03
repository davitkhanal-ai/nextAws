import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const sclient = new S3Client([
  {
    region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCES_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_KEY,
    },
  },
]);

async function uploadFileToS3(file, fileName) {
  const fileBuffer = file;
  console.log(fileName);
}
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    //file check
    if (!file) {
      return NextResponse.json({ error: "File not present" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(file.name);
    return NextResponse.json({ success: "Hello got file" });
  } catch (error) {
    return NextResponse.json({ error: "Hello got error" });
  }
}
