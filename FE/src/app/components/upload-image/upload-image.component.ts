import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { item } from 'src/app/models/no-sql-models';

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

  items!:Observable<any[]>;

  //private itemsCollection: AngularFirestoreCollection<item[]>;

  //private itemsCollection: AngularFirestoreCollection<any>;
  

  constructor(
    private storage: AngularFireStorage,
    public firestore: AngularFirestore
  ) {
    const ref = this.storage.ref(`${this.organisationID}/orgLogo`);
    this.meta = ref.getDownloadURL();

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

//   let dateStamp = new Date();

//   let object = {
//     name:null,
//     description:"string",
//     summary:"summary",
//     ABN:1111111111,
//     phone:"0411327261",
//     website:"http://www.google.com.au",
//     img:"thisisaurl",
//     activeStatus:true,
//     createdAt: dateStamp,
//     updatedAt:null
// }
//   //example of adding an item
//   this.itemsCollection = this.firestore.collection('/Organisations')
//   let test = this.itemsCollection.add(object).catch(err => console.log(`Error:${err.message}`))

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