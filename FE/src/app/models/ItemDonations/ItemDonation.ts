import { Timestamp } from "firebase/firestore";

export interface ItemDonations {
  IsRefunded?: boolean,
  donationDate?: Timestamp,
  amount?: number,
  orgName?:string,
  comment?:string,
  donorPublicName?:string  
}