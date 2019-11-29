import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate {
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      console.log(next);
      console.log("========");
      console.log(state);
      console.log("allow you to direct page!");
      return true;
    }
  }