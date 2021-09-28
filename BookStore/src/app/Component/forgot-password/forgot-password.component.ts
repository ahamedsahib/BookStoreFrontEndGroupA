import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm!: FormGroup;

  constructor(
    private userService:UserServiceService, 
    private snackBar:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.ForgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ForgotPassword(){
    this.userService.ForgotPassword(this.ForgotPasswordForm.value)
    .subscribe((result:any)=>{
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      if(result.status == true){
        const params = {
          CustomerId: result.data.customerId,
          otp:result.data.otp
        }
        localStorage.setItem('BookStoreForgot', JSON.stringify(params));
        this.router.navigate(['/resetPassword']);
      }
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
  }
}
