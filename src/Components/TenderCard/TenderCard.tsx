import React from "react";
import styles from "./Tender.module.scss";
import { TenderDetails } from "@/types";

// Define TenderCardProps based on TenderDetails
interface TenderCardProps
  extends Pick<
    TenderDetails,
    | "tenderName"
    | "tenderDescription"
    | "date"
    | "priority"
    | "noOfComments"
    | "noOfFiles"
  > {
  progressIcon: React.ReactNode;
  progressName: string;
  statusIcon: React.ReactNode;
  assignedTo: string;
  assignedIcon: React.ReactNode;
  dateIcon: React.ReactNode;
  commentIcon: React.ReactNode;
  fileIcon: React.ReactNode;
  noOfFiles: number;
}

// Reusable TenderCard component
const TenderCard: React.FC<TenderCardProps> = ({
  progressIcon,
  progressName,
  statusIcon,
  tenderName,
  tenderDescription,
  assignedTo,
  assignedIcon,
  date,
  dateIcon,
  commentIcon,
  noOfFiles,
  fileIcon,
  priority,
  noOfComments,
}) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-header"]}>
        <div className={styles["progress"]}>
          {progressIcon} <span>{progressName}</span>
        </div>
        <div className={styles["status-icon"]}>{statusIcon}</div>
      </div>
      <h3 className={styles["tender-name"]}>{tenderName}</h3>
      <p className={styles["tender-details"]}>{tenderDescription}</p>
      <div className={styles["assigned-section"]}>
        <div className={styles["assigned"]}>
          <span>{assignedTo}</span>
        </div>
        <div>{assignedIcon}</div>
      </div>
      <div className={styles["date-priority-section"]}>
        <div className={styles["date"]}>
          {dateIcon} <span>{date}</span>
        </div>
        <div
          className={`${styles["priority"]} ${styles[priority.toLowerCase()]}`}
        >
          {priority}
        </div>
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["footer"]}>
        <div className={styles["comments"]}>
          {commentIcon} <span>{noOfComments} Comments</span>
        </div>
        <div className={styles["files"]}>
          {fileIcon} <span>{noOfFiles} files</span>
        </div>
      </div>
    </div>
  );
};

export default TenderCard;
