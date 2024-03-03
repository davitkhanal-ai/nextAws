import Image from "next/image";
import styles from "./page.module.css";
import { NextResponse } from "next/server";
import S3UploadForm from "@/app/components/S3UploadForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <S3UploadForm />
    </main>
  );
}
