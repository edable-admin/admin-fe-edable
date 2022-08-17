import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() uploadedImage: EventEmitter<any> = new EventEmitter();

  image!: any;

  constructor() { }

  ngOnInit(): void {
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
    this.uploadedImage.emit(file)
  }
}
