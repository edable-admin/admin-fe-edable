import { Timestamp, serverTimestamp, FieldValue } from "firebase/firestore"

interface Item {
    name: string,
    summary:string,
    description:string,
    initialPrice: number,
    totalDonationCount: number,
    totalDonations: number,
    totalDonationsValue:number,
    activeStatus: boolean,
    img: string,
    dateCompleted?:Timestamp,
    createdAt:FieldValue
  }


interface CreateOrgModel {
      name: string,
      description: string,
      summary: string,
      activeStatus: boolean,
      ABN: string,
      phone: string,
      website: string,
      img: string,
      totalDonationCount: number,
      totalDonationItems: number,
      totalDonations: number,
      totalDonationsValue: number,
      totalGeneralDonationsCount: number,
      totalGeneralDonationsValue: number,
      totalItemDonationsCount: number,
      totalItemDonationsValue: number,
      Items?: Item[]

    }


export const mockData:CreateOrgModel[] =
  [

      {

          "name": "Tree's R US",
          "description": "",
          "summary": "Tree's R US is an organisation specializing in growing, maintaining and selling trees.",
          "activeStatus": true,
          "ABN": "59683269382",
          "phone": "0455683457",
          "website": "https://www.treesrus.com.au",
          "img": "https://source.unsplash.com/tGTVxeOr_Rs",
          "totalDonationCount": 0,
          "totalDonationItems": 3,
          "totalDonations": 0,
          "totalDonationsValue": 0,
          "totalGeneralDonationsCount": 0,
          "totalGeneralDonationsValue": 0,
          "totalItemDonationsCount": 0,
          "totalItemDonationsValue": 0,
          "Items":[
            {
              "name": "Shovel",
              "summary":"Great Shovel",
              "description":"Good for diggging",
              "initialPrice": 50,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/QwkqiuQLqBc"
            },
            {
              "name": "Chainsaw",
              "summary":"Great Chainsaw",
              "description":"Good for both cutting and pruning",
              "initialPrice": 70,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue": 0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/dQcj0H8BcmU"
            },
            {
              "name": "Excavator",
              "summary":"no matter what type of work you do - excavation, trenching, or truck loading - excavators deliver top performance.",
              "description":"Compact Size for Tight Jobs The Cat 300.9D Mini Excavator delivers power and performance in a compact size to help you work in the tightest applications. Its ability to fit through a narrow doorway makes it an excellent machine for indoor demolition work.",
              "initialPrice": 20000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue": 0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/m-HSQlTw2Og"
            }
          ]
      },
      {

          "name": "Barry's Bakehouse",
          "description": "",
          "summary": "Barry's bakehouse provides baked goods and fresh bread daily for local customers. Barry also provides free baked goods to the local nursing home",
          "activeStatus": true,
          "ABN": "27384372612",
          "phone": "0428473288",
          "website": "https://www.barriesbakery.com.au",
          "img": "https://source.unsplash.com/m9pzwmxm2rk",
          "totalDonationCount": 4,
          "totalDonationItems": 0,
          "totalDonations": 0,
          "totalDonationsValue": 0,
          "totalGeneralDonationsCount": 0,
          "totalGeneralDonationsValue": 0,
          "totalItemDonationsCount": 0,
          "totalItemDonationsValue": 0,
          "Items":[
            {
              "name": "Mix Master",
              "summary":"This stand mixer has dishwasher safe parts.",
              "description":"It has a white finish. Make a variety of foods and baked goods at home with this Sunbeam stand mixer.",
              "initialPrice": 150,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/BdiWV88jQFg"
            },
            {
              "name": "Industrial Oven",
              "summary":"The Turbofan E33D5 is a high quality digital electric convection oven with a large 5x 1/1 gastronorm capacity.",
              "description":"Suitable for use in restaurants, canteens, bakeries and others, the Turbofan includes all the features you would expect from a commercial convection oven and is ideal for cooking chicken, pastries, bread, pizza and confectionary. The oven is easily programmable and features a water injection mode when steam or moisture is required in your recipe.",
              "initialPrice": 5000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/illedcWylYU"
            },
            {
              "name": "Blender",
              "summary":"Prepare meals, drinks, sauces, soups and more!",
              "description":"Effortlessly whip up delicious smoothies, breakdown coarse grains, dish up tasty hummus and prep food with the 1500W of power, adjustable speed settings and food grade design of the Kogan 1500W Vitablast Blender.",
              "initialPrice": 1000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/eIqO4P50MeY"
            },
            {
              "name": "15 x Outdoor Chairs",
              "summary":"Materials: teak wood frame, Viro synthetic cord seat, nylon foot pads.",
              "description":"Open weave design, Highly sanded finish, Suitable for indoor or outdoor under cover and Constructed using solid teak wood with woven Viro waterproof cord seat.",
              "initialPrice": 2000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/fxLTX93WdFg"
            },
          ]
      },
      // {

      //     "name": "The Phone Zone",
      //     "description": "",
      //     "summary": "The phone zone is a business provding phone repairs and sales.",
      //     "activeStatus": false,
      //     "ABN": "49382719557",
      //     "phone": "0455567982",
      //     "website": "https://www.phonezone.com",
      //     "img": "https://source.unsplash.com/6wdRuK7bVTE",
      //     "totalDonationCount": 0,
      //     "totalDonationItems": 0,
      //     "totalDonations": 0,
      //     "totalDonationsValue": 0,
      //     "totalGeneralDonationsCount": 0,
      //     "totalGeneralDonationsValue": 0,
      //     "totalItemDonationsCount": 0,
      //     "totalItemDonationsValue": 0
      // },
      {

          "name": "Social Moments",
          "description": "",
          "summary": "Provides yummy social treats",
          "activeStatus": true,
          "ABN": "22999684773",
          "phone": "0433958444",
          "website": "https://www.socialmoments.com",
          "img": "https://source.unsplash.com/Zyx1bK9mqmA",
          "totalDonationCount": 0,
          "totalDonationItems": 0,
          "totalDonations": 0,
          "totalDonationsValue": 0,
          "totalGeneralDonationsCount": 0,
          "totalGeneralDonationsValue": 0,
          "totalItemDonationsCount": 0,
          "totalItemDonationsValue": 0,
          "Items":[
            {
              "name": "Mix Master",
              "summary":"This stand mixer has dishwasher safe parts.",
              "description":"It has a white finish. Make a variety of foods and baked goods at home with this Sunbeam stand mixer.",
              "initialPrice": 150,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/BdiWV88jQFg"
            },
            {
              "name": "Industrial Oven",
              "summary":"The Turbofan E33D5 is a high quality digital electric convection oven with a large 5x 1/1 gastronorm capacity.",
              "description":"Suitable for use in restaurants, canteens, bakeries and others, the Turbofan includes all the features you would expect from a commercial convection oven and is ideal for cooking chicken, pastries, bread, pizza and confectionary. The oven is easily programmable and features a water injection mode when steam or moisture is required in your recipe.",
              "initialPrice": 5000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/illedcWylYU"
            },
            {
              "name": "Blender",
              "summary":"Prepare meals, drinks, sauces, soups and more!",
              "description":"Effortlessly whip up delicious smoothies, breakdown coarse grains, dish up tasty hummus and prep food with the 1500W of power, adjustable speed settings and food grade design of the Kogan 1500W Vitablast Blender.",
              "initialPrice": 1000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/eIqO4P50MeY"
            },
            {
              "name": "15 x Outdoor Chairs",
              "summary":"Materials: teak wood frame, Viro synthetic cord seat, nylon foot pads.",
              "description":"Open weave design, Highly sanded finish, Suitable for indoor or outdoor under cover and Constructed using solid teak wood with woven Viro waterproof cord seat.",
              "initialPrice": 2000,
              "totalDonationCount": 0,
              "totalDonations": 0,
              "totalDonationsValue":0,
              "activeStatus": true,
              "dateCompleted":null,
              "createdAt": serverTimestamp(),
              "img": "https://source.unsplash.com/fxLTX93WdFg"
            },
          ]
      },
      // {

      //     "name": "EdAble Flowers",
      //     "description": "",
      //     "summary": "This organisation grows edible flowers for distribution",
      //     "activeStatus": false,
      //     "ABN": "48588334938",
      //     "phone": "0493959487",
      //     "website": "https://www.edablelfowers.com",
      //     "img": "https://source.unsplash.com/UvVVnUmW2mQ",
      //     "totalDonationCount": 0,
      //     "totalDonationItems": 0,
      //     "totalDonations": 0,
      //     "totalDonationsValue": 0,
      //     "totalGeneralDonationsCount": 0,
      //     "totalGeneralDonationsValue": 0,
      //     "totalItemDonationsCount": 0,
      //     "totalItemDonationsValue": 0
      // },
      // {

      //     "name": "Windy",
      //     "description": "",
      //     "summary": "Windy is a non for profit organization that helps supply small wind turbines to unpriviled families ",
      //     "activeStatus": true,
      //     "ABN": "49557732843",
      //     "phone": "0438827348",
      //     "website": "https://www.Windy.com",
      //     "img": "https://source.unsplash.com/tTv6Lo5uQVQ",
      //     "totalDonationCount": 0,
      //     "totalDonationItems": 0,
      //     "totalDonations": 0,
      //     "totalDonationsValue": 0,
      //     "totalGeneralDonationsCount": 0,
      //     "totalGeneralDonationsValue": 0,
      //     "totalItemDonationsCount": 0,
      //     "totalItemDonationsValue": 0
      // },
      // {

      //     "name": "Doin Doughies",
      //     "description": "",
      //     "summary": "Doin Doughies bakes fresh donuts for the town of Narrandera daily",
      //     "activeStatus": false,
      //     "ABN": "46392849511",
      //     "phone": "0489334598",
      //     "website": "https://www.doindoughies.com",
      //     "img": "https://source.unsplash.com/EACvtuV2k2E",
      //     "totalDonationCount": 0,
      //     "totalDonationItems": 0,
      //     "totalDonations": 0,
      //     "totalDonationsValue": 0,
      //     "totalGeneralDonationsCount": 0,
      //     "totalGeneralDonationsValue": 0,
      //     "totalItemDonationsCount": 0,
      //     "totalItemDonationsValue": 0
      // }
  ]
