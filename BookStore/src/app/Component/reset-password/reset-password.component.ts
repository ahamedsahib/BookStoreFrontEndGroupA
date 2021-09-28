import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm!: FormGroup;
  constructor(
    private userService:UserServiceService, 
    private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
      confirm: new FormControl('', [Validators.required]),
      otp: new FormControl('',[Validators.required])
    });
  }

  ResetPassword(){
    var data = localStorage.getItem('BookStoreForgot');
    console.log(data);
    var generatedOtp = JSON.parse(data!).otp;
    if(generatedOtp == this.ResetPasswordForm.value.otp){
      this.userService.ResetPassword(data,this.ResetPasswordForm.value)
      .subscribe((result:any)=>{
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      if(result.status == true)
      {
        this.router.navigate(['/home']);
      }
    }, error =>{
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
    }
    
  }
}
