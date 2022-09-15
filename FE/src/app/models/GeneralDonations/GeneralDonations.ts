import { Timestamp } from "firebase/firestore";

export interface GeneralDonations {
  IsError: boolean,
  IsErrorMessage: string,
  IsRefunded: boolean,
  donationDate: Timestamp,
  paidAMT: number,
  refundMessage:string,
  donor: {
    IsAnon: boolean,
    agreeToContact: boolean,
    email: string,
    mailingAddress: string,
    name: string,
    phone: string,
  }
}
