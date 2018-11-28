import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  isEmptyObject(obj) {
      return (obj && (Object.keys(obj).length === 0));
  }

  canActivate(): boolean {
      let data = localStorage.getItem('data');
      let prsData = JSON.parse(data);
      if (this.isEmptyObject(prsData)) {
          this.router.navigate(['login']);
          return false;
      }
      return true;
  }
}
