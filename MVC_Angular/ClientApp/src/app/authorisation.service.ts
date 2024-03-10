import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http : HttpClient) {  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://dev-zmnne4e43jfo6tth.us.auth0.com/oauth/token', {
      username: username,
      password: password,
      grant_type: "password",
      client_id: "2Soefe9eKRoryvI6mO1NpJSdVvL6MROm",
      client_secret: "645vJV2GpjT4_UVJekIvyI5PvZ80_VBuZS9ur277W_zEomjK7ECpodKE0vTwRNLZ",
      audience: "https://dev-zmnne4e43jfo6tth.us.auth0.com/api/v2/"
    }).pipe(
      tap(response => {
        const accessToken = response.access_token;
       localStorage.setItem("access_token",accessToken)
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
