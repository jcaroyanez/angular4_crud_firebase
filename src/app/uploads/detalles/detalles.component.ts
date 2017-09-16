import { Component, OnInit, Input } from '@angular/core';
import { Archive } from '../upload/file.modal';
import { LoadfileService } from '../../servicios/loadfile.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() upload:Archive;
   
  constructor(private _loadfileService:LoadfileService) { }

  ngOnInit() {
  }

  deleteUpload(upload){
   this._loadfileService.deleteUpload(upload);
  }

}
