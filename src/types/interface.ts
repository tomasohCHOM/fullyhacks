export interface CompanyType {
  id: string;
  name: string;
  imageSrc: string;
  href: string;
  styles: {
    top: string;
    left: string;
    width: string;
    animation: string;
  };
}

export interface MenuType {
  id: string;
  name: string;
  href: string;
  mobile: number;
  desktop: number;
}

export interface TeamMemberCoordinates {
  x: number;
  y: number;
}

export interface TeamEdge {
  start: TeamMemberCoordinates;
  end: TeamMemberCoordinates;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  href: string;
  image: string;
  vertex: TeamMemberCoordinates;
  textBelow: boolean;
}

export interface TeamType {
  tag: string;
  teamMembers: TeamMember[];
}

export interface FAQType {
  id: string;
  question: string;
  answer: string;
}

export interface ApplicationType {
  id: string;
  name: string;
  email?: string;
  preferredEmail: string;
  major: string;
  food: string;
  school: string;
  github: string;
  class: number;
  phone: string;
  degree: string;
  pronouns: string;
  approved: boolean;
  rejected: boolean;
  waitlisted?: boolean;
  skillLevel: number;
  submittedAt: Date;
  updatedAt: Date;
  userId: string;
  applied: boolean;
  status: string;
  requirement: boolean;
  response: string;
}

export enum ApplicationUpdate {
  APPROVE = "approve",
  REJECT = "reject",
  WAITLIST = "waitlist"
}

export enum ApplicationStatus {
  APPROVED = "approved",
  REJECTED = "rejected",
  WAITLISTED = "waitlisted"
}

export interface FeedUserType {
  id: string;
  name: string;
  isAdmin: boolean;
  isOrganizer: boolean;
  discordId: string;
  bio: string;
  school: string;
  application: ApplicationType;
}

export interface AnnouncementType {
  id: string;
  title: string;
  content: string;
  userId: string;
  submittedAt: Date;
  updatedAt: Date;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  school: string;
  discordId?: string;
  bio?: string;
  emailVerified?: Date;
  image: string;
  isAdmin: boolean;
  application?: ApplicationType;
}

export interface FullypackType {
  id: string;
  name: string;
  github?: string;
  link?: string;
  category: string;
  description: string | JSX.Element;
}

export interface EventType {
  id: string;
  name: string;
  date: number;
  startTime: number;
  timeString: string;
  location: string;
  endTime: number;
  row: number;
  type: "event" | "workshop" | "food" | "activity" | "mentorship";
}

export interface TrackType {
  id: string;
  name: string;
  icon?: JSX.Element;
  description: string;
}

export interface University {
  institution: string;
}
