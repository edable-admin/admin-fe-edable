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


//---------------- These models are used for the view-items dialog box ------------//
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
};

export interface ViewItemFinancialDetails{
  itemID: string,
  orgID:string
  name:string;
  initialPrice: number;
  totalDonations: number;
  createdAt?:Timestamp;
};

export interface ViewItemInformation{
  summary: any;
  description: any;
  name: string;
  img: string;
};

export interface ItemDonationsData{
  IsRefunded: boolean,
  amount: number,
  comment: string,
  donationDate: Timestamp,
  donorPublicName:string
}
