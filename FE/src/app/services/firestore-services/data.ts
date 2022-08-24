import { serverTimestamp } from "firebase/firestore";

export const data =
{
  optionOne: {
    donors: [
      {
        agreeToContact: false,
        email: "test@example.com",
        isAnon: false,
        mailingAddress: "16 test st testville",
        name: "Mary Smith",
        phone:"0411342781"
      },
      {
        agreeToContact: true,
        email: "test@example.com",
        isAnon: false,
        mailingAddress: "16 test st testville",
        name: "James Smith",
        phone:"0411342781"
      },
      {
        agreeToContact: true,
        email: "test@example.com",
        isAnon: true,
        mailingAddress: "16 test st testville",
        name: "Bart Smith",
        phone:"0411342781"
      },
      {
        agreeToContact: false,
        email: "test@example.com",
        isAnon: false,
        mailingAddress: "16 test st testville",
        name: "Greg Smith",
        phone:"0411342781"
      },
    ],
    orgs:[
      {
        ABN: "12345678910",
        activeStatus: true,
        description: "hello i'm an org",
        img: "test",
        name: "flowers co",
        phone: "0411367209",
        summary: "Flowers are cool",
        totalDonationItems: 0,
        totalDonations:0
      },
      {
        ABN: "1234523",
        activeStatus: false,
        description: "car co",
        img: "carlogo",
        name: "cars R Us",
        phone: "000",
        summary: "Cars are out business",
        totalDonationItems: 0,
        totalDonations:0
      },
      {
        ABN: "12345678910",
        activeStatus: true,
        description: "trying things",
        img: "try",
        name: "shoe store",
        phone: "0411367209",
        summary: "Shoes are cool",
        totalDonationItems: 0,
        totalDonations:0
      },
      {
        ABN: "12345678910",
        activeStatus: true,
        description: "hello i'm an org",
        img: "test",
        name: "hat store",
        phone: "0411367209",
        summary: "hats are cool",
        totalDonationItems: 0,
        totalDonations:0
      }
    ],
    itemsOrgOne: [
      {
        name: "Gold Coin",
        summary: "A gold coin",
        description: "this is a fantastic gold coin",
        img: "img.png",
        initialPrice: 3000,
        totalDonations: 0,
        createdAt: serverTimestamp(),
        dateCompleted: '',
        activeStatus: true
      },
      {
        name: "silver Coin",
        summary: "A silver coin",
        description: "this is a fantastic silver coin",
        img: "img.png",
        initialPrice: 50,
        totalDonations: 0,
        createdAt: serverTimestamp(),
        dateCompleted: '',
        activeStatus: true
      },
    ],
    itemsOrgTwo: [
      {
        name: "Oven Baking Device",
        summary: "A Oven Baking Device",
        description: "this is a fantastic Oven Baking Device",
        img: "img.png",
        initialPrice: 500,
        totalDonations: 0,
        createdAt: serverTimestamp(),
        dateCompleted: '',
        activeStatus: true
      },
      {
        name: "Bench",
        summary: "A Bench",
        description: "this is a fantastic Bench",
        img: "img.png",
        initialPrice: 300,
        totalDonations: 0,
        createdAt: serverTimestamp(),
        dateCompleted: '',
        activeStatus: true
      },
      {
        name: "Table",
        summary: "A Table",
        description: "this is a fantastic Table",
        img: "img.png",
        initialPrice: 100,
        totalDonations: 0,
        createdAt: serverTimestamp(),
        dateCompleted: '',
        activeStatus: true
      },
    ]
  }


}
