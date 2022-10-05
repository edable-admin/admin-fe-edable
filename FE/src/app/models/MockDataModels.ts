import { FieldValue, Timestamp } from "firebase/firestore"

export interface PrivateDonorDetails {
  IsAnon:boolean,
  agreeToContact:boolean,
  email:string,
  howHeard:string,
  mailingAddress:string,
  name:string,
  phoneNumber:string
}

export interface Donations {
  IsRefunded:boolean,
  amount:number,
  comment:string,
  donationDate:FieldValue,
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
  totalDonationCount: number,
  totalDonations: number,
  totalDonationsValue:number,
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
    totalDonationCount: number,
    totalDonationItems: number,
    totalDonations: number,
    totalDonationsValue: number,
    totalGeneralDonationsCount: number,
    totalGeneralDonationsValue: number,
    totalItemDonationsCount: number,
    totalItemDonationsValue: number,
    Items?: Item[],
    GeneralDonations?:GeneralDonation[]

  }
