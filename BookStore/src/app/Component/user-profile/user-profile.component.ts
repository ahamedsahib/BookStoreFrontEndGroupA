import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDisable = true;
  addressDisable = true;
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  addressdetails:any = [];
  
  constructor(
    private userService: UserServiceService,
    private home: HomeComponent
  ) { }

  ngOnInit(): void {
    this.getAddress();
  }

  getAddress(){
    this.userService.GetUserAddress(this.userdetails.customerId)
    .subscribe((result:any)=>{
      console.log(result);
      this.addressdetails = result.data[0];
      console.log(this.addressdetails);
      console.log(this.addressdetails.addressId);
    });
  }
  changePage()
  {
    this.home.page = 'allBooks';
  }
}
