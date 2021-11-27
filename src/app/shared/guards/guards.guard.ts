import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    const authorStorage = sessionStorage.getItem('author');
    if(!authorStorage) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
  
}

