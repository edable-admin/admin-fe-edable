import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() uploadedImage: EventEmitter<any> = new EventEmitter();

  image!: any;
  meta: Observable<any>;

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('users/istockphoto-493621192-612x612.jpg');
    this.meta = ref.getDownloadURL();
  }

  ngOnInit(): void {
    this.meta.subscribe({
      next: (test) => console.log(test),
      error:(err) => console.log(err)
     });
  }

  onFileSelected(event: any) {
    //todo validate that this is actually an image file
    const file = event.target.files[0]

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
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);

      reader.onload = (event: any) => {
        this.image = event.target.result;
      }
    }
    this.uploadedImage.emit(file)
  }
}
