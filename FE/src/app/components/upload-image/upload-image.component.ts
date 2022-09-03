import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() imageOut: EventEmitter<any> = new EventEmitter();

  @Input() imgUrl:string;

  imageName!: any;

  image!: any;
  imageURL: any;
  meta!: Observable<any>;

  constructor(
  ) {
  }

  getImageURL() {
    this.image = this.imgUrl
  }

  ngOnInit(): void {
    if (this.imgUrl !== '') {
      this.getImageURL();
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
