import React from "react";
import styles from "./StackBoard.module.scss";
import StatusBarTag from "@/UiKit/StatusBarTag/StatusBarTag";
import {
  Calendar,
  Ellipsis,
  MessageSquare,
  Paperclip,
  Plus,
  User,
} from "lucide-react";
import { TenderCardData } from "../../tenderApiData";
import { groupTendersByStatus } from "@/utils";
import TenderCard from "../TenderCard/TenderCard";
type StatusBarTagProps = {
  statusTitle: string;
  totalCountOfStatus: number;
  statusColor: string;
};

const StackBoard: React.FC<StatusBarTagProps> = () => {
  const groupedTenders = groupTendersByStatus(TenderCardData);

  console.log(groupedTenders["Completed"].length, "groupedTender");

  return (
    <div className={styles["stackboard-container"]}>
      {Object.entries(groupedTenders).map(([status, tenders]) => (
        <div key={status} className={styles["stack-column"]}>
          <div className={styles["stack-header"]}>
            <div className={styles["header-left-content"]}>
              <StatusBarTag color={"pink"} />
              <h4>{status}</h4>
              <span className={styles["total-count-status"]}>
                {tenders.length}
              </span>
            </div>
            <div className={styles["header-right-content"]}>
              <Plus />
              <Ellipsis />
            </div>
          </div>
          <div className={styles["tender-card-container"]}>
            {tenders.map((tender, index) => (
              <TenderCard
                key={index}
                progressIcon={<StatusBarTag color="orange" />}
                progressName={tender.tenderStatus}
                statusIcon={<Ellipsis />}
                tenderName={tender.tenderName}
                tenderDetails={tender.tenderDescription}
                assignedTo={"Abhishek"}
                assignedIcon={<User size={"15"} />}
                date={tender.date}
                dateIcon={<Calendar size={"15"} />}
                noOfComments={tender.noOfComment}
                commentIcon={<MessageSquare size={"15"} />}
                priority={tender.priority}
                noOfFiles={tender.noOfiles}
                fileIcon={<Paperclip size={"15"} />}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackBoard;
