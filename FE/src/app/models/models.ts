import { DocumentReference } from "@angular/fire/compat/firestore/interfaces";
import { FieldValue, Timestamp } from "firebase/firestore";

interface Item {
    name:string,
    summary?:string,
    description?:string,
    img?:string,
    initialPrice:number,
    totalDonation?:number,
    createdAt:FieldValue,
    dateCompleted:Timestamp,
    activeStatus:boolean,
    orgID: DocumentReference,
}

interface Organisation {
    name:string,
    summary?:string,
    activeStatus:boolean,
    ABN?:number,
    phone?:number,
    website?:string,
    img?: string,
    totalDonations: number,
    totalDonationItems:number
}

export {Item, Organisation}
