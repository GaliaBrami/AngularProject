import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerGuardService implements CanActivate{

  constructor() { }
  canActivate(): boolean{
    if(JSON.parse(sessionStorage.getItem("lecturer")))
    return true;
  alert("only lecturers can add courses!")
  return false;
  }
}
