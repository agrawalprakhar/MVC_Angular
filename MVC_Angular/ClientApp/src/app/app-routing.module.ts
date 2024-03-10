import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth-guard.service';




const routes: Routes = [

  { path: '', component: WelcomeComponent,canActivate :[AuthGuard] }, 

  {path:'signup',component:SignupComponent},
  
  { path: '**', component: NotFoundComponent ,canActivate :[AuthGuard] },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
