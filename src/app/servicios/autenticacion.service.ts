import { Injectable } from '@angular/core';
import  * as firebase from 'firebase';
import { Router,ActivatedRoute} from '@angular/router'
@Injectable()
export class AutenticacionService {

  constructor(private _router:Router, private activatedRoute:ActivatedRoute) { }

  registroUsuario(userData){

    firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password)
    .catch(error => {
      console.log(error);
    })
  }

  inicioSesion(userData){
    firebase.auth().signInWithEmailAndPassword(userData.email,userData.password).then(
      response => {
        console.log(response);
        this._router.navigate(['/inicio']);
      }).catch(
        error =>{
          console.log(error);
      })
  }

  isAuthenticate(){
    const user = firebase.auth().currentUser;
    if(user){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    firebase.auth().signOut();
  }

}
