import { FieldValue } from "firebase/firestore";

export interface Item {
    id?: string;
    name: string;
    initialPrice: number;
    totalDonations: number;
    activeStatus: boolean;
    orgID: string;
    img: string;
    createdAt?: FieldValue;
    dateCompleted?:FieldValue;
  }
