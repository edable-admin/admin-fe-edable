import { Timestamp, serverTimestamp } from "firebase/firestore"
import { CreateOrgModel } from "src/app/models/MockDataModels"



export const mockData:CreateOrgModel[] =
  [
    {

        "name": "Barry's Bakehouse",
        "description": "",
        "summary": "Barry's bakehouse provides baked goods and fresh bread daily for local customers. Barry also provides free baked goods to the local nursing home",
        "activeStatus": true,
        "ABN": "27384372612",
        "phone": "0428473288",
        "website": "https://www.barriesbakery.com.au",
        "img": "https://source.unsplash.com/m9pzwmxm2rk",
        "Items":[
          {
          "name": "Mix Master",
          "summary":"This stand mixer has dishwasher safe parts.",
          "description":"It has a white finish. Make a variety of foods and baked goods at home with this Sunbeam stand mixer.",
          "initialPrice": 930,
          "activeStatus": true,
          "dateCompleted":null,
          "createdAt": serverTimestamp(),
          "img": "https://source.unsplash.com/BdiWV88jQFg",
          "itemDonations":[
            {
                "IsRefunded": false,
                "amount":137,
                "comment":"all the best",
                "donorPublicName":"Udall",
                "donationDate": new Timestamp(1664333419, 0),
                "private":{
                    "paypalTransactionId":"8e0409c7-c5de-46f7-a306-987950388cc6",
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"uviscovi0@guardian.co.uk",
                    "howHeardOther":"Other",
                    "mailingAddress":"108 Gina Street",
                    "name":"Udall Viscovi",
                    "phoneNumber":"473-520-6405"
                }
            },
            {
                "IsRefunded": false,
                "amount":163,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"Gertruda",
                "donationDate": new Timestamp(1655231030, 0),
                "private":{
                    "paypalTransactionId":"f402226a-8d7f-4042-abd7-c73082e7a0d6",
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"gfollin1@ocn.ne.jp",
                    "howHeardOther":"Other",
                    "mailingAddress":"3 Blaine Terrace",
                    "name":"Gertruda Follin",
                    "phoneNumber":"511-715-7999"
                }
            },
            {
                "IsRefunded": false,
                "amount":88,
                "comment":"all the best",
                "donorPublicName":"Demetrius",
                "donationDate": new Timestamp(1662417632, 0),
                "private":{
                    "paypalTransactionId":"6bdab878-a3ef-456a-9e1f-8be46fa30f4c",
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"dcicconetti2@hp.com",
                    "howHeardOther":"Other",
                    "mailingAddress":"5263 Petterle Terrace",
                    "name":"Demetrius Cicconetti",
                    "phoneNumber":"678-703-5954"
                }
            },
            {
                "IsRefunded": false,
                "amount":126,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"Lanny",
                "donationDate": new Timestamp(1642509465, 0),
                "private":{
                    "paypalTransactionId":"223d2b9e-868e-464d-8836-102cecfc08a5",
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"lbeecker3@hugedomains.com",
                    "howHeardOther":"Instagram",
                    "mailingAddress":"6 Elgar Point",
                    "name":"Lanny Beecker",
                    "phoneNumber":"559-606-6407"
                }
            },
            {
                "IsRefunded": false,
                "amount":27,
                "comment":"amazing company good work",
                "donorPublicName":"Peggie",
                "donationDate": new Timestamp(1654025557, 0),
                "private":{
                    "paypalTransactionId":"8553146c-223c-4eaf-88d5-669f6bd78867",
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"ptilling4@unesco.org",
                    "howHeardOther":"Other",
                    "mailingAddress":"683 Scott Lane",
                    "name":"Peggie Tilling",
                    "phoneNumber":"863-936-1681"
                }
            },
            {
                "IsRefunded": false,
                "amount":158,
                "comment":"all the best",
                "donorPublicName":"Thaddus",
                "donationDate": new Timestamp(1648038292, 0),
                "private":{
                    "paypalTransactionId":"41560e29-dfc1-45ec-b624-aa420d551a6d",
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"tchanner5@salon.com",
                    "howHeardOther":"Instagram",
                    "mailingAddress":"3105 American Ash Park",
                    "name":"Thaddus Channer",
                    "phoneNumber":"483-422-8683"
                }
            },
            {
                "IsRefunded": false,
                "amount":57,
                "comment":"all the best",
                "donorPublicName":"Gregorio",
                "donationDate": new Timestamp(1644735096, 0),
                "private":{
                    "paypalTransactionId":"880c2ac1-361b-4081-86f4-3fbd9d7a2e8d",
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"gdoust6@ucla.edu",
                    "howHeardOther":"Other",
                    "mailingAddress":"8755 Dahle Pass",
                    "name":"Gregorio Doust",
                    "phoneNumber":"488-477-9253"
                }
            },
            {
                "IsRefunded": false,
                "amount":92,
                "comment":"amazing company good work",
                "donorPublicName":"Bronny",
                "donationDate": new Timestamp(1648142586, 0),
                "private":{
                    "paypalTransactionId":"6df9f2e8-a246-4734-8da7-b64d9b331d6d",
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"bgoman7@wix.com",
                    "howHeardOther":"Instagram",
                    "mailingAddress":"5 Bowman Pass",
                    "name":"Bronny Goman",
                    "phoneNumber":"662-454-9660"
                }
            },
            {
                "IsRefunded": false,
                "amount":120,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"King",
                "donationDate": new Timestamp(1651341565, 0),
                "private":{
                    "paypalTransactionId":"0e52a437-d260-46f1-ab8d-76e6f0adbdab",
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"kdeniskevich8@chicagotribune.com",
                    "howHeardOther":"Instagram",
                    "mailingAddress":"9 Welch Point",
                    "name":"King Deniskevich",
                    "phoneNumber":"833-206-6777"
                }
            }
          ]
          },
          {
          "name": "Industrial Oven",
          "summary":"The Turbofan E33D5 is a high quality digital electric convection oven with a large 5x 1/1 gastronorm capacity.",
          "description":"Suitable for use in restaurants, canteens, bakeries and others, the Turbofan includes all the features you would expect from a commercial convection oven and is ideal for cooking chicken, pastries, bread, pizza and confectionary. The oven is easily programmable and features a water injection mode when steam or moisture is required in your recipe.",
          "initialPrice": 5000,
          "totalDonationCount": 2,
          "totalDonationsValue":142,
          "activeStatus": true,
          "dateCompleted":null,
          "createdAt": serverTimestamp(),
          "img": "https://source.unsplash.com/illedcWylYU",
          "itemDonations":[
            {
              "IsRefunded": false,
              "amount":75,
              "comment":"all the best",
              "donorPublicName":"Gail",
              "donationDate":new Timestamp(1663978109,0),
              "private":{
                  "paypalTransactionId":"5fe5de18-e3da-4b65-928a-b222e4fce05b",
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"graymen0@vistaprint.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"6129 Cherokee Way",
                  "name":"Gail Raymen",
                  "phoneNumber":"559-232-8864"}
              },

          {
              "IsRefunded": false,
              "amount":174,
              "comment":"amazing company good work",
              "donorPublicName":"Fenelia",
              "donationDate":new Timestamp(1664740585,0),
              "private":{
                  "paypalTransactionId":"09d90954-a3f3-4053-b556-f7d117d3c003",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"fjonah1@nbcnews.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"037 Dunning Way",
                  "name":"Fenelia Jonah",
                  "phoneNumber":"820-116-2594"}
              },

          {
              "IsRefunded": false,
              "amount":183,
              "comment":"all the best",
              "donorPublicName":"Vincenz",
              "donationDate":new Timestamp(1664467523,0),
              "private":{
                  "paypalTransactionId":"8f839e06-7acb-466e-b1e0-502fe1e70953",
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"vplanque2@printfriendly.com",
                  "howHeardOther":"Word of Mouth",
                  "mailingAddress":"69 Mayfield Avenue",
                  "name":"Vincenz Planque",
                  "phoneNumber":"147-580-7373"}
              },

          {
              "IsRefunded": false,
              "amount":38,
              "comment":"all the best",
              "donorPublicName":"Debbie",
              "donationDate":new Timestamp(1657708130,0),
              "private":{
                  "paypalTransactionId":"6c320f98-0110-4311-ba99-1f42ff566bba",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"dfasse3@4shared.com",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"18 Golf Course Avenue",
                  "name":"Debbie Fasse",
                  "phoneNumber":"860-334-1106"}
              },

          {
              "IsRefunded": false,
              "amount":116,
              "comment":"all the best",
              "donorPublicName":"Florinda",
              "donationDate":new Timestamp(1663706307,0),
              "private":{
                  "paypalTransactionId":"b5063ed6-e4cf-4b8e-bb1b-c5f0ca3ab4b9",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"ftippin4@toplist.cz",
                  "howHeardOther":"Other",
                  "mailingAddress":"850 Thompson Place",
                  "name":"Florinda Tippin",
                  "phoneNumber":"259-551-3257"}
              },

          {
              "IsRefunded": false,
              "amount":53,
              "comment":"amazing company good work",
              "donorPublicName":"Allene",
              "donationDate":new Timestamp(1654018980,0),
              "private":{
                  "paypalTransactionId":"1f99302f-54be-4e26-b98e-4548e4088847",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"aivanilov5@nih.gov",
                  "howHeardOther":"Other",
                  "mailingAddress":"9045 Anthes Center",
                  "name":"Allene Ivanilov",
                  "phoneNumber":"322-182-5792"}
              },

          {
              "IsRefunded": false,
              "amount":91,
              "comment":"all the best",
              "donorPublicName":"Sharyl",
              "donationDate":new Timestamp(1643961386,0),
              "private":{
                  "paypalTransactionId":"093a101b-2766-4b97-96d7-a0b7e505588d",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"seastment6@flavors.me",
                  "howHeardOther":"Other",
                  "mailingAddress":"221 Division Way",
                  "name":"Sharyl Eastment",
                  "phoneNumber":"376-128-6171"}
              },

          {
              "IsRefunded": false,
              "amount":81,
              "comment":"all the best",
              "donorPublicName":"Rebecka",
              "donationDate":new Timestamp(1644642272,0),
              "private":{
                  "paypalTransactionId":"23b4b45d-239e-40da-bf71-125f54edc74a",
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"rakaster7@nyu.edu",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"1089 Fallview Parkway",
                  "name":"Rebecka Akaster",
                  "phoneNumber":"720-676-3774"}
              },

            {
              "IsRefunded": false,
              "amount": 96,
              "comment": "all the best",
              "donorPublicName": "Cathy",
              "donationDate": new Timestamp(1656446876, 0),
              "private": {
                "paypalTransactionId": "2da31a9a-ca12-4f59-8f01-2a84ed0a4cfc",
                "IsAnon": true,
                "agreeToContact": false,
                "email": "cfontenot8@state.gov",
                "howHeardOther": "Word of Mouth",
                "mailingAddress": "18 Kenwood Junction",
                "name": "Cathy Fontenot",
                "phoneNumber": "267-519-8483"
              }
            }
          ]
          },
          {
          "name": "Blender",
          "summary":"Prepare meals, drinks, sauces, soups and more!",
          "description":"Effortlessly whip up delicious smoothies, breakdown coarse grains, dish up tasty hummus and prep food with the 1500W of power, adjustable speed settings and food grade design of the Kogan 1500W Vitablast Blender.",
          "initialPrice": 1000,
          "totalDonationCount": 0,
          "totalDonationsValue":0,
          "activeStatus": true,
          "dateCompleted":null,
          "createdAt": serverTimestamp(),
          "img": "https://source.unsplash.com/eIqO4P50MeY",
          "itemDonations": [
            {
              "IsRefunded": false,
              "amount":41,
              "comment":"all the best",
              "donorPublicName":"Grover",
              "donationDate": new Timestamp(1650210654, 0),
              "private":{
                  "paypalTransactionId":"89b63dac-a8c3-4783-8753-6b1aed1d1126",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"gmacneilage0@e-recht24.de",
                  "howHeardOther":"Facebook",
                  "mailingAddress":"76 Harper Pass",
                  "name":"Grover MacNeilage",
                  "phoneNumber":"918-537-0825"
              }
          },

          {
              "IsRefunded": false,
              "amount":159,
              "comment":" hopefully you get this product soon",
              "donorPublicName":"Savina",
              "donationDate": new Timestamp(1641267173, 0),
              "private":{
                  "paypalTransactionId":"8cc73b91-899a-4d89-a0a1-b727f33c5c55",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"srosenfrucht1@myspace.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"0 Westend Lane",
                  "name":"Savina Rosenfrucht",
                  "phoneNumber":"237-826-3304"
              }
          },

          {
              "IsRefunded": false,
              "amount":136,
              "comment":"all the best",
              "donorPublicName":"Irita",
              "donationDate": new Timestamp(1645422247, 0),
              "private":{
                  "paypalTransactionId":"7ceb16be-d07d-47da-acba-fe857b89310d",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"ilean2@epa.gov",
                  "howHeardOther":"Word of Mouth",
                  "mailingAddress":"0 Blaine Street",
                  "name":"Irita Lean",
                  "phoneNumber":"177-924-0871"
              }
          },

          {
              "IsRefunded": false,
              "amount":195,
              "comment":" hopefully you get this product soon",
              "donorPublicName":"Bob",
              "donationDate": new Timestamp(1662458534, 0),
              "private":{
                  "paypalTransactionId":"ab4a8e7b-a5e9-4a8d-9f6c-b4b043089980",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"bbarritt3@trellian.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"85 Rieder Way",
                  "name":"Bob Barritt",
                  "phoneNumber":"916-375-2410"
              }
          },

          {
              "IsRefunded": false,
              "amount":35,
              "comment":"amazing company good work",
              "donorPublicName":"Lucita",
              "donationDate": new Timestamp(1659876330, 0),
              "private":{
                  "paypalTransactionId":"2f9ae1b1-0925-458e-b8eb-2e9f80cd652f",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"lgery4@marriott.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"30255 Trailsway Road",
                  "name":"Lucita Gery",
                  "phoneNumber":"169-843-7777"
              }
          },

          {
              "IsRefunded": false,
              "amount":176,
              "comment":" hopefully you get this product soon",
              "donorPublicName":"Dallon",
              "donationDate": new Timestamp(1641303029, 0),
              "private":{
                  "paypalTransactionId":"ac525f8d-5206-4fbd-8ad1-707f58207d7d",
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"ddamerell5@pbs.org",
                  "howHeardOther":"Other",
                  "mailingAddress":"367 5th Alley",
                  "name":"Dallon Damerell",
                  "phoneNumber":"986-105-0420"
              }
          },

          {
              "IsRefunded": false,
              "amount":30,
              "comment":"all the best",
              "donorPublicName":"Larry",
              "donationDate": new Timestamp(1647659361, 0),
              "private":{
                  "paypalTransactionId":"01389cba-8517-4b63-b23d-0d737e02db0d",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"lcutress6@cpanel.net",
                  "howHeardOther":"Other",
                  "mailingAddress":"7328 Logan Terrace",
                  "name":"Larry Cutress",
                  "phoneNumber":"857-978-0053"
              }
          },

          {
              "IsRefunded": false,
              "amount":110,
              "comment":"all the best",
              "donorPublicName":"Keely",
              "donationDate": new Timestamp(1660773292, 0),
              "private":{
                  "paypalTransactionId":"26d022c0-805a-4c9e-aa47-94e5213ad6f6",
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"kdorr7@bbb.org",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"7762 Loftsgordon Junction",
                  "name":"Keely Dorr",
                  "phoneNumber":"641-857-2210"
              }
          },

          {
              "IsRefunded": false,
              "amount":173,
              "comment":"amazing company good work",
              "donorPublicName":"Glynnis",
              "donationDate": new Timestamp(1643468466, 0),
              "private":{
                  "paypalTransactionId":"6ec73870-9718-4777-bd84-a6991b1f87d9",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"gplace8@1und1.de",
                  "howHeardOther":"Other",
                  "mailingAddress":"29257 Jana Point",
                  "name":"Glynnis Place",
                  "phoneNumber":"745-744-8120"
              }
          }
          ]
          },
          {
          "name": "15 x Outdoor Chairs",
          "summary":"Materials: teak wood frame, Viro synthetic cord seat, nylon foot pads.",
          "description":"Open weave design, Highly sanded finish, Suitable for indoor or outdoor under cover and Constructed using solid teak wood with woven Viro waterproof cord seat.",
          "initialPrice": 2000,
          "totalDonationCount": 0,
          "totalDonationsValue":0,
          "activeStatus": true,
          "dateCompleted":null,
          "createdAt": serverTimestamp(),
          "img": "https://source.unsplash.com/fxLTX93WdFg",
          "itemDonations": [
            {
              "IsRefunded": false,
              "amount":155,
              "comment":"all the best",
              "donorPublicName":"Floyd",
              "donationDate": new Timestamp(1646627449,0),
              "private":{
                  "paypalTransactionId":"1bb58e7c-d36c-4a26-be89-c6e96fe2677d",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"fcharlton0@utexas.edu",
                  "howHeardOther":"Word of Mouth",
                  "mailingAddress":"22177 Utah Trail",
                  "name":"Floyd Charlton",
                  "phoneNumber":"245-922-9327"

              }
          },

          {
              "IsRefunded": false,
              "amount":123,
              "comment":"all the best",
              "donorPublicName":"Ruttger",
              "donationDate": new Timestamp(1666334131,0),
              "private":{
                  "paypalTransactionId":"013f2b90-5e8c-46a8-acb8-04fbf69f18e8",
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"rbaines1@msu.edu",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"311 7th Drive",
                  "name":"Ruttger Baines",
                  "phoneNumber":"941-994-6028"

              }
          },

          {
              "IsRefunded": false,
              "amount":104,
              "comment":"amazing company good work",
              "donorPublicName":"Kain",
              "donationDate": new Timestamp(1657063231,0),
              "private":{
                  "paypalTransactionId":"eb751e23-4414-4371-9e13-df8d843d97dc",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"khuskisson2@mayoclinic.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"3 La Follette Terrace",
                  "name":"Kain Huskisson",
                  "phoneNumber":"701-760-1978"

              }
          },

          {
              "IsRefunded": false,
              "amount":17,
              "comment":"all the best",
              "donorPublicName":"Tobye",
              "donationDate": new Timestamp(1648611599,0),
              "private":{
                  "paypalTransactionId":"0df55815-e911-4a2a-8df8-555e8150cd11",
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"teric3@comsenz.com",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"8 Lakeland Terrace",
                  "name":"Tobye Eric",
                  "phoneNumber":"251-356-0253"

              }
          },

          {
              "IsRefunded": false,
              "amount":28,
              "comment":"all the best",
              "donorPublicName":"Lockwood",
              "donationDate": new Timestamp(1661201500,0),
              "private":{
                  "paypalTransactionId":"266e4b34-a1f9-4f8b-8785-0d2115b0a26c",
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"letchingham4@elegantthemes.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"4 Village Green Drive",
                  "name":"Lockwood Etchingham",
                  "phoneNumber":"961-274-7279"

              }
          },

          {
              "IsRefunded": false,
              "amount":187,
              "comment":"amazing company good work",
              "donorPublicName":"Gabriella",
              "donationDate": new Timestamp(1656600921,0),
              "private":{
                  "paypalTransactionId":"08e36170-d175-419c-8712-dd8713bfa951",
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"gkonertz5@huffingtonpost.com",
                  "howHeardOther":"Other",
                  "mailingAddress":"6426 Montana Avenue",
                  "name":"Gabriella Konertz",
                  "phoneNumber":"708-169-9475"

              }
          },

          {
              "IsRefunded": false,
              "amount":189,
              "comment":"amazing company good work",
              "donorPublicName":"Lanae",
              "donationDate": new Timestamp(1642790043,0),
              "private":{
                  "paypalTransactionId":"c56336b2-7f49-4c70-9db8-e2fc212f5a5c",
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"lmadle6@nps.gov",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"327 Bashford Court",
                  "name":"Lanae Madle",
                  "phoneNumber":"903-811-1573"

              }
          },

          {
              "IsRefunded": false,
              "amount":19,
              "comment":" hopefully you get this product soon",
              "donorPublicName":"Barbette",
              "donationDate": new Timestamp(1648829601,0),
              "private":{
                  "paypalTransactionId":"35dd8f7d-5404-4826-a1e0-b948c6a6a33a",
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"bboolsen7@hibu.com",
                  "howHeardOther":"Word of Mouth",
                  "mailingAddress":"7737 Linden Place",
                  "name":"Barbette Boolsen",
                  "phoneNumber":"431-447-9309"

              }
          },

          {
              "IsRefunded": false,
              "amount":176,
              "comment":"all the best",
              "donorPublicName":"Morry",
              "donationDate": new Timestamp(1643064065,0),
              "private":{
                  "paypalTransactionId":"cd4a80bb-827f-4eac-92ee-ad97a7ee05d5",
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"mtocque8@usgs.gov",
                  "howHeardOther":"Instagram",
                  "mailingAddress":"37 Hansons Way",
                  "name":"Morry Tocque",
                  "phoneNumber":"349-698-9341"

              }
          }

          ]
        },
        ],
        "GeneralDonations": [
          {
            "IsRefunded": false,
            "amount":4,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Rebeca",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1662999509,0),
            "private":{
                "paypalTransactionId":"4320b909-9998-4fe4-8b71-21207f385dd1",
                "IsAnon":false,
                "agreeToContact":false,
                "email":"rgodon0@exblog.jp",
                "howHeardOther":"Instagram",
                "mailingAddress":"8 Bellgrove Terrace",
                "name":"Rebeca Godon",
                "phoneNumber":"281-590-1556"
            }
        },
        {
            "IsRefunded": false,
            "amount":56,
            "comment":"all the best",
            "donorPublicName":"Kissee",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1645078546,0),
            "private":{
                "paypalTransactionId":"2359460d-c23b-4028-9559-062cf82bf7fc",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"kwyche1@blog.com",
                "howHeardOther":"Facebook",
                "mailingAddress":"1 Atwood Avenue",
                "name":"Kissee Wyche",
                "phoneNumber":"795-142-8720"
            }
        },
        {
            "IsRefunded": false,
            "amount":15,
            "comment":"amazing company good work",
            "donorPublicName":"Cherin",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1657970746,0),
            "private":{
                "paypalTransactionId":"051ffbfc-6185-4e6a-8478-d4b46aae3904",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"cceccoli2@vk.com",
                "howHeardOther":"Facebook",
                "mailingAddress":"0 Clemons Junction",
                "name":"Cherin Ceccoli",
                "phoneNumber":"703-672-2695"
            }
          },
        {
            "IsRefunded": false,
            "amount":16,
            "comment":"amazing company good work",
            "donorPublicName":"Denver",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1656241838,0),
            "private":{
                "paypalTransactionId":"66c4d3ec-90f6-48d9-81ef-893c912a688e",
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dtomaszewski3@jigsy.com",
                "howHeardOther":"Word of Mouth",
                "mailingAddress":"92387 Harper Lane",
                "name":"Denver Tomaszewski",
                "phoneNumber":"923-410-1267"
            }
        },
        {
            "IsRefunded": false,
            "amount":39,
            "comment":"amazing company good work",
            "donorPublicName":"Roddy",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1651619108,0),
            "private":{
                "paypalTransactionId":"74e00dd9-295e-4d66-b2f3-88d8630ca8cd",
                "IsAnon":false,
                "agreeToContact":true,
                "email":"rferenc4@gnu.org",
                "howHeardOther":"Other",
                "mailingAddress":"10 Park Meadow Hill",
                "name":"Roddy Ferenc",
                "phoneNumber":"892-930-7129"
            }
        },
        {
            "IsRefunded": false,
            "amount":65,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Muhammad",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1659982314,0),
            "private":{
                "paypalTransactionId":"58ff812b-27bd-4049-91c5-602af1ea2933",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"mcartwright5@miitbeian.gov.cn",
                "howHeardOther":"Other",
                "mailingAddress":"408 Hoffman Drive",
                "name":"Muhammad Cartwright",
                "phoneNumber":"756-339-9785"
            }
        },
        {
            "IsRefunded": false,
            "amount":4,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Inglebert",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654021992,0),
            "private":{
                "paypalTransactionId":"2b0e11ac-8d5e-429a-b602-cb9d9e0f50c7",
                "IsAnon":false,
                "agreeToContact":true,
                "email":"isone6@lycos.com",
                "howHeardOther":"Facebook",
                "mailingAddress":"31318 Morning Alley",
                "name":"Inglebert Sone",
                "phoneNumber":"793-276-4566"
            }
        },
        {
            "IsRefunded": false,
            "amount":29,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Paloma",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654339932,0),
            "private":{
                "paypalTransactionId":"e6981e9a-e1f8-469c-abc3-f2edf4303318",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"pconrart7@jugem.jp",
                "howHeardOther":"Other",
                "mailingAddress":"981 Clyde Gallagher Drive",
                "name":"Paloma Conrart",
                "phoneNumber":"707-193-2386"
            }
        },
        {
            "IsRefunded": false,
            "amount":30,
            "comment":"all the best",
            "donorPublicName":"Rosetta",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1645185646,0),
            "private":{
                "paypalTransactionId":"b13aacc3-a0a3-4616-b9ca-26e58a0f7da2",
                "IsAnon":false,
                "agreeToContact":false,
                "email":"rolsson8@devhub.com",
                "howHeardOther":"Other",
                "mailingAddress":"92 Marcy Avenue",
                "name":"Rosetta Olsson",
                "phoneNumber":"359-460-0303"
            }
        },
      ],
      "VolunteerDonations": [
        {
          "Monday":true,
          "Tuesday":true,
          "Wednesday":true,
          "Thursday":false,
          "Friday":false,
          "Saturday":false,
          "Sunday":false,
          "howContribute":"true",
          "volunteerAmount":"12",
          "volunteerComment":"true",
          "volunteerDOB":"true",
          "volunteerEmail":"true",
          "volunteerHours":"true",
          "volunteerHowHeard":"true",
          "volunteerName":"true",
          "volunteerOrgName":"true",
          "volunteerPhone":"true",
          "volunteerPostcode":"true",
        }
      ]
    },
    {

        "name": "The Phone Zone",
        "description": "",
        "summary": "The phone zone is a business providing phone repairs and sales.",
        "activeStatus": false,
        "ABN": "49382719557",
        "phone": "0455567982",
        "website": "https://www.phonezone.com",
        "img": "https://source.unsplash.com/6wdRuK7bVTE",
        "Items":[
          {
            "name": "IPhone X",
            "summary":"Excellent smartphone",
            "description":"Unmatched design and build",
            "initialPrice": 350,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/OxvlDO8RwKg"
          },
          {
            "name": "Phone Screen Replacement",
            "summary":"Brand new phone screen",
            "description":"Service for replacing a broken phone screen",
            "initialPrice": 58,
            "totalDonationCount": 0,
            "totalDonationsValue": 0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/6XBEYe3G_08"
          },
          {
            "name": "Screen protection",
            "summary":"Protects your phone from scratches and chips",
            "description":"Add a screen protector to your phone",
            "initialPrice": 20,
            "totalDonationCount": 0,
            "totalDonationsValue": 0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/dQcj0H8BcmU"
          },


        ],
        "GeneralDonations": [
          {
            "IsRefunded": false,
            "amount": 20,
            "comment": "well done I love Trees R us :)",
            "donationDate": serverTimestamp(),
            "donorPublicName": "John",
            "IsSubscribed": false,
            "private": {
              "paypalTransactionId":"18e1edac-51be-4117-bc78-9988d3a42c5b",
              "IsAnon": false,
              "agreeToContact": true,
              "email": "example@john.com.au",
              "howHeardOther": "Facebook",
              "mailingAddress": "16 realgood st realville 3136",
              "name": "John Smith",
              "phoneNumber": "0486723474"
          }
          },
        ]

    },
    {

        "name": "Social Moments",
        "description": "",
        "summary": "Provides yummy social treats",
        "activeStatus": true,
        "ABN": "22999684773",
        "phone": "0433958444",
        "website": "https://social-moments.org/",
        "img": "https://source.unsplash.com/Zyx1bK9mqmA",
        "Items":[
          {
            "name": "SoCrunchees",
            "summary":"Crunchy & Chewy",
            "description":"Anzacz with a crunchy and chewy twitst",
            "initialPrice": 30,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/-FyA5fhIPGI",
            "itemDonations": [
              {
              "IsRefunded": false,
              "amount":33,
              "comment":"amazing company good work",
              "donorPublicName":"Clarke",
              "donationDate": new Timestamp(1657394020,0),
              "private":{
                "paypalTransactionId":"ab2fb931-160c-43d9-bab9-afb9ef5e0783",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"cshrubb0@businessinsider.com",
                "howHeardOther":"Other",
                "mailingAddress":"32433 Lakewood Road",
                "name":"Clarke Shrubb",
                "phoneNumber":"491-298-8252"
              }
              },

              {
              "IsRefunded": false,
              "amount":173,
              "comment":"amazing company good work",
              "donorPublicName":"Brigg",
              "donationDate": new Timestamp(1651681982,0),
              "private":{
                "paypalTransactionId":"dc2fc475-5670-455b-bad4-f8c22f1c16ac",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"bbows1@netvibes.com",
                "howHeardOther":"Instagram",
                "mailingAddress":"499 Waxwing Center",
                "name":"Brigg Bows",
                "phoneNumber":"802-575-0375"
              }
              },

              {
              "IsRefunded": false,
              "amount":121,
              "comment":"all the best",
              "donorPublicName":"Brianne",
              "donationDate": new Timestamp(1649044028,0),
              "private":{
                "paypalTransactionId":"17a0e0f3-651d-42d5-aa27-4ef6154ae659",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"bclink2@google.pl",
                "howHeardOther":"Other",
                "mailingAddress":"9 Daystar Circle",
                "name":"Brianne Clink",
                "phoneNumber":"101-444-3678"
              }
              },

              {
              "IsRefunded": false,
              "amount":97,
              "comment":"all the best",
              "donorPublicName":"Lelah",
              "donationDate": new Timestamp(1657604918,0),
              "private":{
                "paypalTransactionId":"f486291b-173f-4b96-a44d-4d78048b5569",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"lyglesia3@shutterfly.com",
                "howHeardOther":"Other",
                "mailingAddress":"109 Springs Junction",
                "name":"Lelah Yglesia",
                "phoneNumber":"344-746-2557"
              }
              },

              {
              "IsRefunded": false,
              "amount":54,
              "comment":"amazing company good work",
              "donorPublicName":"Agretha",
              "donationDate": new Timestamp(1644609604,0),
              "private":{
                "paypalTransactionId":"87943189-1949-4d39-86e0-a5ca690fd7a1",
                "IsAnon":false,
                "agreeToContact":true,
                "email":"amustill4@csmonitor.com",
                "howHeardOther":"Instagram",
                "mailingAddress":"24 Michigan Crossing",
                "name":"Agretha Mustill",
                "phoneNumber":"665-843-0473"
              }
              },

              {
              "IsRefunded": false,
              "amount":70,
              "comment":"amazing company good work",
              "donorPublicName":"Luca",
              "donationDate": new Timestamp(1655573740,0),
              "private":{
                "paypalTransactionId":"4471b8f7-14ac-4db7-b789-f0a4be4cfe42",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"lbrodley5@ocn.ne.jp",
                "howHeardOther":"Word of Mouth",
                "mailingAddress":"6 Beilfuss Avenue",
                "name":"Luca Brodley",
                "phoneNumber":"729-992-3587"
              }
              },

              {
              "IsRefunded": false,
              "amount":163,
              "comment":"all the best",
              "donorPublicName":"Mallorie",
              "donationDate": new Timestamp(1664908178,0),
              "private":{
                "paypalTransactionId":"4467eb5c-29c3-4ffe-84d7-0d2363138745",
                "IsAnon":false,
                "agreeToContact":true,
                "email":"mdron6@msn.com",
                "howHeardOther":"Other",
                "mailingAddress":"45840 Waxwing Street",
                "name":"Mallorie Dron",
                "phoneNumber":"150-903-1402"
              }
              },

              {
              "IsRefunded": false,
              "amount":68,
              "comment":"amazing company good work",
              "donorPublicName":"Ernst",
              "donationDate": new Timestamp(1662100462,0),
              "private":{
                "paypalTransactionId":"a7da8e95-0ed6-4bfb-81a4-e59cf3c17868",
                "IsAnon":false,
                "agreeToContact":true,
                "email":"ebier7@businesswire.com",
                "howHeardOther":"Facebook",
                "mailingAddress":"5362 Kingsford Street",
                "name":"Ernst Bier",
                "phoneNumber":"556-258-6430"
              }
              },

              {
              "IsRefunded": false,
              "amount":90,
              "comment":" hopefully you get this product soon",
              "donorPublicName":"Pearl",
              "donationDate": new Timestamp(1664419905,0),
              "private":{
                "paypalTransactionId":"88c76342-7bae-46cb-a00b-2c2cc83d5d35",
                "IsAnon":false,
                "agreeToContact":true,
                "email":"pfearney8@hao123.com",
                "howHeardOther":"Facebook",
                "mailingAddress":"1 Debs Junction",
                "name":"Pearl Fearney",
                "phoneNumber":"753-263-1688"
              }
              }
            ]
          },
          {
            "name": "SoTweetees",
            "summary":"Gluten Free",
            "description":"You'll be top of the pecking order with these delicious seed bars.",
            "initialPrice": 72,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/iiQZcCtfpyk",
            "itemDonations": [
              {
                "IsRefunded": false,
                "amount":20,
                "comment":"amazing company good work",
                "donorPublicName":"Jon",
                "donationDate": new Timestamp(1657652338,0),
                "private":{
                    "paypalTransactionId":"cd2b5bb6-8e69-4cc4-ad92-5b687c899636",
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"jwinks0@tripadvisor.com",
                    "howHeardOther":"Other",
                    "mailingAddress":"1741 David Pass",
                    "name":"Jon Winks",
                    "phoneNumber":"955-158-1994"
                }
                },

                {"IsRefunded": false,
                "amount":21,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"Leonid",
                "donationDate": new Timestamp(1664880440,0),
                "private":{
                    "paypalTransactionId":"3b6219d5-173a-4ca5-b357-d94f57cfa62c",
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"lvaux1@vk.com",
                    "howHeardOther":"Word of Mouth",
                    "mailingAddress":"7387 Becker Place",
                    "name":"Leonid Vaux",
                    "phoneNumber":"166-183-3947"
                }
                },

                {"IsRefunded": false,
                "amount":4,
                "comment":"amazing company good work",
                "donorPublicName":"Trixi",
                "donationDate": new Timestamp(1644192641,0),
                "private":{
                    "paypalTransactionId":"1b285836-14fa-452f-94a0-80720d455d1d",
                    "IsAnon":true,
                    "agreeToContact":false,
                    "email":"tmoiser2@istockphoto.com",
                    "howHeardOther":"Other",
                    "mailingAddress":"7742 Larry Terrace",
                    "name":"Trixi Moiser",
                    "phoneNumber":"729-792-6947"
                }
                },

                {"IsRefunded": false,
                "amount":28,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"Rodolphe",
                "donationDate": new Timestamp(1644957222,0),
                "private":{
                    "paypalTransactionId":"ff0d4646-3bdf-411a-a62f-051e2d18833d",
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"rdat3@fema.gov",
                    "howHeardOther":"Other",
                    "mailingAddress":"45313 Bartelt Parkway",
                    "name":"Rodolphe Dat",
                    "phoneNumber":"709-653-9331"
                }
                },

                {"IsRefunded": false,
                "amount":7,
                "comment":"amazing company good work",
                "donorPublicName":"Salvidor",
                "donationDate": new Timestamp(1657673096,0),
                "private":{
                    "paypalTransactionId":"e404c730-f494-4a9b-84fd-e7324612276d",
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"sdi4@about.com",
                    "howHeardOther":"Facebook",
                    "mailingAddress":"89014 Oakridge Point",
                    "name":"Salvidor Di Batista",
                    "phoneNumber":"518-402-4736"

                }
                },

                {"IsRefunded": false,
                "amount":3,
                "comment":"all the best",
                "donorPublicName":"Robers",
                "donationDate": new Timestamp(1663102102,0),
                "private":{
                    "paypalTransactionId":"0f12d583-a122-44b2-95c5-24f5b1db674f",
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"rtideswell5@cnn.com",
                    "howHeardOther":"Instagram",
                    "mailingAddress":"56 Westend Alley",
                    "name":"Robers Tideswell",
                    "phoneNumber":"896-224-1501"

                }
                },

                {"IsRefunded": false,
                "amount":12,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"Doria",
                "donationDate": new Timestamp(1664969284,0),
                "private":{
                    "paypalTransactionId":"f11dae94-1dde-4b1b-a4ce-ba52930c180a",
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"dwherrit6@ehow.com",
                    "howHeardOther":"Facebook",
                    "mailingAddress":"034 Ryan Center",
                    "name":"Doria Wherrit",
                    "phoneNumber":"506-413-1060"

                }
                },

                {"IsRefunded": false,
                "amount":20,
                "comment":"all the best",
                "donorPublicName":"Adena",
                "donationDate": new Timestamp(1642729776,0),
                "private":{
                    "paypalTransactionId":"9b3afadb-3c74-4be3-9df4-8795a8fdd90c",
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"ad7@spotify.com",
                    "howHeardOther":"Other",
                    "mailingAddress":"0504 High Crossing Way",
                    "name":"Adena d' Eye",
                    "phoneNumber":"769-317-6497"

                }
                },

                {"IsRefunded": false,
                "amount":10,
                "comment":" hopefully you get this product soon",
                "donorPublicName":"Shantee",
                "donationDate": new Timestamp(1657811372,0),
                "private":{
                    "paypalTransactionId":"6cb526e0-3092-4c80-be4e-4ab58b0ed641",
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"sosgardby8@so-net.ne.jp",
                    "howHeardOther":"Other",
                    "mailingAddress":"82 Riverside Way",
                    "name":"Shantee Osgardby",
                    "phoneNumber":"251-813-1175"

                }
                }
            ]
          },
          {
            "name": "SoChunky",
            "summary":"Seriously Chunky",
            "description":"New York hits Melbourne.  Sweet and crunchy. Choc chip, nut decadence.",
            "initialPrice": 99,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/rjf4FcmERGc",
            "itemDonations": [
              {
"IsRefunded": false,
"amount":40,
"comment":"all the best",
"donorPublicName":"Jordanna",
"donationDate": new Timestamp(1641580547,0),
"private":{
    "paypalTransactionId":"5764b9dc-e676-4757-8359-a040ba23a893",
    "IsAnon":false,
    "agreeToContact":true,
    "email":"jhurleston0@prlog.org",
    "howHeardOther":"Instagram",
    "mailingAddress":"852 Hoepker Plaza",
    "name":"Jordanna Hurleston",
    "phoneNumber":"920-273-9761"
}
},

{
"IsRefunded": false,
"amount":9,
"comment":"amazing company good work",
"donorPublicName":"Anabelle",
"donationDate": new Timestamp(1655636488,0),
"private":{
    "paypalTransactionId":"2e70b6e7-74f5-4968-ae3c-52375b2828fb",
    "IsAnon":true,
    "agreeToContact":true,
    "email":"aeckels1@spotify.com",
    "howHeardOther":"Word of Mouth",
    "mailingAddress":"9564 3rd Crossing",
    "name":"Anabelle Eckels",
    "phoneNumber":"821-962-6845"
}
},

{
"IsRefunded": false,
"amount":36,
"comment":"amazing company good work",
"donorPublicName":"Beatriz",
"donationDate": new Timestamp(1644206401,0),
"private":{
    "paypalTransactionId":"7c5a963e-f79e-4dcd-b4fe-2cc20035baf1",
    "IsAnon":false,
    "agreeToContact":true,
    "email":"bleheude2@auda.org.au",
    "howHeardOther":"Other",
    "mailingAddress":"1473 Thackeray Plaza",
    "name":"Beatriz Leheude",
    "phoneNumber":"649-381-0722"
}
},

{
"IsRefunded": false,
"amount":16,
"comment":"all the best",
"donorPublicName":"Flossy",
"donationDate": new Timestamp(1656795461,0),
"private":{
    "paypalTransactionId":"94bf5cc4-79df-415b-8645-89e801e47a2d",
    "IsAnon":true,
    "agreeToContact":false,
    "email":"fgallichan3@nih.gov",
    "howHeardOther":"Other",
    "mailingAddress":"8 Spenser Hill",
    "name":"Flossy Gallichan",
    "phoneNumber":"861-659-5989"
}
},

{
"IsRefunded": false,
"amount":5,
"comment":" hopefully you get this product soon",
"donorPublicName":"Glad",
"donationDate": new Timestamp(1663960320,0),
"private":{
    "paypalTransactionId":"54d46767-ce25-46b9-a8d6-569cb32f3659",
    "IsAnon":false,
    "agreeToContact":true,
    "email":"gcaush4@rediff.com",
    "howHeardOther":"Instagram",
    "mailingAddress":"48 Del Mar Terrace",
    "name":"Glad Caush",
    "phoneNumber":"443-714-9330"
}
},

{
"IsRefunded": false,
"amount":8,
"comment":"amazing company good work",
"donorPublicName":"Hilliary",
"donationDate": new Timestamp(1661124396,0),
"private":{
    "paypalTransactionId":"2fd39522-eca2-4054-94ac-4c2d851b1cff",
    "IsAnon":false,
    "agreeToContact":true,
    "email":"hfranzke5@va.gov",
    "howHeardOther":"Other",
    "mailingAddress":"3 Blackbird Plaza",
    "name":"Hilliary Franzke",
    "phoneNumber":"763-621-2959"
}
},

{
"IsRefunded": false,
"amount":25,
"comment":"amazing company good work",
"donorPublicName":"Elijah",
"donationDate": new Timestamp(1647062475,0),
"private":{
    "paypalTransactionId":"c825767e-f4e1-449d-884b-94d26c187810",
    "IsAnon":true,
    "agreeToContact":true,
    "email":"ecockroft6@berkeley.edu",
    "howHeardOther":"Other",
    "mailingAddress":"17 Reinke Park",
    "name":"Elijah Cockroft",
    "phoneNumber":"261-793-5079"
}
},

{
"IsRefunded": false,
"amount":3,
"comment":"amazing company good work",
"donorPublicName":"Delmore",
"donationDate": new Timestamp(1640996852,0),
"private":{
    "paypalTransactionId":"0e957be0-afee-471a-b62b-9829e062aece",
    "IsAnon":true,
    "agreeToContact":true,
    "email":"dcollop7@scribd.com",
    "howHeardOther":"Instagram",
    "mailingAddress":"9423 Tennyson Pass",
    "name":"Delmore Collop",
    "phoneNumber":"552-384-0583"
}
},

{
"IsRefunded": false,
"amount":38,
"comment":"all the best",
"donorPublicName":"Bevin",
"donationDate": new Timestamp(1647578793,0),
"private":{
    "paypalTransactionId":"cb70702a-2812-47ba-81ea-c00fe5fbaa00",
    "IsAnon":false,
    "agreeToContact":true,
    "email":"bgogarty8@canalblog.com",
    "howHeardOther":"Other",
    "mailingAddress":"0401 Clyde Gallagher Way",
    "name":"Bevin Gogarty",
    "phoneNumber":"468-200-6250"
}
}
            ]
          },
        ],
        "GeneralDonations": [
          {
            "IsRefunded": false,
            "amount":42,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Maureene",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1664945008,0),
            "private":{
                "paypalTransactionId":"fd1bbbc8-8ba3-40c7-99a1-422b83a80999",
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mgoodchild0@creativecommons.org",
                "howHeardOther":"Word of Mouth",
                "mailingAddress":"78 Ronald Regan Center",
                "name":"Maureene Goodchild",
                "phoneNumber":"173-872-0975"
            }
            },
            {
            "IsRefunded": false,
            "amount":52,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Dasie",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1659266118,0),
            "private":{
                "paypalTransactionId":"a4df16a3-c7b7-433b-a09d-fcda1654131d",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"dhamlin1@amazon.com",
                "howHeardOther":"Other",
                "mailingAddress":"1 American Ash Pass",
                "name":"Dasie Hamlin",
                "phoneNumber":"446-446-8221"
            }
            },
            {
            "IsRefunded": false,
            "amount":32,
            "comment":"amazing company good work",
            "donorPublicName":"Marjie",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1656960121,0),
            "private":{
                "paypalTransactionId":"eb1312d1-0dcd-48cb-8657-2b6058dee113",
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mbelly2@com.com",
                "howHeardOther":"Facebook",
                "mailingAddress":"1527 Service Place",
                "name":"Marjie Belly",
                "phoneNumber":"660-845-5277"
            }
            },
            {
            "IsRefunded": false,
            "amount":67,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Kiele",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1651609156,0),
            "private":{
                "paypalTransactionId":"9335285c-0a86-4de3-8dc1-42853ba78079",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"karniz3@twitter.com",
                "howHeardOther":"Instagram",
                "mailingAddress":"32058 East Parkway",
                "name":"Kiele Arniz",
                "phoneNumber":"443-203-5449"
            }
            },
            {
            "IsRefunded": false,
            "amount":13,
            "comment":"all the best",
            "donorPublicName":"Abbe",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1644882836,0),
            "private":{
                "paypalTransactionId":"e42a18f5-c986-40cf-b505-195f7b81a896",
                "IsAnon":false,
                "agreeToContact":false,
                "email":"apert4@telegraph.co.uk",
                "howHeardOther":"Other",
                "mailingAddress":"24 Tennessee Way",
                "name":"Abbe Pert",
                "phoneNumber":"602-288-4664"
            }
            },
            {
            "IsRefunded": false,
            "amount":35,
            "comment":"all the best",
            "donorPublicName":"Raphael",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1644246536,0),
            "private":{
                "paypalTransactionId":"a88687a2-5a28-439e-851e-5bbff49146a4",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"rmottershead5@go.com",
                "howHeardOther":"Other",
                "mailingAddress":"9 South Lane",
                "name":"Raphael Mottershead",
                "phoneNumber":"549-497-6438"
            }
            },
            {
            "IsRefunded": false,
            "amount":61,
            "comment":"all the best",
            "donorPublicName":"Far",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1650420518,0),
            "private":{
                "paypalTransactionId":"57a03c13-b09b-4aee-be02-78a45d39ca7d",
                "IsAnon":true,
                "agreeToContact":false,
                "email":"fbirch6@omniture.com",
                "howHeardOther":"Instagram",
                "mailingAddress":"956 Russell Plaza",
                "name":"Far Birch",
                "phoneNumber":"629-575-1662"
            }
            },
            {
            "IsRefunded": false,
            "amount":66,
            "comment":" hopefully you get this product soon",
            "donorPublicName":"Kaitlynn",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650287587,0),
            "private":{
                "paypalTransactionId":"1dd3d33f-aecb-4d91-8549-9f4ce13c75c4",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"kbattin7@cam.ac.uk",
                "howHeardOther":"Instagram",
                "mailingAddress":"323 Fairfield Pass",
                "name":"Kaitlynn Battin",
                "phoneNumber":"969-613-2221"
            }
            },
            {
            "IsRefunded": false,
            "amount":17,
            "comment":"all the best",
            "donorPublicName":"Candi",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1646747291,0),
            "private":{
                "paypalTransactionId":"763c1f35-4fb5-4fd9-864b-493a2e3eeec1",
                "IsAnon":true,
                "agreeToContact":true,
                "email":"crosengarten8@discuz.net",
                "howHeardOther":"Other",
                "mailingAddress":"8516 Northwestern Terrace",
                "name":"Candi Rosengarten",
                "phoneNumber":"600-739-4243"
            }
            },
        ]
    }
  ]
