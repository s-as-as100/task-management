import React from "react";
import styles from "./Tender.module.scss";

// Define types for props
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
  noOfComments: number;
  commentIcon: React.ReactNode;
  priority: "High" | "Medium" | "Low";
  noOfFiles: number;
  fileIcon: React.ReactNode;
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
  noOfComments,
  commentIcon,
  noOfFiles,
  fileIcon,
  priority,
}) => {
  return (
    <div className={styles["card-container"]}>
      {/* Progress Section */}
      <div className={styles["card-header"]}>
        <div className={styles["progress"]}>
          {progressIcon} <span>{progressName}</span>
        </div>
        <div className={styles["status-icon"]}>{statusIcon}</div>
      </div>

      {/* Tender Details */}
      <h3 className={styles["tender-name"]}>{tenderName}</h3>
      <p className={styles["tender-details"]}>{tenderDetails}</p>

      {/* Assigned & Date Section */}
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

      {/* Comments & Priority Section */}
      <div className={styles["footer"]}>
        <div className={styles["comments"]}>
          {commentIcon} <span>{noOfComments} Comments</span>
        </div>
        <div className={styles["files"]}>
          {fileIcon} <span>{noOfFiles} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default TenderCard;
