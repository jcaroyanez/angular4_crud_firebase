import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  inputSearch:FormControl;
  search:string;
  proveedores: any[] = [];
  loading:boolean = false;
  result:boolean = false;
  notResult:boolean = false;

  constructor(private _proveedoresService: ProveedoresService){
    /*this._proveedoresService.getProveedores().subscribe(rest => {
      for(const id$ in rest){
        console.log(id$);
        const p = rest[id$];
        p.id$ = id$;
        this.proveedores.push(rest[id$]);
       }
       this.loading = false;
     })*/
   }

  ngOnInit() {
    this.inputSearch = new FormControl();
    this.inputSearch.valueChanges
          .subscribe(finished => {
            this.search = finished;
            this.loading = true;
            if (this.search.length !== 0){
              this._proveedoresService.getProveedoresSearch(this.search).
               subscribe(rest => {
                       this.proveedores = [];
                       for(const id$ in rest){
                        const p = rest[id$];
                        p.id$ = id$;
                        this.proveedores.push(rest[id$]);
                      }
                  if( this.proveedores.length < 1 
                      && this.search.length >= 1){
                        this.notResult = true;
                      }else{
                        this.notResult = false;
                      }    
               })
                 this.loading = false;
                 this.result = true; 
            }else{
              this.proveedores = [];
              this.loading = false;
              this.result = false;
            }
          })

  }

}
