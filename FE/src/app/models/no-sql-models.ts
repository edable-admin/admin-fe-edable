interface Item {
    ID:string,
    name:string,
    summary?:string,
    description?:string,
    img?:string,
    initialPrice:number,
    totalDonation?:number,
    createdAt:Date,
    dateCompleted?:Date,
    activeStatus:boolean,
    orgID:string,
}

interface Organisation {
    ID:string,
    name:string,
    summary?:string,
    activeStatus:boolean,
    ABN?:number,
    phone?:number,
    website?:string,
    img?:string,
}

export {Item, Organisation}
