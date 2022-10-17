import { Timestamp } from 'firebase/firestore';

export interface ItemCSVModel {
    Name: string;
    Initial_Price: number;
    Total_Donations_Value: number;
    Amount_Remaining: number;
    Is_Funded: boolean;
    Active_Status: boolean;
    Created_At?: string;
    Date_Completed?: string;
}
export interface ItemGetModel {
    summary: string;
    description: string;
    id?: string;
    name: string;
    initialPrice: number;
    totalDonationsValue: number;
    activeStatus: boolean;
    orgID: string;
    img: string;
    createdAt?: Timestamp;
    dateCompleted?: Timestamp;
}
export interface DonationCSVModel {
    Donation_Date: string,
    Amount: number,
    Donor_Public_Name: string,
    Comment: string,
    Is_Subscribed: boolean,
    Is_Refunded: boolean
}
export interface PrivateData {
    IsAnon: boolean;
    agreeToContact: boolean;
    email: string;
    howHeardOther: string;
    mailingAddress: string;
    name: string;
    paypalTransactionId: string;
    phoneNumber: string;
}
export interface Referral {
    orgId: string;
    donationType: string;
    isAnon: boolean;
    agreeToContact: boolean;
    email: string;
    howHeard: string;
    howHeardOther: string;
    mailingAddress: string;
    name: string;
    phoneNumber: string;
    amount: number;
    comment: string;
    donationDate: string;
}
export interface ReferralCSVModel {
    Org_Name: string;
    Donation_Type: string;
    Is_Anon: boolean;
    Agree_To_Contact: boolean;
    Email: string;
    Referral: string;
    Mailing_Address: string;
    Name: string;
    Phone_Number: string;
}