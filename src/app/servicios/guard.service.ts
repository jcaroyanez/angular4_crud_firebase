import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class GuardService implements CanActivate{
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._autenticacionService.isAuthenticate();
  }


  constructor(private _autenticacionService:AutenticacionService) { }
 



}
