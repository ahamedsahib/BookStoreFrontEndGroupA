import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './Component/login-register/login-register.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { HomeComponent } from './Component/home/home.component';
import { GetBooksComponent } from './Component/get-books/get-books.component';

 
const routes: Routes = [
  {path:'login', component:LoginRegisterComponent},
  { path:'forgotPassword', component:ForgotPasswordComponent},
  { path:'resetPassword', component:ResetPasswordComponent},
  { path:'home', component:HomeComponent},
  { path:'getBooks', component:GetBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
