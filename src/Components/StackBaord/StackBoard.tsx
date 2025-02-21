import React from "react";
import styles from "./StackBoard.module.scss";
import StatusBarTag from "@/UiKit/StatusBarTag/StatusBarTag";
import { Ellipsis, Plus } from "lucide-react";

type StatusBarTagProps = {
  statusTitle: string;
  totalCountOfStatus: number;
  statusColor: string;
};

const StackBoard: React.FC<StatusBarTagProps> = ({
  statusTitle,
  totalCountOfStatus,
  statusColor,
}) => {
  return (
    <div className={styles["stackboard-container"]}>
      <div className={styles["stack-header"]}>
        <div className={styles["header-left-content"]}>
          <StatusBarTag color={statusColor} />
          <h4>{statusTitle}</h4>
          <span className={styles["total-count-status"]}>
            {totalCountOfStatus}
          </span>
        </div>
        <div className="header-right-content">
          <Plus />
          <Ellipsis />
        </div>
      </div>
      <div className="stack-content">{/* {Pass Card Component} */}</div>
    </div>
  );
};

export default StackBoard;
