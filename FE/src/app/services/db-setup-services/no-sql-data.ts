import { serverTimestamp } from "firebase/firestore";

export const noSQLData = {
  Organisations: [
    {
      name: "Donation Item Test",
      summary: "t",
      description: "t",
      activeStatus: true,
      ABN: "11111111111",
      phone: "0422678287",
      website: "www.wade.com.au",
      img: "",
      totalDonationItems: 0,
      totalDonations:0
    }
  ],
 
  GeneralDonations: [
    {
      paidAMT: 100,
      donationDate: serverTimestamp(),
      IsError: false,
      IsErrorMessage:"",
      IsRefunded: false,
      IsSubscribed: false,
      refundMessage: "",
      donorPublicName: "Ursula",
    },
    {
      paidAMT: 398,
      donationDate: serverTimestamp(),
      IsError: false,
      IsErrorMessage:"",
      IsRefunded: false,
      IsSubscribed: false,
      refundMessage: "",
      donorPublicName: "Jim",
    },
    {
      paidAMT: 122,
      donationDate: serverTimestamp(),
      IsError: false,
      IsErrorMessage:"",
      IsRefunded: true,
      IsSubscribed: false,
      refundMessage: "had to refund due to issues",
      donorPublicName: "Noah",
    },
    {
      paidAMT: 134,
      donationDate: serverTimestamp(),
      IsError: false,
      IsErrorMessage:"",
      IsRefunded: false,
      IsSubscribed: false,
      refundMessage: "",
      donorPublicName: "James",
    }
  ],
  Items: [
    {
      name: "Mouse",
      summary: "this is a spoon",
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
      donorPublicName: "Wilson",
            
    },
    {
      paidAMT: 40,
      donationDate: serverTimestamp(),
      IsError: false,
      errorMessage: "",
      IsRefunded: false,
      refundMessage: "",
      donorPublicName: "Riki",
            
    },
    {
      paidAMT: 80,
      donationDate: serverTimestamp(),
      IsError: false,
      errorMessage: "",
      IsRefunded: false,
      refundMessage: "",
      donorPublicName: "Adam",
            
    }
  ]


}
