import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor() { }
  canActivate(): boolean {
    let logedin=JSON.parse(sessionStorage.getItem("user"))||JSON.parse(sessionStorage.getItem("lecturer"));
    if(logedin)
      return true;
    else
    alert("you have to log in first!")
    return false;
  }
}
