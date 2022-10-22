import { FieldValue, Timestamp } from "firebase/firestore"

export interface PrivateDonorDetails {
  paypalTransactionId:string
  IsAnon:boolean,
  agreeToContact:boolean,
  email:string,
  howHeardOther:string,
  mailingAddress:string,
  name:string,
  phoneNumber:string
}

export interface VolunteerDonations{
  Monday: boolean,
  Tuesday: boolean,
  Wednesday: boolean,
  Thursday: boolean,
  Friday: boolean,
  Saturday: boolean,
  Sunday: boolean,
  howContribute: string,
  volunteerAmount:string,
  volunteerComment:string,
  volunteerDOB:string,
  volunteerEmail:string,
  volunteerHours:string,
  volunteerHowHeard:string,
  volunteerName:string,
  volunteerOrgName:string,
  volunteerPhone:string,
  volunteerPostcode:string,
}

export interface Donations {
  IsRefunded:boolean,
  amount:number,
  comment:string,
  donationDate:FieldValue|Date,
  donorPublicName:string,
  private:PrivateDonorDetails
}

export interface GeneralDonation extends Donations {
  IsSubscribed:boolean,
  private: PrivateDonorDetails
}

export interface Item {
  name: string,
  summary:string,
  description:string,
  initialPrice: number,
  totalDonationCount?: number,
  //totalDonations?: number,
  totalDonationsValue?:number,
  activeStatus: boolean,
  img: string,
  dateCompleted?:Timestamp,
  createdAt:FieldValue,
  itemDonations?:Donations[]
}


export interface CreateOrgModel {
    name: string,
    description: string,
    summary: string,
    activeStatus: boolean,
    ABN: string,
    phone: string,
    website: string,
    img: string,
    totalDonationCount?: number,
    totalDonationItems?: number,
    totalDonationsValue?: number,
    totalGeneralDonationsCount?: number,
    totalGeneralDonationsValue?: number,
    totalItemDonationsCount?: number,
    totalItemDonationsValue?: number,
    Items?: Item[],
    GeneralDonations?: GeneralDonation[],
    VolunteerDonations?:VolunteerDonations[]

  }
