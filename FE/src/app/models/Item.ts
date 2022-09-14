import { FieldValue, Timestamp } from "firebase/firestore";

export interface Item {
    summary: any;
    description: any;
    id?: string;
    name: string;
    initialPrice: number;
    totalDonations: number;
    activeStatus: boolean;
    orgID: string;
    img: string;
    createdAt?:FieldValue;
    dateCompleted?:FieldValue;
}

export interface ViewItem {
  summary: any;
  description: any;
  id?: string;
  name: string;
  initialPrice: number;
  totalDonations: number;
  activeStatus: boolean;
  orgID: string;
  img: string;
  createdAt?:Timestamp;
  dateCompleted?:FieldValue;
}

export interface ViewItemInformation{
  summary: any;
  description: any;
  name: string;
  img: string;
}
