import React from "react";
import styles from "./StatusBarTag.module.scss";

interface StatusBarTagProps {
  color: string;
}

const StatusBarTag: React.FC<StatusBarTagProps> = ({ color }) => {
  return (
    <div
      className={styles["status-tag"]}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default StatusBarTag;
