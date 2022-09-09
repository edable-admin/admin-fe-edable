import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) {}

  checkImageType(img: FileList) {
    if (!img) {
      return false;
    }

    const regImage = /image\/.*/g;

    if (img.length === 1 && regImage.test(img[0].type)) {
      return true;
    } else {
      return false;
    }
  }

  async uploadImage(orgRef: string, file: FileList, itemRef?: string) {
    let imgLocation = itemRef
      ? `Organisations/${orgRef}/Items/${itemRef}/itemImg`
      : `Organisations/${orgRef}/orgLogo`;

    let imgURL: string;

    if (this.checkImageType(file)) {
      const org = this.fs.collection('Organisations').doc(orgRef).ref;

      const item = this.fs
        .collection('Organisations')
        .doc(`${orgRef}`)
        .collection('Items')
        .doc(`${itemRef}`).ref;

      await (
        await this.storage.upload(imgLocation, file[0])
      ).ref
        .getDownloadURL()
        .then(async (url) => {
          if (itemRef) {
            await item.set({ img: url }, { merge: true });
          } else {
            await org.set({ img: url }, { merge: true });
          }
          imgURL = url;
        })
        .catch((err) => console.log(err));
    }

    return imgURL;
  }
}
