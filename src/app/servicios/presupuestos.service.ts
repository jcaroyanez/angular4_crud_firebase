import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {
 
  presUrl:string = "https://compras-ab3c3.firebaseio.com/presupuestos.json";
  pruUrl = "https://compras-ab3c3.firebaseio.com/presupuestos";
  constructor(private _http:Http){ }

  postPresupuesto(presupuesto:any){
    const newPress = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-type':'application/json'
    });
    return this._http.post(this.presUrl,newPress,headers).map(res => {
      console.log(res.json());
      return res.json();
    })
  }

  getPresupuestos(){
    return this._http.get(this.presUrl).map(res => res.json());
  }

  getPresupuesto(id$:string){
   const url = `${this.pruUrl}/${id$}.json`;
   return this._http.get(url).map(res => res.json());
  }

  putPresupuesto(presupuesto:any,id$:string){
   const newPress = JSON.stringify(presupuesto);
   const headers = new Headers({
     'Content-type':'application/json'
   });

  const url = `${this.pruUrl}/${id$}.json`;

   return this._http.put(url,newPress,{headers})
   .map(res =>{ 
     console.log(res);
     return res.json()
    });
  }

  deletePresupuesto(id$:string){
    const url = `${this.pruUrl}/${id$}.json`;
    return this._http.delete(url).map(rest => rest.json());
  }

}
