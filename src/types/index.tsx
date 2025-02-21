interface Assignee {
  name: string;
  photo: string;
}

export interface TenderDetails {
  tenderName: string;
  tenderDescription: string;
  assignee: Assignee;
  date: string;
  comments: string;
  attachment: string;
  priority: "High" | "Medium" | "Low";
  tenderStatus: "In Progress" | "Not Started" | "Completed";
  noOfComment: number;
  noOfiles: number;
}
