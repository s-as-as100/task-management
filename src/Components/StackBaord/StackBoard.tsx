"use client";
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
import { useRouter, useSearchParams } from "next/navigation";

const StackBoard: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const groupedTenders = groupTendersByStatus(TenderCardData);

  const params = new URLSearchParams(searchParams);

  const statusColors: { [key: string]: string } = {
    "In Progress": "orange",
    "Not Started": "red",
  };

  const handleTenderDetails = (id: string) => {
    params.set("id", id);
    router.push(`/tenderDetails?${params.toString()}`);
  };

  return (
    <div className={styles["stackboard-container"]}>
      {Object.entries(groupedTenders).map(([status, tenders]) => (
        <div key={status} className={styles["stack-column"]}>
          <div className={styles["stack-header"]}>
            <div className={styles["header-left-content"]}>
              <StatusBarTag color={statusColors[status] || "gray"} />
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
            {tenders.map((tender, index) => {
              return (
                <div
                  key={tender.id}
                  onClick={() => handleTenderDetails(tender.id)}
                >
                  <TenderCard
                    key={index}
                    progressIcon={
                      <StatusBarTag color={statusColors[status] || "gray"} />
                    }
                    progressName={tender.tenderStatus}
                    statusIcon={<Ellipsis />}
                    tenderName={tender.tenderName}
                    tenderDescription={tender.tenderDescription}
                    assignedTo={"Abhishek"}
                    assignedIcon={<User size={"15"} />}
                    date={tender.date}
                    dateIcon={<Calendar size={"15"} />}
                    noOfComments={2}
                    commentIcon={<MessageSquare size={"15"} />}
                    priority={tender.priority}
                    fileIcon={<Paperclip size={"15"} />}
                    noOfFiles={1}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackBoard;
