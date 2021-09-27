import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private userService:UserServiceService, private snackBar:MatSnackBar,private router:Router) { }
  LoginForm!:FormGroup;
  RegisterForm!:FormGroup;
  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      FullName: new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
      EmailId: new FormControl('',[Validators.required, Validators.email]),
      Password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
      Phone:new FormControl('',[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")])
    });
    this.LoginForm = new FormGroup({
     EmailId: new FormControl('',[Validators.required, Validators.email]),
      Password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')])
    });
  }

  Register()
  {
    this.userService.Register(this.RegisterForm.value)
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
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
  }
  Login()
  {
    this.userService.Login(this.LoginForm.value)
    .subscribe((result:any)=>{
      console.log(result);
        localStorage.setItem('token',result.jwtToken);
        localStorage.setItem('userDetails',JSON.stringify(result.userData));
        this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        if(result.status == true)
        {
          this.router.navigate(['/home']);
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
