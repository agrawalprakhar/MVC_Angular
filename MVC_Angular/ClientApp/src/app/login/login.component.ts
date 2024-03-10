import { Component } from '@angular/core';
import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string ="";
  password : string = "";
  isAuthenticated: any;

  constructor (private authService :AuthorisationService){}
  

login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        // Successful login
           console.log("Login Sucess");
            
          },
         
      error => {
        console.error('Login failed:', error);
        // Handle login error
      }
    );
  }

}
