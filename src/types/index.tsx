export interface Comment {
  author: string;
  text: string;
  timestamp: string;
}

export interface Assignee {
  name: string;
  photo: string;
}

export interface TenderDetails {
  tenderName: string;
  id: string;
  tenderDescription: string;
  assignee: Assignee;
  date: string;
  comments: string;
  attachment: string;
  priority: "High" | "Medium" | "Low";
  tenderStatus: "In Progress" | "Not Started" | "Completed";
  noOfComments: number | undefined;
  noOfFiles: number;
  commentsThread?: Comment[];
}
