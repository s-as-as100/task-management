import React from "react";
import styles from "./StackBoard.module.scss";
import StatusBarTag from "@/UiKit/StatusBarTag/StatusBarTag";
import { Ellipsis, MessageSquare, Paperclip, Plus, User } from "lucide-react";
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
  console.log(groupedTenders, "groupedTender");
  return (
    <div className={styles["stackboard-container"]}>
      {Object.entries(groupedTenders).map(([status, tenders]) => (
        <div key={status} className={styles["stack-column"]}>
          <div className={styles["stack-header"]}>
            <div className={styles["header-left-content"]}>
              <StatusBarTag color={"pink"} />
              <h4>{status}</h4>
              <span className={styles["total-count-status"]}>{2}</span>
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackBoard;
