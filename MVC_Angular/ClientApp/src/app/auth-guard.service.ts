import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorisationService } from './authorisation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthorisationService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to the login page

      return false;
    }
  }
}