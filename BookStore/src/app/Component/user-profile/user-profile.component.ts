import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { HomeComponent } from '../home/home.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDisable = true;
  addressDisable = true;
  userdetails:any;
  addressdetails:any = [];
  data:any = [];
  userData:any = [];
  
  constructor(
    private userService: UserServiceService,
    private home: HomeComponent,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    var user=JSON.parse(localStorage.getItem('userDetails')!);
    this.userdetails=user;
    this.userData=this.userdetails;
    console.log(this.userData);

    this.getAddress();
  }

  getAddress(){
    this.userService.GetUserAddress(this.userdetails.customerId)
    .subscribe((result:any)=>{
      console.log(result);
      this.addressdetails = result.data[0];
      //console.log(this.addressdetails);
    });
  }
  changePage()
  {
    this.home.page = 'allBooks';
  }

  EditUser(){
    console.log(this.userData,"helo");
    var update=this.userData
    this.userService.EditUserDetails(this.userData, this.userdetails.customerId)
    .subscribe((result:any)=>{
      console.log(result);
      console.log(this.userData,"USer");
      localStorage.setItem('userDetails',JSON.stringify(update));
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      this.ngOnInit();
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
    
  }
  EditAddress(){
    console.log(this.data);
    this.userService.EditAddress(this.data, this.addressdetails.addressId,this.userdetails.customerId)
    .subscribe((result:any)=>{
      console.log(result);
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
  }
}
