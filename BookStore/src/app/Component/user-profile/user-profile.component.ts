import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { HomeComponent } from '../home/home.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingServiceService } from 'src/app/Services/DataSharing/data-sharing-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDisable = true;
  addressDisable = true;
  userdetails:any;
  index:any;
  addressdetails:any;
  uniqueAddress:any;
  ad= [
    {
      "addressId":1,
      "type":"Home",
      "address":"Bridze labz Solutions LLP No42,14th Main Cross Street,15th Cross Street, Sector4,Opp to BDA complex near to me,Kumarkopam street,HLS Layout,Bangalore",
      "city":"Bangalore",
      "state":"Karnataka"
    },
    {
      "addressId":2,
      "type":"Work",
      "address":"Bridze labz Solutions LLP No42,14th Main Cross Street,15th Cross Street, Sector4,Opp to BDA complex near to me,Kumarkopam street,HLS Layout,Bangalore",
      "city":"Broadway",
      "state":"Chennai"
    }
  ];
  data:any = [];
  userData:any = [];
  OpenAddressForm=false;
  openAddressDetail=false;
  

  constructor(
    private userService: UserServiceService,
    private home: HomeComponent,
    private snackBar: MatSnackBar,
    private statusdata: DataSharingServiceService
  ) { }

  ngOnInit(): void {
    var user=JSON.parse(localStorage.getItem('userDetails')!);
    this.userdetails=user;
    this.userData=this.userdetails;
    console.log(this.userData);
    this.getAddress();
    this.statusdata.currentStatus.subscribe((status:boolean) => 
    {
      if(status)
      {
        this.statusdata.changeStatus(false);
        this.getAddress();
      }
    })
  }
  
open(address:any){
  this.uniqueAddress=address;
  this.openAddressDetail=!this.openAddressDetail
}
  getAddress(){
    this.addressdetails=this.ad;
    this.data=this.ad;
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
      this.statusdata.changeStatus(true);
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
      this.statusdata.changeStatus(true);

    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
  }
  showAddressDetails(address:any,i:any)
  {
    this.index=i;
    this.uniqueAddress=address;
    this.openAddressDetail=!this.openAddressDetail
  }
}
