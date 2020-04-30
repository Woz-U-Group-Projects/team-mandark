import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService

) {
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const currentUser = this.authenticationService.currentUserValue;
  if (currentUser) {
    // authorised so return true
    if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

  // not logged in so redirect to login page with the return url
  // tslint:disable-next-line:no-unused-expression
  this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  return false;
}
}
