import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() imageOut: EventEmitter<any> = new EventEmitter();

  //string organisation/orgref
  @Input() orgnisationRef = '';

  //todo make organisationID an input which will be received from the api
  //when say the edit popup is opened
  //create will be interesting maybe when the api returns a success with the unique id
  //fire storage will create a file with the unique id and the file can be stored there in fire storage
  organisationID = "uid";

  imageName!: any;

  image!: any;
  imageURL: any;
  meta!: Observable<any>;

  constructor(
    private storage: AngularFireStorage,
    private fs: AngularFirestore
  ) {
  }

  getImageURL() {
    const ref = this.storage.ref(`Organisations/${this.orgnisationRef}/orgLogo`);

    return ref.getDownloadURL();
  }

  ngOnInit(): void {

    const orgFile = this.storage.ref(`Organisations/${this.orgnisationRef}`)
    if (this.orgnisationRef !== '') {

      orgFile.list().subscribe({
        next: (resp) => {
          if (resp?.items?.length >= 1) {
            this.meta = this.getImageURL();

            this.meta.subscribe({
              next: (img) => this.image = img,
              error:(err) => console.log(err)
            });
          }
        }
      })
    }
  }

  onFileSelected(event: any) {
    const file = "target" in event ? event.target.files as FileList : event;

    const regImageType = /image\/.*/g


    //check file exists
    if (file) {

      //check that file is an image
      if (!regImageType.test(file[0].type)) {
        alert("invalid input")
        return;
      }

      if(file.length >= 2 ){
        alert("please only select one image")
        return;
      }

      //send image to parent
      this.imageOut.emit(file)

      //display preview in html
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = (event: any) => {
      this.image = event.target.result;
      }
    }
  }
}
