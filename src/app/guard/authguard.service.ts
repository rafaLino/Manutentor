import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (localStorage.getItem('currentUser')){
      return true;
    }
    this.route.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
