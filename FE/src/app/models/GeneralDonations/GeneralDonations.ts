import { Timestamp } from "firebase/firestore";

export interface GeneralDonations {
  id?:string,
  IsSubscribed: boolean,
  IsRefunded: boolean,
  donationDate: Timestamp,
  amount: string,
  refundMessage:string,
  comment:string,
  donorPublicName:string
}
