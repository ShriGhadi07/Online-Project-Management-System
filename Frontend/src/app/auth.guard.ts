import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {

constructor(private roterObj:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('userName') === "9075")
    {
      return true;
    }
    else
    {
      this.roterObj.navigate(['login']);
      return false;
      
      //this.routerObj.navigate(['login'])
    }
  }
};
