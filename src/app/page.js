import Image from "next/image";
import styles from "./page.module.css";
import { NextResponse } from "next/server";
import S3UploadForm from "@/app/components/S3UploadForm";
import DisplayS3File from "@/app/api/viewFile/view";

export default function Home() {
  return (
    <main className={styles.main}>
      <DisplayS3File />
      <S3UploadForm />
    </main>
  );
}
