import { Timestamp } from "firebase/firestore";

export interface GeneralDonations {
  IsSubscribed?: boolean,
  IsRefunded?: boolean,
  comment?:string,
  donationDate?: Timestamp;
  donorPublicName?: String;
  amount?: number;
  orgName?: string;
  orgID?: string;
  donationID?: string;
}
export interface Donation {
  IsSubscribed?: boolean,
  IsRefunded?: boolean,
  comment?:string,
  donationDate?: Timestamp;
  donorPublicName?: string;
  amount?: number;
  orgName?: string;
  orgID?: string;
  donationID?: string;
}
