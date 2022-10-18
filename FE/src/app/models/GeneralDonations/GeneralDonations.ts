import { Timestamp } from "firebase/firestore";

export interface GeneralDonations {
  IsSubscribed?: boolean,
  IsRefunded?: boolean,
  comment?:string,
  donationDate?: Date;
  donorPublicName?: String;
  amount?: number;
  orgName?: string;
  orgID?: string;
  donationID?: string;
}
