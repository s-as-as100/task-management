import React from "react";
import styles from "./StackBoard.module.scss";
import StatusBarTag from "@/UiKit/StatusBarTag/StatusBarTag";
import { Ellipsis, MessageSquare, Paperclip, Plus, User } from "lucide-react";
import TenderCard from "../TenderCard/TenderCard";

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
      <div className="stack-content">
        <TenderCard
          progressIcon={<StatusBarTag color="orange" />}
          progressName={"In Progress"}
          statusIcon={<Ellipsis />}
          tenderName={"Tender Name"}
          tenderDetails={
            "Construction of a 10 km highway with modern infrastructure"
          }
          assignedTo={"Abhishek"}
          assignedIcon={<User size={"15"} />}
          date={"2025-02-20"}
          dateIcon={undefined}
          noOfComments={3}
          commentIcon={<MessageSquare size={"15"} />}
          priority={"High"}
          noOfFiles={6}
          fileIcon={<Paperclip size={"15"} />}
        />
      </div>
    </div>
  );
};

export default StackBoard;
