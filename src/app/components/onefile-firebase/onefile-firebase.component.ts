import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-onefile-firebase',
  templateUrl: './onefile-firebase.component.html',
  styleUrls: ['./onefile-firebase.component.css']
})
export class OnefileFirebaseComponent implements OnInit {

  title = 'firebase';
  selectedFile:any;
  fb:any;
  downloadURL: any;
  constructor(private storage: AngularFireStorage) {}
  ngOnInit() {}
  onFileSelected(event:any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url:any) => {
            if (url) {
              this.fb = url;
              alert("upload successful!")
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
