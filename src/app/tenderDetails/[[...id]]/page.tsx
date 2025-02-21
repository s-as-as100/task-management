"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./TenderDetails.module.scss";
import { TenderCardData } from "./../../../tenderApiData";
import {
  Calendar,
  MessageSquare,
  Paperclip,
  User,
  ArrowLeft,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

const TenderDetails: React.FC = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  const tender = TenderCardData.find((tender) => tender.id === id);

  if (!tender) {
    return <p className={styles["not-found"]}>Tender not found</p>;
  }

  return (
    <div className={styles["tender-details-container"]}>
      <button className={styles["back-button"]} onClick={() => router.back()}>
        <ArrowLeft size={20} />
      </button>

      <div className={styles["tender-header"]}>
        <h2>{tender.tenderName}</h2>
        <span
          className={`${styles.priority} ${
            styles[tender.priority.toLowerCase()]
          }`}
        >
          {tender.priority}
        </span>
      </div>

      <div className={styles["assigned-section"]}>
        <div className={styles["assignee"]}>
          <User size={20} />
          <span>{tender.assignee.name}</span>
        </div>
        <div className={styles["date"]}>
          <Calendar size={16} />
          <span>{tender.date}</span>
        </div>
      </div>

      <p className={styles["tender-description"]}>{tender.tenderDescription}</p>

      <div className={styles["attachments"]}>
        <Paperclip size={16} />
        View Attachment
      </div>

      <div className={styles["comments-section"]}>
        <h3>Comments</h3>
        {tender.commentsThread && tender.commentsThread.length > 0 ? (
          <ul>
            {tender.commentsThread.map((comment, index) => (
              <li key={index} className={styles["comment"]}>
                <div className={styles["comment-header"]}>
                  <MessageSquare size={16} />
                  <span className={styles["comment-author"]}>
                    {comment.author}
                  </span>
                  <span className={styles["comment-date"]}>
                    {new Date(comment.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className={styles["comment-text"]}>{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles["no-comments"]}>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default TenderDetails;
