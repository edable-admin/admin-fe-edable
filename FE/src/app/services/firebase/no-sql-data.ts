import { serverTimestamp } from "firebase/firestore";

export const noSQLData = {
  Organisations: [
    {
      name: "Flowers",
      summary: "we sell flowers",
      description: "our flowers are amazing.",
      activeStatus: true,
      ABN: "11111111111",
      phone: "0422678287",
      website: "www.flowers.com.au",
      img: "",
      totalDonationItems: 0,
      totalDonations:0
    }
  ],
  GeneralDonationsSummary: [
    {
      totalGeneralDonations: 0,
      numberOfDonations:0
    }
  ],
  GeneralDonations: [
    {
      paidAMT: 100,
      donationDate: serverTimestamp(),
      IsError: false,
      IsErrorMessage:"",
      IsRefunded: false,
      refundMessage: "",
      donor: {
        name:"Jane Smith",
        email: "flowers@example.com",
        mailingAddress: "16 test rd testmont",
        phone: "0411362890",
        IsAnon: false,
        agreeToContact:true
      }
    }
  ],
  Items: [
    {
      name: "flower",
      summary: "this is a flower",
      img: "",
      initialPrice: 120,
      totalDonation: 0,
      createdAt: serverTimestamp(),
      dateCompleted: null,
      activeStatus:true

    }
  ],
  ItemDonations: [
    {
      paidAMT: 20,
      donationDate: serverTimestamp(),
      IsError: false,
      errorMessage: "",
      IsRefunded: false,
      refundMessage: "",
      donor: {
        name:"Jane Smith",
        email: "flowers@example.com",
        mailingAddress: "16 test rd testmont",
        phone: "0411362890",
        IsAnon: false,
        agreeToContact:true
      }
    }
  ]


}
