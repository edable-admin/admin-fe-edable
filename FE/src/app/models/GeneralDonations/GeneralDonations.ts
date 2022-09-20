import { Timestamp } from "firebase/firestore";

export interface GeneralDonations {
  IsSubscribed?: boolean,
  IsRefunded?: boolean,
  donationDate?: Timestamp,
  paidAMT?: number,
  refundMessage?:string,
  comment?:string,
  donorPublicName?:string  
}
