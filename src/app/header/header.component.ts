import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _autenticacionService:AutenticacionService,
              private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth(){
    return this._autenticacionService.isAuthenticate();
  }

  logout(){
    this._autenticacionService.logout();
    this._router.navigate(['/inicio']);
  }

}
