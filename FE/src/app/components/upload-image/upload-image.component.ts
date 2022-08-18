import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { item } from 'src/app/models/no-sql-models';
import { serverTimestamp, where } from 'firebase/firestore';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() uploadedImage: EventEmitter<any> = new EventEmitter();

  //todo make organisationID an input which will be received from the api
  //when say the edit popup is opened
  //create will be interesting maybe when the api returns a success with the unique id
  //fire storage will create a file with the unique id and the file can be stored there in fire storage
  organisationID = "uid";

  imageName!: any;

  image!: any;
  meta!: Observable<any>;

  //items!:Observable<any[]>;

  //private itemsCollection: AngularFirestoreCollection<item[]>;

  private itemsCollection: AngularFirestoreCollection<any>;


  constructor(
    private storage: AngularFireStorage,
    public firestore: AngularFirestore,
  ) {
    const ref = this.storage.ref(`${this.organisationID}/orgLogo`);
    this.meta = ref.getDownloadURL();

    // let test = this.firestore.collection('Organisations', ref => ref.where('"description"', '==', 'string'))
    // test.valueChanges().pipe()

  //-----------------------example of getting all items ----------------------//
    // this.itemsCollection = firestore.collection<item[]>('Organisations')
    // this.items = this.itemsCollection.snapshotChanges()
    // .pipe(
    //   map( (actions:any) => actions.map( (a:any) => {
    //     const data = a.payload.doc.data() as any;
    //     const ID = a.payload.doc.id;
    //     return { ID, ...data}
    //   }))
    // );
    // this.items.subscribe(item => console.log(item))
  //--------------------------------------------------------//
  }

  ngOnInit(): void {
    // let object =
    //   [
    //   {

    //         name: "Tree's R US",
    //         summary: "Tree's R US is an organisation specializing in growing, maintaining and selling trees.",
    //         description:null,
    //         activeStatus: true,
    //         ABN:  "59683269382",
    //         phone: "0455683457",
    //         website: "https://www.treesrus.com.au",
    //       img: "https://www.treesrus/logo-img.png",
    //       createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     },
    //     {

    //         name: "Barry's Bakehouse",
    //         summary: "Barry's bakehouse provides baked goods and fresh bread daily for local customers. Barry also provides free baked goods to the local nursing home",
    //         description:null,
    //         activeStatus: true,
    //         ABN:  "27384372612",
    //         phone: "0428473288",
    //         website: "https://www.barriesbakery.com.au",
    //         img: "https://www.barriesbakery/logo-img.png",
    //         createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     },
    //     {

    //         name: "The Phone Zone",
    //         summary: "The phone zone is a business provding phone repairs and sales.",
    //         description:null,
    //         activeStatus: false,
    //         ABN:  "49382719557",
    //         phone: "0455567982",
    //         website: "https://www.phonezone.com",
    //         img: "https://www.phonezone/logo-img.png", createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     },
    //     {

    //         name: "Social Moments",
    //         summary: "Provides yummy social treats",
    //         description:null,
    //         activeStatus: true,
    //         ABN:  "22999684773",
    //         phone: "0433958444",
    //         website: "https://www.socialmoments.com",
    //         img: "https://www.socialmoments/logo-img.png", createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     },
    //     {

    //         name: "EdAble Flowers",
    //         summary: "This organisation grows edible flowers for distribution",
    //         description:null,
    //         activeStatus: false,
    //         ABN:  "48588334938",
    //         phone: "0493959487",
    //         website: "https://www.edablelfowers.com",
    //         img: "https://www.edablelfowers/logo-img.png", createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     },
    //     {

    //         name: "Windy",
    //         summary: "Windy is a non for profit organization that helps supply small wind turbines to unpriviled families ",
    //         description:null,
    //         activeStatus: true,
    //         ABN:  "49557732843",
    //         phone: "0438827348",
    //         website: "https://www.Windy.com",
    //         img: "https://www.Windy/logo-img.png", createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     },
    //     {

    //         name: "Doin Doughies",
    //         summary: "Doin Doughies bakes fresh donuts for the town of Narrandera daily",
    //         description:null,
    //         activeStatus: false,
    //         ABN:  "46392849511",
    //         phone: "0489334598",
    //         website: "https://www.doindoughies.com",
    //         img: "https://www.doindoughies/logo-img.png", createdAt: serverTimestamp(),
 	 	//  	  	 updatedAt: null
    //     }
    // ]
  //example of adding an item
    // this.itemsCollection = this.firestore.collection('/Organisations')
    // object.forEach(async (item) => {
    //   await this.itemsCollection.add(item).catch(err => console.log(err))
    // })
  //this.itemsCollection.add(object[0]).catch(err => console.log(`Error:${err.message}`))

    this.meta.subscribe({
      next: (test) => this.image = test,
      error:(err) => console.log(err)
    });


  }

  onFileSelected(event: any) {
    //todo validate that this is actually an image file
    const file = "target" in event ? event.target.files as FileList : event;

    const regImageType = /image\/.*/g
    console.log()

    if (file) {
      if (!regImageType.test(file[0].type)) {
        alert("invalid input")
        return;
      }
    //todo the upload should be done on the create organisation level
      this.storage.upload(`${this.organisationID}/orgLogo`, file[0])
      this.uploadedImage.emit(file)

      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      }
    }
  }

  // sendImageToParent(file: any) {
  //   if (file) {
  //     console.log(file)

  //     //todo the upload should be done on the create organisation level
  //     this.storage.upload(`${this.organisationID}/orgLogo`,file[0])


  //     let reader = new FileReader();
  //     reader.readAsDataURL(file[0]);

  //     reader.onload = (event: any) => {
  //       this.image = event.target.result;
  //     }
  //   }
  //   this.uploadedImage.emit(file)
  // }

}
