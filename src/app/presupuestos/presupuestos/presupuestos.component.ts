import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';
@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
 
  presupuestos: any[] = [];

  constructor(private _presupuestosService:PresupuestosService) {
    this._presupuestosService.getPresupuestos().subscribe(rest => {
      for(const id$ in rest){
        console.log(id$);
        const p = rest[id$];
        p.id$ = id$;
        this.presupuestos.push(rest[id$]);
      }
    })
   }
 
  ngOnInit() {
  }

  eliminarPresupuesto(id$){
    this._presupuestosService.deletePresupuesto(id$).subscribe(res => {
     this.presupuestos = [];

      this._presupuestosService.getPresupuestos().subscribe(rest => {
      for(const id$ in rest){
        console.log(id$);
        const p = rest[id$];
        p.id$ = id$;
        this.presupuestos.push(rest[id$]);
      }
    });

    });
  }

}
