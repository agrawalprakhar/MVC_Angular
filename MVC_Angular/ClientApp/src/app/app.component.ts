import { Component } from '@angular/core';
import { AuthorisationService } from './authorisation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ClientApp';

  constructor(private authService: AuthorisationService) {}

  isAuthenticated(): boolean | Observable<boolean> {
    return this.authService.isAuthenticated();
  }
  logout(): void {
    this.authService.logout();
  }
}
