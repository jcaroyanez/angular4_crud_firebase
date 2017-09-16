import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import { Archive } from '../upload/file.modal';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
 
  uploads:FirebaseListObservable<Archive[]>;

  constructor(private _loadfileService:LoadfileService){ }

  ngOnInit(){
    this.uploads = this._loadfileService.getUploads();
  }

}
