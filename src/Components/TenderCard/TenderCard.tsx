import React from "react";
import styles from "./Tender.module.scss";

interface TenderProps {
  progressIcon: React.ReactNode;
  progressName: string;
  statusIcon: React.ReactNode;
  tenderName: string;
  tenderDetails: string;
  assignedTo: string;
  assignedIcon: React.ReactNode;
  date: string;
  dateIcon: React.ReactNode;
  commentIcon: React.ReactNode;
  priority: "High" | "Medium" | "Low";
  noOfFiles: number;
  fileIcon: React.ReactNode;
  noOfComments: number;
}

// Reusable TenderCard component
const TenderCard: React.FC<TenderProps> = ({
  progressIcon,
  progressName,
  statusIcon,
  tenderName,
  tenderDetails,
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
      <p className={styles["tender-details"]}>{tenderDetails}</p>
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
