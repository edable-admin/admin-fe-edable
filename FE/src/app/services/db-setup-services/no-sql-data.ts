import { serverTimestamp } from "firebase/firestore";

export const noSQLData = {
  Organisations: [
    {
      name: "Donation Item Test ",
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
      IsRefunded: false,
      IsSubscribed: false,
      refundMessage: "",
      donorPublicName: "jim",
      comment: "hello",
    },
    {
      paidAMT: 398,
      donationDate: serverTimestamp(),
      IsRefunded: false,
      IsSubscribed: false,
      refundMessage: "",
      donorPublicName: "Lorry",
      comment: "hello",
    },
    {
      paidAMT: 122,
      donationDate: serverTimestamp(),
      IsRefunded: true,
      IsSubscribed: false,
      refundMessage: "had to refund due to issues",
      donorPublicName: "Tori",
      comment: "hello",
    },
    {
      paidAMT: 134,
      donationDate: serverTimestamp(),
      IsRefunded: false,
      IsSubscribed: false,
      refundMessage: "",
      donorPublicName: "Obi Wan",
      comment: "hello",
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
      IsRefunded: false,
      refundMessage: "",
      donorPublicName: "Qui Gon",
      comment: "hey",
            
    },
    {
      paidAMT: 40,
      donationDate: serverTimestamp(),
      IsRefunded: false,
      refundMessage: "",
      donorPublicName: "Anikin",
      comment: "hey",
            
    },
    {
      paidAMT: 80,
      donationDate: serverTimestamp(),
      IsRefunded: false,
      refundMessage: "",
      donorPublicName: "Padme",
      comment: "hey",
            
    }
  ]


}
