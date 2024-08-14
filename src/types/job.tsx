import Email from "./email.tsx";

export enum JobStatus {
  ghosted,
  inProgress,
  denied,
  approved
}

export interface ApplicationStatus {
  status: JobStatus;
  relatedEmails?: Email[];
}

interface Job {
  applicationUrl: string;
  isJobBoard: boolean;

  // Optional
  jobBoardStatus: string;
  saved?: boolean;

  // Application Status
  applicationStarted?: boolean;
  applicationCompleted?: boolean;
  applicationRoundStatus?: ApplicationStatus[];
}

export default Job;
