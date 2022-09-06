import { FieldValue } from "firebase/firestore";

export interface Item {
    summary: any;
    description: any;

    id?: string;
    name: string;
    initialPrice: number;
    totalDonations: number;
    activeStatus: boolean;
    orgID: string;
    img: string;
    createdAt?: FieldValue;
    dateCompleted?:FieldValue;

   // id?: string,
   // name?: string;
   // summary?:string;
   // description?:string;
   // initialPrice?: number;
   // totalDonations?: number;
   // activeStatus?: boolean;
   // orgID?: string;
   // img?: string;
   // createdAt?: Date
   // dateCompleted?:Date


  }
