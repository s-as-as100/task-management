import React from "react";
import styles from "./SubHeader.module.scss";
import Button from "@/UiKit/Button/Button";

const SubHeader: React.FC = () => {
  return (
    <div className={styles["sub-header-container"]}>
      <div className={styles["header-tab"]}>
        <Button buttonLabel="List View" />
        <Button buttonLabel="Board View" />
      </div>
      <div className={styles["header-tab-left-content"]}>
        <Button buttonLabel="View Tender Details" />
        <Button buttonLabel="Columns" />
      </div>
    </div>
  );
};

export default SubHeader;
