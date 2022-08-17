import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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
  //meta: Observable<any>;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {

    // this.meta.subscribe({
    //   next: (test) => this.image = test,
    //   error:(err) => console.log(err)
    //  });
  }

  onFileSelected(event: any) {
    //todo validate that this is actually an image file
    const file = event.target.files[0]

    //todo the upload should be done on the create organisation level
    this.storage.upload(`${this.organisationID}/orgLogo`,file)

    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      }
    }
  }

  sendImageToParent(file: any) {
    if (file) {

      //todo the upload should be done on the create organisation level
      this.storage.upload(`${this.organisationID}/orgLogo`,file[0])


      let reader = new FileReader();
      reader.readAsDataURL(file[0]);

      reader.onload = (event: any) => {
        this.image = event.target.result;
      }
    }
    this.uploadedImage.emit(file)
  }

}
