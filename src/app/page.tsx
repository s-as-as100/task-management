import Dashboard from "@/Components/Dashboard/Dashboard";
import styles from "./page.module.scss";
import { Suspense } from "react";
import Image from "next/image";
import loader from "./../assets/images/Spinner-2.gif";
export default function Home() {
  return (
    <Suspense fallback={<Image src={loader} alt="...loader" />}>
      <div className={styles.page}>
        <Dashboard />
      </div>
    </Suspense>
  );
}
