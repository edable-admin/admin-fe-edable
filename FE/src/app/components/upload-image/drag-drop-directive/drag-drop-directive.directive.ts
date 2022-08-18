import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDropDirective]'
})
export class DragDropDirectiveDirective {

  //to use upload file in parent VV
  //https://stackoverflow.com/questions/37962701/emit-event-from-directive-to-parent-element
  @Output() uploadedFile:EventEmitter<any> = new EventEmitter();

  @HostBinding('class.fileover')
  fileOver!: Boolean;

  constructor() { }

  uploadFile(files: FileList) {
    this.uploadedFile.emit(files)
  }

  //source https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854

  //Drag Over listener
  @HostListener('dragover', ['$event']) onDragOver(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  //Drop Listener
  @HostListener('drop', ['$event']) public ondrop(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = false;

    const files = evt.dataTransfer.files as FileList;
    if (files.length > 0 && files.length < 2) {
      this.uploadFile(files)
    } else {
      alert('You can only upload 1 photo')
    }
  }

}
