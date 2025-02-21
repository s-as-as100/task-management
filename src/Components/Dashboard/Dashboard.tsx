import Header from "@/CommonComponents/Header/Header";
import SubHeader from "@/CommonComponents/SubHeader/SubHeader";
import React from "react";
import StackBoard from "../StackBaord/StackBoard";
import Divider from "@/UiKit/Divider/Divider";
import styles from "./DashBoard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles["dashboard-layout"]}>
      <div className={styles["header"]}>
        <Header />
      </div>
      <Divider />
      <div className={styles["sub-header"]}>
        <SubHeader />
      </div>

      <div className={styles["dashboard-content"]}>
        <StackBoard />
      </div>
    </div>
  );
};

export default Dashboard;
