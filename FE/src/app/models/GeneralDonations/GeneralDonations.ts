import { Timestamp } from "firebase/firestore";

export interface GeneralDonations {
  IsSubscribed: boolean,
  IsRefunded: boolean,
  donationDate: Timestamp,
  paidAMT: string,
  refundMessage:string,
  comment:string,
  donorPublicName:string  
}
