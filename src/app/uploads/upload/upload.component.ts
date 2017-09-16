import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import { Archive } from './file.modal';
import * as _ from 'lodash';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectFiled:FileList;
  currentUpload:Archive;

  loading:boolean = false;

  constructor(private _loadfileService:LoadfileService) { }

  ngOnInit() {
  }

  detecFile(event){
    this.selectFiled = event.target.files;
  }

  uploadSingle(){
    const file = this.selectFiled.item(0);
    this.currentUpload = new Archive(file);
    this.loading = true;
    this._loadfileService.pushUpload(this.currentUpload);
  }

}
