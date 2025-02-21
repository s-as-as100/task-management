import Dashboard from "@/Components/Dashboard/Dashboard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Dashboard />
    </div>
  );
}
