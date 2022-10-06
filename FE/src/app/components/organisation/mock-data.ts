import { Timestamp, serverTimestamp } from "firebase/firestore"
import { CreateOrgModel } from "src/app/models/MockDataModels"



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
        "totalDonationCount": 45,
        "totalDonationItems": 3,
        "totalDonationsValue": 2628,
        "totalGeneralDonationsCount": 2,
        "totalGeneralDonationsValue": 220,
        "totalItemDonationsCount": 43,
        "totalItemDonationsValue": 2408,
        "Items":[
          {
            "name": "Shovel",
            "summary":"Great Shovel",
            "description":"Good for diggging",
            "initialPrice": 400,
            "totalDonationCount": 11,
            "totalDonationsValue":311,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/QwkqiuQLqBc",
            "itemDonations":[
              {
                "IsRefunded": false,
                "amount": 20,
                "comment": "well done I love Trees R us :)",
                "donationDate": serverTimestamp(),
                "donorPublicName": "John",
                "private": {
                  "IsAnon": false,
                  "agreeToContact": true,
                  "email": "example@john.com.au",
                  "howHeard": "Facebook",
                  "mailingAddress": "16 realgood st realville 3136",
                  "name": "John Smith",
                  "phoneNumber": "0486723474"

                }
              },
              {
                "IsRefunded":false,
                "amount":65,
                "comment":"Skid-Steer",
                "donorPublicName":"Vittoria Eccleston",
                "donationDate":serverTimestamp(),
                "private":{
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"tolney0@arstechnica.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"3502 Linden Terrace",
                  "name":"Tabbatha Olney",
                  "phoneNumber":"(519) 9540817"
                },
              },

              {
                  "IsRefunded":false,
                  "amount":77,
                  "comment":"Crawler",
                  "donorPublicName":"Kerwinn Hammerstone",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"fcullnean1@cyberchimps.com",
                    "howHeard":"Google",
                    "mailingAddress":"8 Mandrake Alley",
                    "name":"Faunie Cullnean",
                    "phoneNumber":"(131) 9243948"
                  },
                },

              {
                  "IsRefunded":true,
                  "amount":38,
                  "comment":"Scraper",
                  "donorPublicName":"Matilda Oxlade",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"sferneyhough2@csmonitor.com",
                    "howHeard":"Google",
                    "mailingAddress":"83 Debs Avenue",
                    "name":"Stanislaus Ferneyhough",
                    "phoneNumber":"(150) 8981611"
                  },
                },

              {
                  "IsRefunded":false,
                  "amount":21,
                  "comment":"Dump Truck",
                  "donorPublicName":"Etty Trenfield",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"swalburn3@indiatimes.com",
                    "howHeard":"Twitter",
                    "mailingAddress":"643 Shelley Lane",
                    "name":"Sanderson Walburn",
                    "phoneNumber":"(536) 8462113"
                  },
                },

              {
                  "IsRefunded":true,
                  "amount":90,
                  "comment":"Bulldozer",
                  "donorPublicName":"Gale Stent",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"bveck4@ebay.co.uk",
                    "howHeard":"Facebook",
                    "mailingAddress":"31916 Northland Hill",
                    "name":"Bertie Veck",
                    "phoneNumber":"(912) 4473640"
                  },
                },

              {
                  "IsRefunded":false,
                  "amount":57,
                  "comment":"Crawler",
                  "donorPublicName":"Morena Vanyushkin",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"dmyring5@arstechnica.com",
                    "howHeard":"Twitter",
                    "mailingAddress":"4 Jay Park",
                    "name":"Doll Myring",
                    "phoneNumber":"(165) 5882912"
                  },
                },

              {
                  "IsRefunded":false,
                  "amount":10,
                  "comment":"Dragline",
                  "donorPublicName":"Ad Rossiter",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"pbrammall6@java.com",
                    "howHeard":"Google",
                    "mailingAddress":"5465 Killdeer Pass",
                    "name":"Pearce Brammall",
                    "phoneNumber":"(110) 4189868"
                  },
                },

              {
                  "IsRefunded":true,
                  "amount":39,
                  "comment":"Crawler",
                  "donorPublicName":"Luise Suart",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":false,
                    "email":"azorzi7@stumbleupon.com",
                    "howHeard":"Twitter",
                    "mailingAddress":"14 Troy Road",
                    "name":"Aluino Zorzi",
                    "phoneNumber":"(161) 6102769"
                  },
                },

              {
                  "IsRefunded":false,
                  "amount":29,
                  "comment":"Dump Truck",
                  "donorPublicName":"Beverlee Skoof",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":true,
                    "agreeToContact":true,
                    "email":"nblaschke8@topsy.com",
                    "howHeard":"Twitter",
                    "mailingAddress":"68523 Melby Pass",
                    "name":"Nev Blaschke",
                    "phoneNumber":"(106) 1633854"
                  },
                },

              {
                  "IsRefunded":false,
                  "amount":32,
                  "comment":"Skid-Steer",
                  "donorPublicName":"Rhodia Puddin",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"ccorcut9@alibaba.com",
                    "howHeard":"Twitter",
                    "mailingAddress":"8907 Bayside Road",
                    "name": "Corrianne Corcut",
                    "phoneNumber":"(106) 1633854"}
                }

            ]

          },
          {
            "name": "Chainsaw",
            "summary":"Great Chainsaw",
            "description":"Good for both cutting and pruning",
            "initialPrice": 70,
            "totalDonationCount": 2,
            "totalDonationsValue": 85,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/dQcj0H8BcmU",
            itemDonations: [
              {
                "IsRefunded": false,
                "amount": 20,
                "comment": "well done I love Trees R us :)",
                "donationDate": serverTimestamp(),
                "donorPublicName": "John",
                "private": {
                  "IsAnon": false,
                  "agreeToContact": true,
                  "email": "example@john.com.au",
                  "howHeard": "Facebook",
                  "mailingAddress": "16 realgood st realville 3136",
                  "name": "John Smith",
                  "phoneNumber": "0486723474"

                }
              },
              {
                "IsRefunded":false,
                "amount":65,
                "comment":"Skid-Steer",
                "donorPublicName":"Vittoria Eccleston",
                "donationDate":serverTimestamp(),
                "private":{
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"tolney0@arstechnica.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"3502 Linden Terrace",
                  "name":"Tabbatha Olney",
                  "phoneNumber":"(519) 9540817"
                },
              }
            ]
          },
          {
            "name": "Excavator",
            "summary":"no matter what type of work you do - excavation, trenching, or truck loading - excavators deliver top performance.",
            "description":"Compact Size for Tight Jobs The Cat 300.9D Mini Excavator delivers power and performance in a compact size to help you work in the tightest applications. Its ability to fit through a narrow doorway makes it an excellent machine for indoor demolition work.",
            "initialPrice": 20000,
            "totalDonationCount": 30,
            "totalDonationsValue": 2025,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/m-HSQlTw2Og",
            itemDonations: [
              {
                "IsRefunded":false,
                "amount":7,
                "comment":" well done",
                "donorPublicName":"Ilse Panas,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"ybalch0@census.gov",
                  "howHeard":"Twitter",
                  "mailingAddress":"03254 Fisk Junction",
                  "name":"Yehudi Balch",
                  "phoneNumber":"837-738-7345",

                },
              },

            {
                "IsRefunded":false,
                "amount":155,
                "comment":" Clap Clap",
                "donorPublicName":"Guss Lyttle,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"eodyvoie1@dion.ne.jp",
                  "howHeard":"Twitter",
                  "mailingAddress":"9057 Rusk Lane",
                  "name":"Essa O'Dyvoie",
                  "phoneNumber":"916-763-0985",

                },
            },

            {
                "IsRefunded":false,
                "amount":55,
                "comment":" Clap Clap",
                "donorPublicName":"Felicdad Idle,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"cmatissoff2@marketwatch.com",
                  "howHeard":"Youtube",
                  "mailingAddress":"2 Hintze Parkway",
                  "name":"Clemmie Matissoff",
                  "phoneNumber":"197-239-4258",

                },
            },

            {
                "IsRefunded":false,
                "amount":167,
                "comment":" Clap Clap",
                "donorPublicName":"Pierce Illyes,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"bocoskerry3@tripod.com",
                  "howHeard":"Twitter",
                  "mailingAddress":"995 Dunning Road",
                  "name":"Briano O'Coskerry",
                  "phoneNumber":"518-974-4257",

                },
            },

            {
                "IsRefunded":true,
                "amount":150,
                "comment":" Clap Clap",
                "donorPublicName":"Fremont Huett,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"jwoodthorpe4@devhub.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"4 Monica Point",
                  "name":"Jorrie Woodthorpe",
                  "phoneNumber":"704-634-7765",

                },
            },

            {
                "IsRefunded":false,
                "amount":176,
                "comment":" Clap Clap",
                "donorPublicName":"Pavla Doull,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"rstrange5@deliciousdays.com",
                  "howHeard":"Twitter",
                  "mailingAddress":"9309 Grasskamp Center",
                  "name":"Rabbi Strange",
                  "phoneNumber":"798-951-9029",

                },
            },

            {
                "IsRefunded":false,
                "amount":172,
                "comment":" Clap Clap",
                "donorPublicName":"Judie Cromly,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"vmacdunlevy6@google.com.br",
                  "howHeard":"Facebook",
                  "mailingAddress":"1705 Dayton Center",
                  "name":"Violette MacDunlevy",
                  "phoneNumber":"969-233-6089",

                },
            },

            {
                "IsRefunded":false,
                "amount":42,
                "comment":" Clap Clap",
                "donorPublicName":"Kerry Heigl,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"aibbs7@techcrunch.com",
                  "howHeard":"Twitter",
                  "mailingAddress":"15 Hanson Avenue",
                  "name":"Araldo Ibbs",
                  "phoneNumber":"439-353-3584",

                },
            },

            {
                "IsRefunded":false,
                "amount":200,
                "comment":" well done",
                "donorPublicName":"Eben Healks,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"ihovy8@exblog.jp",
                  "howHeard":"Facebook",
                  "mailingAddress":"46 Loeprich Crossing",
                  "name":"Ingmar Hovy",
                  "phoneNumber":"983-812-7841",

                },
            },

            {
                "IsRefunded":false,
                "amount":366,
                "comment":" Clap Clap",
                "donorPublicName":"Andeee Swenson,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"tesposito9@google.com.au",
                  "howHeard":"Google",
                  "mailingAddress":"74 Norway Maple Circle",
                  "name":"Tessy Esposito",
                  "phoneNumber":"502-504-5111",

                },
            },

            {
                "IsRefunded":true,
                "amount":129,
                "comment":"Good Job",
                "donorPublicName":"Mari Meineking,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"mmattesa@list-manage.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"6244 Monica Center",
                  "name":"Melloney Mattes",
                  "phoneNumber":"846-709-2368",

                },
            },

            {
                "IsRefunded":true,
                "amount":298,
                "comment":" Clap Clap",
                "donorPublicName":"Tiffie Murison,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"bgartinb@noaa.gov",
                  "howHeard":"Youtube",
                  "mailingAddress":"770 Glacier Hill Way",
                  "name":"Boothe Gartin",
                  "phoneNumber":"383-626-8417",

                },
            },

            {
                "IsRefunded":true,
                "amount":283,
                "comment":" Clap Clap",
                "donorPublicName":"Ash Gowlett,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"abissettc@vistaprint.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"2712 Luster Point",
                  "name":"Adrienne Bissett",
                  "phoneNumber":"956-484-2091",

                },
            },

            {
                "IsRefunded":false,
                "amount":124,
                "comment":" well done",
                "donorPublicName":"Claudie Sommerville,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"rbollomd@shinystat.com",
                  "howHeard":"Google",
                  "mailingAddress":"3481 Sage Terrace",
                  "name":"Rani Bollom",
                  "phoneNumber":"668-767-4311",

                },
            },

            {
                "IsRefunded":true,
                "amount":311,
                "comment":"Good Job",
                "donorPublicName":"Celinka Heckner,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"cgiamoe@washington.edu",
                  "howHeard":"Twitter",
                  "mailingAddress":"98 Manitowish Terrace",
                  "name":"Cymbre Giamo",
                  "phoneNumber":"159-964-8113",

                },
            },

            {
                "IsRefunded":false,
                "amount":11,
                "comment":" well done",
                "donorPublicName":"Conant Bridgwater,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"jcainsf@edublogs.org",
                  "howHeard":"Twitter",
                  "mailingAddress":"1642 7th Point",
                  "name":"Joel Cains",
                  "phoneNumber":"953-271-2261",

                },
            },

            {
                "IsRefunded":false,
                "amount":283,
                "comment":" well done",
                "donorPublicName":"Marv Rivard,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"emitchinerg@comcast.net",
                  "howHeard":"Youtube",
                  "mailingAddress":"16 Oak Valley Avenue",
                  "name":"Ebony Mitchiner",
                  "phoneNumber":"140-945-9438",

                },
            },

            {
                "IsRefunded":true,
                "amount":364,
                "comment":" Clap Clap",
                "donorPublicName":"Starr Minchenton,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"lsnaph@howstuffworks.com",
                  "howHeard":"Twitter",
                  "mailingAddress":"3086 Coolidge Parkway",
                  "name":"Laverna Snap",
                  "phoneNumber":"694-263-6585",

                },
            },

            {
                "IsRefunded":false,
                "amount":107,
                "comment":" Clap Clap",
                "donorPublicName":"Dyana Bambrick,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"atrunchioni@spiegel.de",
                  "howHeard":"Twitter",
                  "mailingAddress":"49 Clarendon Circle",
                  "name":"Augie Trunchion",
                  "phoneNumber":"846-731-0667",

                },
            },

            {
                "IsRefunded":false,
                "amount":47,
                "comment":" well done",
                "donorPublicName":"Xenos Dent,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"tscibseyj@ucoz.ru",
                  "howHeard":"Twitter",
                  "mailingAddress":"36611 Vernon Road",
                  "name":"Tallie Scibsey",
                  "phoneNumber":"787-466-0134",

                },
            },

            {
                "IsRefunded":false,
                "amount":194,
                "comment":" well done",
                "donorPublicName":"Emilio Phipp,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"rhoopperk@mozilla.com",
                  "howHeard":"Youtube",
                  "mailingAddress":"2749 Norway Maple Crossing",
                  "name":"Ronica Hoopper",
                  "phoneNumber":"845-432-7243",

                },
            },

            {
                "IsRefunded":false,
                "amount":190,
                "comment":" well done",
                "donorPublicName":"Amby Blampey,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"asanterl@a8.net",
                  "howHeard":"Twitter",
                  "mailingAddress":"316 Washington Center",
                  "name":"Ashton Santer",
                  "phoneNumber":"820-509-5521",

                },
            },

            {
                "IsRefunded":true,
                "amount":120,
                "comment":" well done",
                "donorPublicName":"Rianon Stokell,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"sskittlem@ed.gov",
                  "howHeard":"Twitter",
                  "mailingAddress":"6 Bellgrove Road",
                  "name":"Stephani Skittle",
                  "phoneNumber":"880-691-4352",

                },
            },

            {
                "IsRefunded":true,
                "amount":351,
                "comment":" Clap Clap",
                "donorPublicName":"Sidney Rippen,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"kcomarn@cmu.edu",
                  "howHeard":"Twitter",
                  "mailingAddress":"3 Manufacturers Avenue",
                  "name":"Kenton Comar",
                  "phoneNumber":"296-457-9841",

                },
            },

            {
                "IsRefunded":false,
                "amount":97,
                "comment":" Clap Clap",
                "donorPublicName":"Svend Davenall,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"fdato@china.com.cn",
                  "howHeard":"Twitter",
                  "mailingAddress":"2681 Crest Line Parkway",
                  "name":"Feodor Dat",
                  "phoneNumber":"386-330-2428",

                },
            },

            {
                "IsRefunded":true,
                "amount":19,
                "comment":" Clap Clap",
                "donorPublicName":"Dasya Cloughton,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"cgoodreadp@hc360.com",
                  "howHeard":"Youtube",
                  "mailingAddress":"6 Scoville Park",
                  "name":"Claudina Goodread",
                  "phoneNumber":"639-515-1878",

                },
            },

            {
                "IsRefunded":false,
                "amount":51,
                "comment":"Good Job",
                "donorPublicName":"Vern Dryburgh,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":false,
                  "email":"redgesonq@ebay.com",
                  "howHeard":"Youtube",
                  "mailingAddress":"3 Tomscot Hill",
                  "name":"Rosalind Edgeson",
                  "phoneNumber":"103-677-7865",

                },
            },

            {
                "IsRefunded":false,
                "amount":369,
                "comment":" Clap Clap",
                "donorPublicName":"Myrtie Stranks,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":false,
                  "agreeToContact":false,
                  "email":"dpinxtonr@aol.com",
                  "howHeard":"Twitter",
                  "mailingAddress":"7961 Acker Park",
                  "name":"Durward Pinxton",
                  "phoneNumber":"813-980-6233",

                },
            },

            {
                "IsRefunded":false,
                "amount":235,
                "comment":"Good Job",
                "donorPublicName":"Jordana Worthington,",
                "donationDate":serverTimestamp(),
                "private":
                {
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"lblackborows@ihg.com",
                  "howHeard":"Youtube",
                  "mailingAddress":"1932 Monica Hill",
                  "name":"Lester Blackborow",
                  "phoneNumber":"881-123-4913",

                },
            },
            {
              "IsRefunded":false,
              "amount":203,
              "comment":" Clap Clap",
              "donorPublicName": "Selinda Snartt",
              "donationDate":serverTimestamp(),
              "private":
              {
                  "IsAnon":false,
                  "agreeToContact":true,
                  "email":"wguilloneaut@people.com.cn",
                  "howHeard":"Youtube",
                  "mailingAddress":"8146 Drewry Hill",
                  "name":"Wyn Guilloneau",
                  "phoneNumber":"279-981-6029",

                }
            }

            ]
          }
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
              "IsAnon": false,
              "agreeToContact": true,
              "email": "example@john.com.au",
              "howHeard": "Facebook",
              "mailingAddress": "16 realgood st realville 3136",
              "name": "John Smith",
              "phoneNumber": "0486723474"
          }
        },
          {"IsRefunded":false,
            "amount":184,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Raviv",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637267745, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"ryakuntsov0@huffingtonpost.com",
                "howHeard":"Other",
                "mailingAddress":"6512 Killdeer Trail",
                "name":"Roseanna Yakuntsov",
                "phoneNumber":"106-492-8055"
            }
          },
            {"IsRefunded":true,
            "amount":278,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Braden",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1645062608, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jberr1@scribd.com",
                "howHeard":"Facebook",
                "mailingAddress":"63955 School Alley",
                "name":"Joletta Berr",
                "phoneNumber":"476-335-0517"
            }
},
            {"IsRefunded":false,
            "amount":14,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Duncan",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660846169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"rhobbert2@icq.com",
                "howHeard":"Other",
                "mailingAddress":"36490 Ridgeway Plaza",
                "name":"Rudolf Hobbert",
                "phoneNumber":"984-118-5089"
            }
},
            {"IsRefunded":false,
            "amount":98,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Bryn",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637791401, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"tlissett3@craigslist.org",
                "howHeard":"Facebook",
                "mailingAddress":"37 Debra Way",
                "name":"Torey Lissett",
                "phoneNumber":"471-385-5623"
            }
},
            {"IsRefunded":false,
            "amount":41,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Bekki",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1649358315, 0),

            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"mshearstone4@typepad.com",
                "howHeard":"Google",
                "mailingAddress":"858 Old Gate Drive",
                "name":"Mitchael Shearstone",
                "phoneNumber":"247-443-8325"
}
},
            {"IsRefunded":false,
            "amount":209,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Winifield",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1635942123, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"cbrannigan5@purevolume.com",
                "howHeard":"Other",
                "mailingAddress":"89791 Clemons Pass",
                "name":"Cal Brannigan",
                "phoneNumber":"502-396-2041"
            }
},
            {"IsRefunded":true,
            "amount":254,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Pia",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658131907, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"rde6@t-online.de",
                "howHeard":"Google",
                "mailingAddress":"3257 Crescent Oaks Plaza",
                "name":"Roxane De Cruze",
                "phoneNumber":"671-527-5738"
            }
},
            {"IsRefunded":false,
            "amount":19,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Iolanthe",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1652470903, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jerangy7@latimes.com",
                "howHeard":"Instagram",
                "mailingAddress":"96480 Northland Trail",
                "name":"Janeen Erangy",
                "phoneNumber":"856-469-6941"
            }
},
            {"IsRefunded":false,
            "amount":211,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Clem",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1646113004, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"jfasham8@blogs.com",
                "howHeard":"Other",
                "mailingAddress":"924 High Crossing Junction",
                "name":"Johanna Fasham",
                "phoneNumber":"158-266-7385"
            }
},
            {"IsRefunded":false,
            "amount":166,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Danice",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1643887865, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"cstollberger9@loc.gov",
                "howHeard":"Other",
                "mailingAddress":"66752 Golden Leaf Place",
                "name":"Chrysa Stollberger",
                "phoneNumber":"587-449-9761"
            }
},
            {"IsRefunded":true,
            "amount":263,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Maryanne",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1661510063, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"iperrisa@imageshack.us",
                "howHeard":"Instagram",
                "mailingAddress":"18 Dixon Point",
                "name":"Ignatius Perris",
                "phoneNumber":"358-296-8577"
            }
},
            {"IsRefunded":false,
            "amount":92,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Brenna",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1658148094, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"mstockneyb@ftc.gov",
                "howHeard":"Other",
                "mailingAddress":"6113 Towne Street",
                "name":"Mateo Stockney",
                "phoneNumber":"491-746-3413"
            }
},
            {"IsRefunded":false,
            "amount":66,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Russell",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1664030463, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dlittledykec@freewebs.com",
                "howHeard":"Other",
                "mailingAddress":"290 Hollow Ridge Court",
                "name":"Darline Littledyke",
                "phoneNumber":"105-346-9535"
            }
},
            {"IsRefunded":true,
            "amount":6,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Elston",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1657953406, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"dlosanod@pinterest.com",
                "howHeard":"Instagram",
                "mailingAddress":"92 Victoria Center",
                "name":"Dniren Losano",
                "phoneNumber":"161-792-5330"
            }
},
            {"IsRefunded":true,
            "amount":284,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Antonius",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660993694, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"wmccarneye@simplemachines.org",
                "howHeard":"Other",
                "mailingAddress":"10076 Clove Junction",
                "name":"Worthington McCarney",
                "phoneNumber":"242-673-0532"
            }
},
            {"IsRefunded":true,
            "amount":172,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Cam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1653037483, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"gslatfordf@cnbc.com",
                "howHeard":"Other",
                "mailingAddress":"229 Independence Way",
                "name":"Georgette Slatford",
                "phoneNumber":"301-631-0182"
            }
},
            {"IsRefunded":true,
            "amount":127,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Bernie",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1642947603, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"geytelg@microsoft.com",
                "howHeard":"Facebook",
                "mailingAddress":"3 Kropf Junction",
                "name":"Garrick Eytel",
                "phoneNumber":"401-730-0030"
            }
},
            {"IsRefunded":false,
            "amount":30,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Estrellita",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1662906560, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"trentilllh@mayoclinic.com",
                "howHeard":"Other",
                "mailingAddress":"1 Meadow Ridge Lane",
                "name":"Thorvald Rentilll",
                "phoneNumber":"857-123-2251"
            }
},
            {"IsRefunded":true,
            "amount":131,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kalila",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1651059211, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"tloffilli@opensource.org",
                "howHeard":"Other",
                "mailingAddress":"50773 Dwight Trail",
                "name":"Tuckie Loffill",
                "phoneNumber":"818-542-9125"
            }
},
            {"IsRefunded":false,
            "amount":29,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Terza",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1650551611, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"mcrossthwaitej@xing.com",
                "howHeard":"Facebook",
                "mailingAddress":"24009 Sutherland Park",
                "name":"Michal Crossthwaite",
                "phoneNumber":"274-938-9868"
            }
},
            {"IsRefunded":true,
            "amount":250,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Justina",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658014983, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"espilsburiek@statcounter.com",
                "howHeard":"Other",
                "mailingAddress":"10847 Talisman Street",
                "name":"Emlynne Spilsburie",
                "phoneNumber":"176-855-2778"
            }
},
            {"IsRefunded":true,
            "amount":258,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nadya",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650420277, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"gantleyl@noaa.gov",
                "howHeard":"Other",
                "mailingAddress":"36 Lunder Place",
                "name":"Guillaume Antley",
                "phoneNumber":"348-657-0056"
            }
},
            {"IsRefunded":false,
            "amount":277,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Ingeberg",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658283384, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"gdilstonm@narod.ru",
                "howHeard":"Other",
                "mailingAddress":"00 Dennis Road",
                "name":"Griffin Dilston",
                "phoneNumber":"616-803-6348"
            }
},
            {"IsRefunded":true,
            "amount":21,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nada",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650223169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"ckincaden@about.com",
                "howHeard":"Other",
                "mailingAddress":"0272 Brentwood Circle",
                "name":"Charyl Kincade",
                "phoneNumber":"313-561-1994"
            }
},
            {"IsRefunded":true,
            "amount":55,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Gage",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647762205, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dmarono@ucoz.com",
                "howHeard":"Other",
                "mailingAddress":"45 Dayton Way",
                "name":"Deane Maron",
                "phoneNumber":"240-606-2747"
            }
},
            {"IsRefunded":true,
            "amount":140,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Roxi",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654854912, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mlonerganp@booking.com",
                "howHeard":"Other",
                "mailingAddress":"6 Milwaukee Junction",
                "name":"Martica Lonergan",
                "phoneNumber":"251-286-7225"
            }
},
            {"IsRefunded":false,
            "amount":91,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kania",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647248215, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"eescalanteq@va.gov",
                "howHeard":"Instagram",
                "mailingAddress":"5029 Gerald Lane",
                "name":"Errol Escalante",
                "phoneNumber":"347-286-7238"
            }
},
            {"IsRefunded":false,
            "amount":275,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Anetta",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1636594714, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"bjensonr@jigsy.com",
                "howHeard":"Other",
                "mailingAddress":"0083 Parkside Alley",
                "name":"Blanca Jenson",
                "phoneNumber":"589-975-8928"
            }
},
            {"IsRefunded":false,
            "amount":168,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Putnam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1634393719, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"lmcclarens@constantcontact.com",
                "howHeard":"Instagram",
                "mailingAddress":"1177 Eliot Drive",
                "name":"Lory McClaren",
                "phoneNumber":"695-917-3964"
            }
},
            {"IsRefunded":true,
            "amount":189,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Augustin",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1640462811, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"pizhakt@ucla.edu",
                "howHeard":"Other",
                "mailingAddress":"511 Shasta Hill",
                "name":"Pavel Izhak",
                "phoneNumber":"623-605-3944"
            }
          },
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
        "totalDonationCount": 0,
        "totalDonationItems": 4,
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
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/BdiWV88jQFg",
            "itemDonations":[
              {
                "IsRefunded":false,
                "amount":65,
                "comment":"Skid-Steer",
                "donorPublicName":"Vittoria Eccleston",
                "donationDate":serverTimestamp(),
                "private":{
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"tolney0@arstechnica.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"3502 Linden Terrace",
                  "name":"Tabbatha Olney",
                  "phoneNumber":"(519) 9540817"
                },
              },

              {
                  "IsRefunded":false,
                  "amount":77,
                  "comment":"Crawler",
                  "donorPublicName":"Kerwinn Hammerstone",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"fcullnean1@cyberchimps.com",
                    "howHeard":"Google",
                    "mailingAddress":"8 Mandrake Alley",
                    "name":"Faunie Cullnean",
                    "phoneNumber":"(131) 9243948"
                  },
                },

              {
                  "IsRefunded":true,
                  "amount":38,
                  "comment":"Scraper",
                  "donorPublicName":"Matilda Oxlade",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"sferneyhough2@csmonitor.com",
                    "howHeard":"Google",
                    "mailingAddress":"83 Debs Avenue",
                    "name":"Stanislaus Ferneyhough",
                    "phoneNumber":"(150) 8981611"
                  },
                },
            ]
          },
          {
            "name": "Industrial Oven",
            "summary":"The Turbofan E33D5 is a high quality digital electric convection oven with a large 5x 1/1 gastronorm capacity.",
            "description":"Suitable for use in restaurants, canteens, bakeries and others, the Turbofan includes all the features you would expect from a commercial convection oven and is ideal for cooking chicken, pastries, bread, pizza and confectionary. The oven is easily programmable and features a water injection mode when steam or moisture is required in your recipe.",
            "initialPrice": 5000,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/illedcWylYU",
            "itemDonations":[
              {
                "IsRefunded":false,
                "amount":65,
                "comment":"Skid-Steer",
                "donorPublicName":"Vittoria Eccleston",
                "donationDate":serverTimestamp(),
                "private":{
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"tolney0@arstechnica.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"3502 Linden Terrace",
                  "name":"Tabbatha Olney",
                  "phoneNumber":"(519) 9540817"
                },
              },

              {
                  "IsRefunded":false,
                  "amount":77,
                  "comment":"Crawler",
                  "donorPublicName":"Kerwinn Hammerstone",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"fcullnean1@cyberchimps.com",
                    "howHeard":"Google",
                    "mailingAddress":"8 Mandrake Alley",
                    "name":"Faunie Cullnean",
                    "phoneNumber":"(131) 9243948"
                  },
                },

              {
                  "IsRefunded":true,
                  "amount":38,
                  "comment":"Scraper",
                  "donorPublicName":"Matilda Oxlade",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"sferneyhough2@csmonitor.com",
                    "howHeard":"Google",
                    "mailingAddress":"83 Debs Avenue",
                    "name":"Stanislaus Ferneyhough",
                    "phoneNumber":"(150) 8981611"
                  },
                },
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
            "img": "https://source.unsplash.com/eIqO4P50MeY"
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
            "img": "https://source.unsplash.com/fxLTX93WdFg"
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
              "IsAnon": false,
              "agreeToContact": true,
              "email": "example@john.com.au",
              "howHeard": "Facebook",
              "mailingAddress": "16 realgood st realville 3136",
              "name": "John Smith",
              "phoneNumber": "0486723474"
          }
        },
          {"IsRefunded":false,
            "amount":184,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Raviv",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637267745, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"ryakuntsov0@huffingtonpost.com",
                "howHeard":"Other",
                "mailingAddress":"6512 Killdeer Trail",
                "name":"Roseanna Yakuntsov",
                "phoneNumber":"106-492-8055"
            }
          },
            {"IsRefunded":true,
            "amount":278,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Braden",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1645062608, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jberr1@scribd.com",
                "howHeard":"Facebook",
                "mailingAddress":"63955 School Alley",
                "name":"Joletta Berr",
                "phoneNumber":"476-335-0517"
            }
},
            {"IsRefunded":false,
            "amount":14,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Duncan",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660846169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"rhobbert2@icq.com",
                "howHeard":"Other",
                "mailingAddress":"36490 Ridgeway Plaza",
                "name":"Rudolf Hobbert",
                "phoneNumber":"984-118-5089"
            }
},
            {"IsRefunded":false,
            "amount":98,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Bryn",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637791401, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"tlissett3@craigslist.org",
                "howHeard":"Facebook",
                "mailingAddress":"37 Debra Way",
                "name":"Torey Lissett",
                "phoneNumber":"471-385-5623"
            }
},
            {"IsRefunded":false,
            "amount":41,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Bekki",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1649358315, 0),

            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"mshearstone4@typepad.com",
                "howHeard":"Google",
                "mailingAddress":"858 Old Gate Drive",
                "name":"Mitchael Shearstone",
                "phoneNumber":"247-443-8325"
}
},
            {"IsRefunded":false,
            "amount":209,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Winifield",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1635942123, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"cbrannigan5@purevolume.com",
                "howHeard":"Other",
                "mailingAddress":"89791 Clemons Pass",
                "name":"Cal Brannigan",
                "phoneNumber":"502-396-2041"
            }
},
            {"IsRefunded":true,
            "amount":254,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Pia",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658131907, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"rde6@t-online.de",
                "howHeard":"Google",
                "mailingAddress":"3257 Crescent Oaks Plaza",
                "name":"Roxane De Cruze",
                "phoneNumber":"671-527-5738"
            }
},
            {"IsRefunded":false,
            "amount":19,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Iolanthe",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1652470903, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jerangy7@latimes.com",
                "howHeard":"Instagram",
                "mailingAddress":"96480 Northland Trail",
                "name":"Janeen Erangy",
                "phoneNumber":"856-469-6941"
            }
},
            {"IsRefunded":false,
            "amount":211,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Clem",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1646113004, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"jfasham8@blogs.com",
                "howHeard":"Other",
                "mailingAddress":"924 High Crossing Junction",
                "name":"Johanna Fasham",
                "phoneNumber":"158-266-7385"
            }
},
            {"IsRefunded":false,
            "amount":166,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Danice",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1643887865, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"cstollberger9@loc.gov",
                "howHeard":"Other",
                "mailingAddress":"66752 Golden Leaf Place",
                "name":"Chrysa Stollberger",
                "phoneNumber":"587-449-9761"
            }
},
            {"IsRefunded":true,
            "amount":263,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Maryanne",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1661510063, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"iperrisa@imageshack.us",
                "howHeard":"Instagram",
                "mailingAddress":"18 Dixon Point",
                "name":"Ignatius Perris",
                "phoneNumber":"358-296-8577"
            }
},
            {"IsRefunded":false,
            "amount":92,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Brenna",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1658148094, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"mstockneyb@ftc.gov",
                "howHeard":"Other",
                "mailingAddress":"6113 Towne Street",
                "name":"Mateo Stockney",
                "phoneNumber":"491-746-3413"
            }
},
            {"IsRefunded":false,
            "amount":66,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Russell",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1664030463, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dlittledykec@freewebs.com",
                "howHeard":"Other",
                "mailingAddress":"290 Hollow Ridge Court",
                "name":"Darline Littledyke",
                "phoneNumber":"105-346-9535"
            }
},
            {"IsRefunded":true,
            "amount":6,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Elston",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1657953406, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"dlosanod@pinterest.com",
                "howHeard":"Instagram",
                "mailingAddress":"92 Victoria Center",
                "name":"Dniren Losano",
                "phoneNumber":"161-792-5330"
            }
},
            {"IsRefunded":true,
            "amount":284,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Antonius",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660993694, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"wmccarneye@simplemachines.org",
                "howHeard":"Other",
                "mailingAddress":"10076 Clove Junction",
                "name":"Worthington McCarney",
                "phoneNumber":"242-673-0532"
            }
},
            {"IsRefunded":true,
            "amount":172,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Cam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1653037483, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"gslatfordf@cnbc.com",
                "howHeard":"Other",
                "mailingAddress":"229 Independence Way",
                "name":"Georgette Slatford",
                "phoneNumber":"301-631-0182"
            }
},
            {"IsRefunded":true,
            "amount":127,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Bernie",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1642947603, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"geytelg@microsoft.com",
                "howHeard":"Facebook",
                "mailingAddress":"3 Kropf Junction",
                "name":"Garrick Eytel",
                "phoneNumber":"401-730-0030"
            }
},
            {"IsRefunded":false,
            "amount":30,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Estrellita",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1662906560, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"trentilllh@mayoclinic.com",
                "howHeard":"Other",
                "mailingAddress":"1 Meadow Ridge Lane",
                "name":"Thorvald Rentilll",
                "phoneNumber":"857-123-2251"
            }
},
            {"IsRefunded":true,
            "amount":131,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kalila",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1651059211, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"tloffilli@opensource.org",
                "howHeard":"Other",
                "mailingAddress":"50773 Dwight Trail",
                "name":"Tuckie Loffill",
                "phoneNumber":"818-542-9125"
            }
},
            {"IsRefunded":false,
            "amount":29,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Terza",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1650551611, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"mcrossthwaitej@xing.com",
                "howHeard":"Facebook",
                "mailingAddress":"24009 Sutherland Park",
                "name":"Michal Crossthwaite",
                "phoneNumber":"274-938-9868"
            }
},
            {"IsRefunded":true,
            "amount":250,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Justina",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658014983, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"espilsburiek@statcounter.com",
                "howHeard":"Other",
                "mailingAddress":"10847 Talisman Street",
                "name":"Emlynne Spilsburie",
                "phoneNumber":"176-855-2778"
            }
},
            {"IsRefunded":true,
            "amount":258,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nadya",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650420277, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"gantleyl@noaa.gov",
                "howHeard":"Other",
                "mailingAddress":"36 Lunder Place",
                "name":"Guillaume Antley",
                "phoneNumber":"348-657-0056"
            }
},
            {"IsRefunded":false,
            "amount":277,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Ingeberg",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658283384, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"gdilstonm@narod.ru",
                "howHeard":"Other",
                "mailingAddress":"00 Dennis Road",
                "name":"Griffin Dilston",
                "phoneNumber":"616-803-6348"
            }
},
            {"IsRefunded":true,
            "amount":21,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nada",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650223169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"ckincaden@about.com",
                "howHeard":"Other",
                "mailingAddress":"0272 Brentwood Circle",
                "name":"Charyl Kincade",
                "phoneNumber":"313-561-1994"
            }
},
            {"IsRefunded":true,
            "amount":55,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Gage",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647762205, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dmarono@ucoz.com",
                "howHeard":"Other",
                "mailingAddress":"45 Dayton Way",
                "name":"Deane Maron",
                "phoneNumber":"240-606-2747"
            }
},
            {"IsRefunded":true,
            "amount":140,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Roxi",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654854912, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mlonerganp@booking.com",
                "howHeard":"Other",
                "mailingAddress":"6 Milwaukee Junction",
                "name":"Martica Lonergan",
                "phoneNumber":"251-286-7225"
            }
},
            {"IsRefunded":false,
            "amount":91,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kania",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647248215, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"eescalanteq@va.gov",
                "howHeard":"Instagram",
                "mailingAddress":"5029 Gerald Lane",
                "name":"Errol Escalante",
                "phoneNumber":"347-286-7238"
            }
},
            {"IsRefunded":false,
            "amount":275,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Anetta",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1636594714, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"bjensonr@jigsy.com",
                "howHeard":"Other",
                "mailingAddress":"0083 Parkside Alley",
                "name":"Blanca Jenson",
                "phoneNumber":"589-975-8928"
            }
},
            {"IsRefunded":false,
            "amount":168,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Putnam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1634393719, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"lmcclarens@constantcontact.com",
                "howHeard":"Instagram",
                "mailingAddress":"1177 Eliot Drive",
                "name":"Lory McClaren",
                "phoneNumber":"695-917-3964"
            }
},
            {"IsRefunded":true,
            "amount":189,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Augustin",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1640462811, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"pizhakt@ucla.edu",
                "howHeard":"Other",
                "mailingAddress":"511 Shasta Hill",
                "name":"Pavel Izhak",
                "phoneNumber":"623-605-3944"
            }
          },
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
        "totalDonationCount": 0,
        "totalDonationItems": 3,
        "totalDonationsValue": 0,
        "totalGeneralDonationsCount": 0,
        "totalGeneralDonationsValue": 0,
        "totalItemDonationsCount": 0,
        "totalItemDonationsValue": 0,
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
              "IsAnon": false,
              "agreeToContact": true,
              "email": "example@john.com.au",
              "howHeard": "Facebook",
              "mailingAddress": "16 realgood st realville 3136",
              "name": "John Smith",
              "phoneNumber": "0486723474"
          }
        },
          {"IsRefunded":false,
            "amount":184,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Raviv",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637267745, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"ryakuntsov0@huffingtonpost.com",
                "howHeard":"Other",
                "mailingAddress":"6512 Killdeer Trail",
                "name":"Roseanna Yakuntsov",
                "phoneNumber":"106-492-8055"
            }
          },
            {"IsRefunded":true,
            "amount":278,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Braden",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1645062608, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jberr1@scribd.com",
                "howHeard":"Facebook",
                "mailingAddress":"63955 School Alley",
                "name":"Joletta Berr",
                "phoneNumber":"476-335-0517"
            }
},
            {"IsRefunded":false,
            "amount":14,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Duncan",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660846169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"rhobbert2@icq.com",
                "howHeard":"Other",
                "mailingAddress":"36490 Ridgeway Plaza",
                "name":"Rudolf Hobbert",
                "phoneNumber":"984-118-5089"
            }
},
            {"IsRefunded":false,
            "amount":98,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Bryn",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637791401, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"tlissett3@craigslist.org",
                "howHeard":"Facebook",
                "mailingAddress":"37 Debra Way",
                "name":"Torey Lissett",
                "phoneNumber":"471-385-5623"
            }
},
            {"IsRefunded":false,
            "amount":41,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Bekki",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1649358315, 0),

            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"mshearstone4@typepad.com",
                "howHeard":"Google",
                "mailingAddress":"858 Old Gate Drive",
                "name":"Mitchael Shearstone",
                "phoneNumber":"247-443-8325"
}
},
            {"IsRefunded":false,
            "amount":209,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Winifield",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1635942123, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"cbrannigan5@purevolume.com",
                "howHeard":"Other",
                "mailingAddress":"89791 Clemons Pass",
                "name":"Cal Brannigan",
                "phoneNumber":"502-396-2041"
            }
},
            {"IsRefunded":true,
            "amount":254,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Pia",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658131907, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"rde6@t-online.de",
                "howHeard":"Google",
                "mailingAddress":"3257 Crescent Oaks Plaza",
                "name":"Roxane De Cruze",
                "phoneNumber":"671-527-5738"
            }
},
            {"IsRefunded":false,
            "amount":19,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Iolanthe",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1652470903, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jerangy7@latimes.com",
                "howHeard":"Instagram",
                "mailingAddress":"96480 Northland Trail",
                "name":"Janeen Erangy",
                "phoneNumber":"856-469-6941"
            }
},
            {"IsRefunded":false,
            "amount":211,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Clem",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1646113004, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"jfasham8@blogs.com",
                "howHeard":"Other",
                "mailingAddress":"924 High Crossing Junction",
                "name":"Johanna Fasham",
                "phoneNumber":"158-266-7385"
            }
},
            {"IsRefunded":false,
            "amount":166,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Danice",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1643887865, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"cstollberger9@loc.gov",
                "howHeard":"Other",
                "mailingAddress":"66752 Golden Leaf Place",
                "name":"Chrysa Stollberger",
                "phoneNumber":"587-449-9761"
            }
},
            {"IsRefunded":true,
            "amount":263,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Maryanne",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1661510063, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"iperrisa@imageshack.us",
                "howHeard":"Instagram",
                "mailingAddress":"18 Dixon Point",
                "name":"Ignatius Perris",
                "phoneNumber":"358-296-8577"
            }
},
            {"IsRefunded":false,
            "amount":92,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Brenna",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1658148094, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"mstockneyb@ftc.gov",
                "howHeard":"Other",
                "mailingAddress":"6113 Towne Street",
                "name":"Mateo Stockney",
                "phoneNumber":"491-746-3413"
            }
},
            {"IsRefunded":false,
            "amount":66,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Russell",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1664030463, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dlittledykec@freewebs.com",
                "howHeard":"Other",
                "mailingAddress":"290 Hollow Ridge Court",
                "name":"Darline Littledyke",
                "phoneNumber":"105-346-9535"
            }
},
            {"IsRefunded":true,
            "amount":6,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Elston",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1657953406, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"dlosanod@pinterest.com",
                "howHeard":"Instagram",
                "mailingAddress":"92 Victoria Center",
                "name":"Dniren Losano",
                "phoneNumber":"161-792-5330"
            }
},
            {"IsRefunded":true,
            "amount":284,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Antonius",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660993694, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"wmccarneye@simplemachines.org",
                "howHeard":"Other",
                "mailingAddress":"10076 Clove Junction",
                "name":"Worthington McCarney",
                "phoneNumber":"242-673-0532"
            }
},
            {"IsRefunded":true,
            "amount":172,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Cam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1653037483, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"gslatfordf@cnbc.com",
                "howHeard":"Other",
                "mailingAddress":"229 Independence Way",
                "name":"Georgette Slatford",
                "phoneNumber":"301-631-0182"
            }
},
            {"IsRefunded":true,
            "amount":127,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Bernie",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1642947603, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"geytelg@microsoft.com",
                "howHeard":"Facebook",
                "mailingAddress":"3 Kropf Junction",
                "name":"Garrick Eytel",
                "phoneNumber":"401-730-0030"
            }
},
            {"IsRefunded":false,
            "amount":30,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Estrellita",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1662906560, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"trentilllh@mayoclinic.com",
                "howHeard":"Other",
                "mailingAddress":"1 Meadow Ridge Lane",
                "name":"Thorvald Rentilll",
                "phoneNumber":"857-123-2251"
            }
},
            {"IsRefunded":true,
            "amount":131,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kalila",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1651059211, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"tloffilli@opensource.org",
                "howHeard":"Other",
                "mailingAddress":"50773 Dwight Trail",
                "name":"Tuckie Loffill",
                "phoneNumber":"818-542-9125"
            }
},
            {"IsRefunded":false,
            "amount":29,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Terza",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1650551611, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"mcrossthwaitej@xing.com",
                "howHeard":"Facebook",
                "mailingAddress":"24009 Sutherland Park",
                "name":"Michal Crossthwaite",
                "phoneNumber":"274-938-9868"
            }
},
            {"IsRefunded":true,
            "amount":250,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Justina",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658014983, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"espilsburiek@statcounter.com",
                "howHeard":"Other",
                "mailingAddress":"10847 Talisman Street",
                "name":"Emlynne Spilsburie",
                "phoneNumber":"176-855-2778"
            }
},
            {"IsRefunded":true,
            "amount":258,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nadya",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650420277, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"gantleyl@noaa.gov",
                "howHeard":"Other",
                "mailingAddress":"36 Lunder Place",
                "name":"Guillaume Antley",
                "phoneNumber":"348-657-0056"
            }
},
            {"IsRefunded":false,
            "amount":277,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Ingeberg",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658283384, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"gdilstonm@narod.ru",
                "howHeard":"Other",
                "mailingAddress":"00 Dennis Road",
                "name":"Griffin Dilston",
                "phoneNumber":"616-803-6348"
            }
},
            {"IsRefunded":true,
            "amount":21,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nada",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650223169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"ckincaden@about.com",
                "howHeard":"Other",
                "mailingAddress":"0272 Brentwood Circle",
                "name":"Charyl Kincade",
                "phoneNumber":"313-561-1994"
            }
},
            {"IsRefunded":true,
            "amount":55,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Gage",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647762205, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dmarono@ucoz.com",
                "howHeard":"Other",
                "mailingAddress":"45 Dayton Way",
                "name":"Deane Maron",
                "phoneNumber":"240-606-2747"
            }
},
            {"IsRefunded":true,
            "amount":140,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Roxi",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654854912, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mlonerganp@booking.com",
                "howHeard":"Other",
                "mailingAddress":"6 Milwaukee Junction",
                "name":"Martica Lonergan",
                "phoneNumber":"251-286-7225"
            }
},
            {"IsRefunded":false,
            "amount":91,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kania",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647248215, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"eescalanteq@va.gov",
                "howHeard":"Instagram",
                "mailingAddress":"5029 Gerald Lane",
                "name":"Errol Escalante",
                "phoneNumber":"347-286-7238"
            }
},
            {"IsRefunded":false,
            "amount":275,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Anetta",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1636594714, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"bjensonr@jigsy.com",
                "howHeard":"Other",
                "mailingAddress":"0083 Parkside Alley",
                "name":"Blanca Jenson",
                "phoneNumber":"589-975-8928"
            }
},
            {"IsRefunded":false,
            "amount":168,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Putnam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1634393719, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"lmcclarens@constantcontact.com",
                "howHeard":"Instagram",
                "mailingAddress":"1177 Eliot Drive",
                "name":"Lory McClaren",
                "phoneNumber":"695-917-3964"
            }
},
            {"IsRefunded":true,
            "amount":189,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Augustin",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1640462811, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"pizhakt@ucla.edu",
                "howHeard":"Other",
                "mailingAddress":"511 Shasta Hill",
                "name":"Pavel Izhak",
                "phoneNumber":"623-605-3944"
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
        "totalDonationCount": 0,
        "totalDonationItems": 3,
        "totalDonationsValue": 0,
        "totalGeneralDonationsCount": 0,
        "totalGeneralDonationsValue": 0,
        "totalItemDonationsCount": 0,
        "totalItemDonationsValue": 0,
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
            "img": "https://source.unsplash.com/-FyA5fhIPGI"
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
            "img": "https://source.unsplash.com/iiQZcCtfpyk"
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
            "img": "https://source.unsplash.com/rjf4FcmERGc"
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
              "IsAnon": false,
              "agreeToContact": true,
              "email": "example@john.com.au",
              "howHeard": "Facebook",
              "mailingAddress": "16 realgood st realville 3136",
              "name": "John Smith",
              "phoneNumber": "0486723474"
          }
        },
          {"IsRefunded":false,
            "amount":184,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Raviv",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637267745, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"ryakuntsov0@huffingtonpost.com",
                "howHeard":"Other",
                "mailingAddress":"6512 Killdeer Trail",
                "name":"Roseanna Yakuntsov",
                "phoneNumber":"106-492-8055"
            }
          },
            {"IsRefunded":true,
            "amount":278,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Braden",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1645062608, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jberr1@scribd.com",
                "howHeard":"Facebook",
                "mailingAddress":"63955 School Alley",
                "name":"Joletta Berr",
                "phoneNumber":"476-335-0517"
            }
},
            {"IsRefunded":false,
            "amount":14,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Duncan",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660846169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"rhobbert2@icq.com",
                "howHeard":"Other",
                "mailingAddress":"36490 Ridgeway Plaza",
                "name":"Rudolf Hobbert",
                "phoneNumber":"984-118-5089"
            }
},
            {"IsRefunded":false,
            "amount":98,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Bryn",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637791401, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"tlissett3@craigslist.org",
                "howHeard":"Facebook",
                "mailingAddress":"37 Debra Way",
                "name":"Torey Lissett",
                "phoneNumber":"471-385-5623"
            }
},
            {"IsRefunded":false,
            "amount":41,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Bekki",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1649358315, 0),

            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"mshearstone4@typepad.com",
                "howHeard":"Google",
                "mailingAddress":"858 Old Gate Drive",
                "name":"Mitchael Shearstone",
                "phoneNumber":"247-443-8325"
}
},
            {"IsRefunded":false,
            "amount":209,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Winifield",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1635942123, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"cbrannigan5@purevolume.com",
                "howHeard":"Other",
                "mailingAddress":"89791 Clemons Pass",
                "name":"Cal Brannigan",
                "phoneNumber":"502-396-2041"
            }
},
            {"IsRefunded":true,
            "amount":254,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Pia",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658131907, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"rde6@t-online.de",
                "howHeard":"Google",
                "mailingAddress":"3257 Crescent Oaks Plaza",
                "name":"Roxane De Cruze",
                "phoneNumber":"671-527-5738"
            }
},
            {"IsRefunded":false,
            "amount":19,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Iolanthe",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1652470903, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jerangy7@latimes.com",
                "howHeard":"Instagram",
                "mailingAddress":"96480 Northland Trail",
                "name":"Janeen Erangy",
                "phoneNumber":"856-469-6941"
            }
},
            {"IsRefunded":false,
            "amount":211,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Clem",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1646113004, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"jfasham8@blogs.com",
                "howHeard":"Other",
                "mailingAddress":"924 High Crossing Junction",
                "name":"Johanna Fasham",
                "phoneNumber":"158-266-7385"
            }
},
            {"IsRefunded":false,
            "amount":166,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Danice",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1643887865, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"cstollberger9@loc.gov",
                "howHeard":"Other",
                "mailingAddress":"66752 Golden Leaf Place",
                "name":"Chrysa Stollberger",
                "phoneNumber":"587-449-9761"
            }
},
            {"IsRefunded":true,
            "amount":263,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Maryanne",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1661510063, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"iperrisa@imageshack.us",
                "howHeard":"Instagram",
                "mailingAddress":"18 Dixon Point",
                "name":"Ignatius Perris",
                "phoneNumber":"358-296-8577"
            }
},
            {"IsRefunded":false,
            "amount":92,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Brenna",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1658148094, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"mstockneyb@ftc.gov",
                "howHeard":"Other",
                "mailingAddress":"6113 Towne Street",
                "name":"Mateo Stockney",
                "phoneNumber":"491-746-3413"
            }
},
            {"IsRefunded":false,
            "amount":66,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Russell",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1664030463, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dlittledykec@freewebs.com",
                "howHeard":"Other",
                "mailingAddress":"290 Hollow Ridge Court",
                "name":"Darline Littledyke",
                "phoneNumber":"105-346-9535"
            }
},
            {"IsRefunded":true,
            "amount":6,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Elston",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1657953406, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"dlosanod@pinterest.com",
                "howHeard":"Instagram",
                "mailingAddress":"92 Victoria Center",
                "name":"Dniren Losano",
                "phoneNumber":"161-792-5330"
            }
},
            {"IsRefunded":true,
            "amount":284,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Antonius",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660993694, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"wmccarneye@simplemachines.org",
                "howHeard":"Other",
                "mailingAddress":"10076 Clove Junction",
                "name":"Worthington McCarney",
                "phoneNumber":"242-673-0532"
            }
},
            {"IsRefunded":true,
            "amount":172,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Cam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1653037483, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"gslatfordf@cnbc.com",
                "howHeard":"Other",
                "mailingAddress":"229 Independence Way",
                "name":"Georgette Slatford",
                "phoneNumber":"301-631-0182"
            }
},
            {"IsRefunded":true,
            "amount":127,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Bernie",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1642947603, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"geytelg@microsoft.com",
                "howHeard":"Facebook",
                "mailingAddress":"3 Kropf Junction",
                "name":"Garrick Eytel",
                "phoneNumber":"401-730-0030"
            }
},
            {"IsRefunded":false,
            "amount":30,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Estrellita",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1662906560, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"trentilllh@mayoclinic.com",
                "howHeard":"Other",
                "mailingAddress":"1 Meadow Ridge Lane",
                "name":"Thorvald Rentilll",
                "phoneNumber":"857-123-2251"
            }
},
            {"IsRefunded":true,
            "amount":131,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kalila",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1651059211, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"tloffilli@opensource.org",
                "howHeard":"Other",
                "mailingAddress":"50773 Dwight Trail",
                "name":"Tuckie Loffill",
                "phoneNumber":"818-542-9125"
            }
},
            {"IsRefunded":false,
            "amount":29,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Terza",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1650551611, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"mcrossthwaitej@xing.com",
                "howHeard":"Facebook",
                "mailingAddress":"24009 Sutherland Park",
                "name":"Michal Crossthwaite",
                "phoneNumber":"274-938-9868"
            }
},
            {"IsRefunded":true,
            "amount":250,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Justina",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658014983, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"espilsburiek@statcounter.com",
                "howHeard":"Other",
                "mailingAddress":"10847 Talisman Street",
                "name":"Emlynne Spilsburie",
                "phoneNumber":"176-855-2778"
            }
},
            {"IsRefunded":true,
            "amount":258,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nadya",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650420277, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"gantleyl@noaa.gov",
                "howHeard":"Other",
                "mailingAddress":"36 Lunder Place",
                "name":"Guillaume Antley",
                "phoneNumber":"348-657-0056"
            }
},
            {"IsRefunded":false,
            "amount":277,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Ingeberg",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658283384, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"gdilstonm@narod.ru",
                "howHeard":"Other",
                "mailingAddress":"00 Dennis Road",
                "name":"Griffin Dilston",
                "phoneNumber":"616-803-6348"
            }
},
            {"IsRefunded":true,
            "amount":21,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nada",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650223169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"ckincaden@about.com",
                "howHeard":"Other",
                "mailingAddress":"0272 Brentwood Circle",
                "name":"Charyl Kincade",
                "phoneNumber":"313-561-1994"
            }
},
            {"IsRefunded":true,
            "amount":55,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Gage",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647762205, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dmarono@ucoz.com",
                "howHeard":"Other",
                "mailingAddress":"45 Dayton Way",
                "name":"Deane Maron",
                "phoneNumber":"240-606-2747"
            }
},
            {"IsRefunded":true,
            "amount":140,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Roxi",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654854912, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mlonerganp@booking.com",
                "howHeard":"Other",
                "mailingAddress":"6 Milwaukee Junction",
                "name":"Martica Lonergan",
                "phoneNumber":"251-286-7225"
            }
},
            {"IsRefunded":false,
            "amount":91,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kania",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647248215, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"eescalanteq@va.gov",
                "howHeard":"Instagram",
                "mailingAddress":"5029 Gerald Lane",
                "name":"Errol Escalante",
                "phoneNumber":"347-286-7238"
            }
},
            {"IsRefunded":false,
            "amount":275,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Anetta",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1636594714, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"bjensonr@jigsy.com",
                "howHeard":"Other",
                "mailingAddress":"0083 Parkside Alley",
                "name":"Blanca Jenson",
                "phoneNumber":"589-975-8928"
            }
},
            {"IsRefunded":false,
            "amount":168,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Putnam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1634393719, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"lmcclarens@constantcontact.com",
                "howHeard":"Instagram",
                "mailingAddress":"1177 Eliot Drive",
                "name":"Lory McClaren",
                "phoneNumber":"695-917-3964"
            }
},
            {"IsRefunded":true,
            "amount":189,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Augustin",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1640462811, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"pizhakt@ucla.edu",
                "howHeard":"Other",
                "mailingAddress":"511 Shasta Hill",
                "name":"Pavel Izhak",
                "phoneNumber":"623-605-3944"
            }
          },
        ]
    },
    {

        "name": "EdAble Flowers",
        "description": "",
        "summary": "This organisation grows edible flowers for distribution",
        "activeStatus": false,
        "ABN": "48588334938",
        "phone": "0493959487",
        "website": "https://www.edablelfowers.com",
        "img": "https://source.unsplash.com/UvVVnUmW2mQ",
        "totalDonationCount": 0,
        "totalDonationItems": 3,
        "totalDonationsValue": 0,
        "totalGeneralDonationsCount": 0,
        "totalGeneralDonationsValue": 0,
        "totalItemDonationsCount": 0,
        "totalItemDonationsValue": 0,
        "Items":[
          {
            "name": "Pansy",
            "summary":"Purple colored pansies",
            "description":"Edible Pansies",
            "initialPrice": 60,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/vgSxl4vI9DQ",
            "itemDonations":[
              {
                "IsRefunded":false,
                "amount":65,
                "comment":"Skid-Steer",
                "donorPublicName":"Vittoria Eccleston",
                "donationDate":serverTimestamp(),
                "private":{
                  "IsAnon":true,
                  "agreeToContact":true,
                  "email":"tolney0@arstechnica.com",
                  "howHeard":"Facebook",
                  "mailingAddress":"3502 Linden Terrace",
                  "name":"Tabbatha Olney",
                  "phoneNumber":"(519) 9540817"
                },
              },

              {
                  "IsRefunded":false,
                  "amount":77,
                  "comment":"Crawler",
                  "donorPublicName":"Kerwinn Hammerstone",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"fcullnean1@cyberchimps.com",
                    "howHeard":"Google",
                    "mailingAddress":"8 Mandrake Alley",
                    "name":"Faunie Cullnean",
                    "phoneNumber":"(131) 9243948"
                  },
                },

              {
                  "IsRefunded":true,
                  "amount":38,
                  "comment":"Scraper",
                  "donorPublicName":"Matilda Oxlade",
                  "donationDate":serverTimestamp(),
                  "private":{
                    "IsAnon":false,
                    "agreeToContact":true,
                    "email":"sferneyhough2@csmonitor.com",
                    "howHeard":"Google",
                    "mailingAddress":"83 Debs Avenue",
                    "name":"Stanislaus Ferneyhough",
                    "phoneNumber":"(150) 8981611"
                  },
                },
            ]
          },
          {
            "name": "Lavender",
            "summary":"Purple colored pansies",
            "description":"Edible Lavenders",
            "initialPrice": 60,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/ClWvcrkBhMY"
          },
          {
            "name": "Honeysuckle",
            "summary":"",
            "description":"Edible Honeysuckles",
            "initialPrice": 60,
            "totalDonationCount": 0,
            "totalDonationsValue":0,
            "activeStatus": true,
            "dateCompleted":null,
            "createdAt": serverTimestamp(),
            "img": "https://source.unsplash.com/7miHDNl_iwA"
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
              "IsAnon": false,
              "agreeToContact": true,
              "email": "example@john.com.au",
              "howHeard": "Facebook",
              "mailingAddress": "16 realgood st realville 3136",
              "name": "John Smith",
              "phoneNumber": "0486723474"
          }
        },
          {"IsRefunded":false,
            "amount":184,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Raviv",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637267745, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"ryakuntsov0@huffingtonpost.com",
                "howHeard":"Other",
                "mailingAddress":"6512 Killdeer Trail",
                "name":"Roseanna Yakuntsov",
                "phoneNumber":"106-492-8055"
            }
          },
            {"IsRefunded":true,
            "amount":278,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Braden",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1645062608, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jberr1@scribd.com",
                "howHeard":"Facebook",
                "mailingAddress":"63955 School Alley",
                "name":"Joletta Berr",
                "phoneNumber":"476-335-0517"
            }
},
            {"IsRefunded":false,
            "amount":14,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Duncan",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660846169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"rhobbert2@icq.com",
                "howHeard":"Other",
                "mailingAddress":"36490 Ridgeway Plaza",
                "name":"Rudolf Hobbert",
                "phoneNumber":"984-118-5089"
            }
},
            {"IsRefunded":false,
            "amount":98,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Bryn",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1637791401, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"tlissett3@craigslist.org",
                "howHeard":"Facebook",
                "mailingAddress":"37 Debra Way",
                "name":"Torey Lissett",
                "phoneNumber":"471-385-5623"
            }
},
            {"IsRefunded":false,
            "amount":41,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Bekki",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1649358315, 0),

            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"mshearstone4@typepad.com",
                "howHeard":"Google",
                "mailingAddress":"858 Old Gate Drive",
                "name":"Mitchael Shearstone",
                "phoneNumber":"247-443-8325"
}
},
            {"IsRefunded":false,
            "amount":209,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Winifield",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1635942123, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"cbrannigan5@purevolume.com",
                "howHeard":"Other",
                "mailingAddress":"89791 Clemons Pass",
                "name":"Cal Brannigan",
                "phoneNumber":"502-396-2041"
            }
},
            {"IsRefunded":true,
            "amount":254,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Pia",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658131907, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"rde6@t-online.de",
                "howHeard":"Google",
                "mailingAddress":"3257 Crescent Oaks Plaza",
                "name":"Roxane De Cruze",
                "phoneNumber":"671-527-5738"
            }
},
            {"IsRefunded":false,
            "amount":19,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Iolanthe",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1652470903, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"jerangy7@latimes.com",
                "howHeard":"Instagram",
                "mailingAddress":"96480 Northland Trail",
                "name":"Janeen Erangy",
                "phoneNumber":"856-469-6941"
            }
},
            {"IsRefunded":false,
            "amount":211,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Clem",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1646113004, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"jfasham8@blogs.com",
                "howHeard":"Other",
                "mailingAddress":"924 High Crossing Junction",
                "name":"Johanna Fasham",
                "phoneNumber":"158-266-7385"
            }
},
            {"IsRefunded":false,
            "amount":166,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Danice",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1643887865, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"cstollberger9@loc.gov",
                "howHeard":"Other",
                "mailingAddress":"66752 Golden Leaf Place",
                "name":"Chrysa Stollberger",
                "phoneNumber":"587-449-9761"
            }
},
            {"IsRefunded":true,
            "amount":263,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Maryanne",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1661510063, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"iperrisa@imageshack.us",
                "howHeard":"Instagram",
                "mailingAddress":"18 Dixon Point",
                "name":"Ignatius Perris",
                "phoneNumber":"358-296-8577"
            }
},
            {"IsRefunded":false,
            "amount":92,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Brenna",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1658148094, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"mstockneyb@ftc.gov",
                "howHeard":"Other",
                "mailingAddress":"6113 Towne Street",
                "name":"Mateo Stockney",
                "phoneNumber":"491-746-3413"
            }
},
            {"IsRefunded":false,
            "amount":66,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Russell",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1664030463, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dlittledykec@freewebs.com",
                "howHeard":"Other",
                "mailingAddress":"290 Hollow Ridge Court",
                "name":"Darline Littledyke",
                "phoneNumber":"105-346-9535"
            }
},
            {"IsRefunded":true,
            "amount":6,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Elston",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1657953406, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"dlosanod@pinterest.com",
                "howHeard":"Instagram",
                "mailingAddress":"92 Victoria Center",
                "name":"Dniren Losano",
                "phoneNumber":"161-792-5330"
            }
},
            {"IsRefunded":true,
            "amount":284,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Antonius",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1660993694, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"wmccarneye@simplemachines.org",
                "howHeard":"Other",
                "mailingAddress":"10076 Clove Junction",
                "name":"Worthington McCarney",
                "phoneNumber":"242-673-0532"
            }
},
            {"IsRefunded":true,
            "amount":172,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Cam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1653037483, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"gslatfordf@cnbc.com",
                "howHeard":"Other",
                "mailingAddress":"229 Independence Way",
                "name":"Georgette Slatford",
                "phoneNumber":"301-631-0182"
            }
},
            {"IsRefunded":true,
            "amount":127,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Bernie",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1642947603, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"geytelg@microsoft.com",
                "howHeard":"Facebook",
                "mailingAddress":"3 Kropf Junction",
                "name":"Garrick Eytel",
                "phoneNumber":"401-730-0030"
            }
},
            {"IsRefunded":false,
            "amount":30,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Estrellita",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1662906560, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"trentilllh@mayoclinic.com",
                "howHeard":"Other",
                "mailingAddress":"1 Meadow Ridge Lane",
                "name":"Thorvald Rentilll",
                "phoneNumber":"857-123-2251"
            }
},
            {"IsRefunded":true,
            "amount":131,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kalila",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1651059211, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"tloffilli@opensource.org",
                "howHeard":"Other",
                "mailingAddress":"50773 Dwight Trail",
                "name":"Tuckie Loffill",
                "phoneNumber":"818-542-9125"
            }
},
            {"IsRefunded":false,
            "amount":29,
            "comment":"Wow Great Paypal Experience love it",
            "donorPublicName":"Terza",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1650551611, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"mcrossthwaitej@xing.com",
                "howHeard":"Facebook",
                "mailingAddress":"24009 Sutherland Park",
                "name":"Michal Crossthwaite",
                "phoneNumber":"274-938-9868"
            }
},
            {"IsRefunded":true,
            "amount":250,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Justina",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658014983, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":true,
                "email":"espilsburiek@statcounter.com",
                "howHeard":"Other",
                "mailingAddress":"10847 Talisman Street",
                "name":"Emlynne Spilsburie",
                "phoneNumber":"176-855-2778"
            }
},
            {"IsRefunded":true,
            "amount":258,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nadya",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650420277, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"gantleyl@noaa.gov",
                "howHeard":"Other",
                "mailingAddress":"36 Lunder Place",
                "name":"Guillaume Antley",
                "phoneNumber":"348-657-0056"
            }
},
            {"IsRefunded":false,
            "amount":277,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Ingeberg",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1658283384, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"gdilstonm@narod.ru",
                "howHeard":"Other",
                "mailingAddress":"00 Dennis Road",
                "name":"Griffin Dilston",
                "phoneNumber":"616-803-6348"
            }
},
            {"IsRefunded":true,
            "amount":21,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Nada",
            "IsSubscribed":false,
            "donationDate":new Timestamp(1650223169, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"ckincaden@about.com",
                "howHeard":"Other",
                "mailingAddress":"0272 Brentwood Circle",
                "name":"Charyl Kincade",
                "phoneNumber":"313-561-1994"
            }
},
            {"IsRefunded":true,
            "amount":55,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Gage",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647762205, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"dmarono@ucoz.com",
                "howHeard":"Other",
                "mailingAddress":"45 Dayton Way",
                "name":"Deane Maron",
                "phoneNumber":"240-606-2747"
            }
},
            {"IsRefunded":true,
            "amount":140,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Roxi",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1654854912, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"mlonerganp@booking.com",
                "howHeard":"Other",
                "mailingAddress":"6 Milwaukee Junction",
                "name":"Martica Lonergan",
                "phoneNumber":"251-286-7225"
            }
},
            {"IsRefunded":false,
            "amount":91,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Kania",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1647248215, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":true,
                "email":"eescalanteq@va.gov",
                "howHeard":"Instagram",
                "mailingAddress":"5029 Gerald Lane",
                "name":"Errol Escalante",
                "phoneNumber":"347-286-7238"
            }
},
            {"IsRefunded":false,
            "amount":275,
            "comment":"This is the best experience I have ever had in my life",
            "donorPublicName":"Anetta",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1636594714, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"bjensonr@jigsy.com",
                "howHeard":"Other",
                "mailingAddress":"0083 Parkside Alley",
                "name":"Blanca Jenson",
                "phoneNumber":"589-975-8928"
            }
},
            {"IsRefunded":false,
            "amount":168,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Putnam",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1634393719, 0),
            "private":{
                "IsAnon":false,
                "agreeToContact":false,
                "email":"lmcclarens@constantcontact.com",
                "howHeard":"Instagram",
                "mailingAddress":"1177 Eliot Drive",
                "name":"Lory McClaren",
                "phoneNumber":"695-917-3964"
            }
},
            {"IsRefunded":true,
            "amount":189,
            "comment":"Highly Reccomend this product",
            "donorPublicName":"Augustin",
            "IsSubscribed":true,
            "donationDate":new Timestamp(1640462811, 0),
            "private":{
                "IsAnon":true,
                "agreeToContact":false,
                "email":"pizhakt@ucla.edu",
                "howHeard":"Other",
                "mailingAddress":"511 Shasta Hill",
                "name":"Pavel Izhak",
                "phoneNumber":"623-605-3944"
            }
          },
        ]
    },
    {

        "name": "Windy",
        "description": "",
        "summary": "Windy is a non for profit organization that helps supply small wind turbines to unpriviled families ",
        "activeStatus": true,
        "ABN": "49557732843",
        "phone": "0438827348",
        "website": "https://www.Windy.com",
        "img": "https://source.unsplash.com/tTv6Lo5uQVQ",
        "totalDonationCount": 0,
        "totalDonationItems": 0,
        "totalDonationsValue": 0,
        "totalGeneralDonationsCount": 0,
        "totalGeneralDonationsValue": 0,
        "totalItemDonationsCount": 0,
        "totalItemDonationsValue": 0
    },
    {

        "name": "Doin Doughies",
        "description": "",
        "summary": "Doin Doughies bakes fresh donuts for the town of Narrandera daily",
        "activeStatus": false,
        "ABN": "46392849511",
        "phone": "0489334598",
        "website": "https://www.doindoughies.com",
        "img": "https://source.unsplash.com/EACvtuV2k2E",
        "totalDonationCount": 0,
        "totalDonationItems": 0,
        "totalDonationsValue": 0,
        "totalGeneralDonationsCount": 0,
        "totalGeneralDonationsValue": 0,
        "totalItemDonationsCount": 0,
        "totalItemDonationsValue": 0
    }
  ]
