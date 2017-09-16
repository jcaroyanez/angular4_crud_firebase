import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {
  prosUrl:string = "https://compras-ab3c3.firebaseio.com/prov.json";
  proUrl = "https://compras-ab3c3.firebaseio.com/prov";

 constructor(private _http:Http){ }

   postProveedor(presupuesto:any){
    const newPress = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-type':'application/json'
    });
    return this._http.post(this.prosUrl,newPress,headers).map(res => {
      console.log(res.json());
      return res.json();
    })
  }

  getProveedores(){
    return this._http.get(this.prosUrl).map(res => res.json());
  }

  getProvedor(id$:string){
   const url = `${this.proUrl}/${id$}.json`;
   return this._http.get(url).map(res => res.json());
  }

  putProveedor(presupuesto:any,id$:string){
    const newPress = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-type':'application/json'
    });

    const url = `${this.proUrl}/${id$}.json`;

    return this._http.put(url,newPress,{headers})
    .map(res =>{ 
      console.log(res);
      return res.json()
      });
   }

    deletePresupuesto(id$:string){
      const url = `${this.proUrl}/${id$}.json`;
      return this._http.delete(url).map(rest => rest.json());
    }

    getProveedoresSearch(search:string){
      console.log(search);
        const url = `${this.prosUrl}?orderBy="nombre"&startAt="${search}"&andAt="${search}\uf8ff"`;
        return this._http.get(url).map(rest => rest.json());
    }


}
