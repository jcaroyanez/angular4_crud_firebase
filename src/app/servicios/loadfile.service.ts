import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, 
         FirebaseObjectObservable } from 'angularfire2/database'; 

import * as firebase from 'firebase';
import { Archive } from '../uploads/upload/file.modal';   

@Injectable()
export class LoadfileService {

  private basePath:string = "/uploads";
  uploads:FirebaseListObservable<Archive[]>;

  constructor(public _angularFireDatabase:AngularFireDatabase){}

  pushUpload(upload:Archive){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);


    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                 (snapshot) => {
                  upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
                 },(error) => {
                   console.log(error);
                 }, () => {
                    upload.url = uploadTask.snapshot.downloadURL;
                    upload.name = upload.file.name;
                    this.saveFileData(upload);  
                    return undefined;
                 })
  }

  private saveFileData(upload:Archive){
     this._angularFireDatabase.list(`${this.basePath}/`).push(upload);
  }

  getUploads(){
    this.uploads = this._angularFireDatabase.list(this.basePath);
    return this.uploads;
  }

  deleteUpload(upload:Archive){
    this.deleteFileData(upload.$key)
    .then(() => {
      this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error));
  }

  private deleteFileData(key:string){
    return this._angularFireDatabase.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name:string){
     const storage = firebase.storage().ref();
     storage.child(`${this.basePath}/${name}`).delete();
  }

}
