import { FieldValue } from "firebase/firestore";

export interface DialogData {
  id: string | undefined;
  name: string | undefined;
  summary: string | undefined;
  activeStatus: boolean;
  ABN: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  img: string | undefined;
  file: any;
  description: string | undefined;
  totalDonationItems: number;
  totalDonations: number;
  itemID: string;
  itemName: string;
  donationItemName: string | undefined;
  donationItemActiveStatus: boolean | undefined;
  donationItemSummary: string | undefined;
  donationItemDescription: string | undefined;
  donationItemTotalDonations: number | undefined;
  initialPrice: number | undefined;
  donationItemImg: string | undefined;
  donationItemOrganisationID: string | undefined;
  donationItemID: string | undefined;
  createdAt?: FieldValue;
  dateCompleted?:FieldValue;
}
