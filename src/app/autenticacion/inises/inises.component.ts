import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm:FormGroup;
  userData:any;
  mensaje:boolean;


   constructor(private _formBuilder:FormBuilder,
              private _autenticacionService:AutenticacionService,
              private _route:Router, private _activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
        this.loginForm = this._formBuilder.group({
        'email':['',[Validators.required,Validators.email]],
        'password':['',[
          Validators.required,Validators.minLength(6)]]
      })

  }

  onSubmit(){
    this.userData = this.saveUserData();
    this._autenticacionService.inicioSesion(this.userData);
    setTimeout(() => {
      if(this.isAuth() == false){
        this.mensaje = true;
      }
    },2000);
  }

  saveUserData(){
    const saveUserData = {
       email:this.loginForm.get('email').value,
       password:this.loginForm.get('password').value 
    }
    return saveUserData;
  }

  isAuth():boolean{
    return this._autenticacionService.isAuthenticate();
  }

}
