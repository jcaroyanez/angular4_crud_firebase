import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registroForm:FormGroup;
  userData:any;

  erroresForm = {
    'email':'',
    'password':''
  }

  mensajesValidacion = {
    'email':{
      'required':'email obligatorrio',
      'email':'introdusca un email correcto'
    },
    'password':{
       'required':'contraseña obligatorrio',
       'minlength':'digite mas 6 carracteres'
    }
  }
  
  constructor(private _formBuilder:FormBuilder,
              private _autenticacionService:AutenticacionService,
              private _route:Router, private _activatedRoute:ActivatedRoute) {



   }

  ngOnInit() {
       this.registroForm = this._formBuilder.group({
        'email':['',[Validators.required,Validators.email]],
        'password':['',[
          Validators.required,Validators.minLength(6)]]
      })

      this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data));
      this.onValueChanged();
  }

  onSubmit(){
    this.userData = this.saveUserData();
    this._autenticacionService.registroUsuario(this.userData);
    this._route.navigate(['/inicio'])
  }

  saveUserData(){
    const saveUserData = {
       email:this.registroForm.get('email').value,
       password:this.registroForm.get('password').value 
    }
    return saveUserData;
  }

    onValueChanged(data?: any) {
     if (!this.registroForm) { return; }
     const form = this.registroForm;
     for (const field in this.erroresForm) {
       
       this.erroresForm[field] = '';
       const control = form.get(field);
       if (control && control.dirty && !control.valid) {
         const messages = this.mensajesValidacion[field];
         for (const key in control.errors) {
           this.erroresForm[field] += messages[key] + ' ';
          }
        }
      }
    }

}
