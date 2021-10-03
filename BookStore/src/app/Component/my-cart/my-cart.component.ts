import { Component, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { DataSharingServiceService } from 'src/app/Services/DataSharing/data-sharing-service.service';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})


export class MyCartComponent implements OnInit {

  constructor(private home:HomeComponent,private bookService:BookServiceService,
    private snackBar:MatSnackBar,
    private router:Router,
    private statusdata: DataSharingServiceService,
    private userService: UserServiceService) { }

  CartList:any = [];
  OrderList:any=[];
  cartlength:any;
  userDisable = true;
  addressDisable = true;
  userdetails:any;
  index:any;
  addressdetails:any;
  uniqueAddress:any;
  updateAddress:any=[];
  data:any = [];
  userData:any = [];
  OpenAddressForm=false;
  openAddressDetail=false;
  

  ngOnInit(): void {
    this.getBooks(); 

    this.statusdata.currentStatus.subscribe((status:boolean) => 
    {
      if(status)
      {
        this.statusdata.changeStatus(false);
        this.getBooks();
      }
    })
  }

  getBooks()
  {
    this.bookService.GetCartItem().subscribe(
      (result:any)=>{
        this.CartList = result.data;
        console.log(this.CartList);
        this.cartlength=this.CartList.length;
    });
  }
  RemoveCartItem(id:any)
  {
    console.log(id);
    this.bookService.RemoveCartItem(id).subscribe(
      (result:any)=>{
        this.snackBar.open(`Removed From Cart`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        this.statusdata.changeStatus(true);
    });
    
  }
  UpdateOrderCount(type:any,id:any)
  {
    console.log(id);
    this.bookService.UpdateOrderCount(type,id).subscribe(
      (result:any)=>{
        this.snackBar.open(`One Book is added `, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        this.statusdata.changeStatus(result.status);
    });
  }
  PlaceOrder()
  {
    if(this.CartList.length!=0)
    {
    this.showCustomerDetails = true;
    this.showCart = false;
    }
    else
    {
      this.snackBar.open(`No item in cart to place order `, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    }
  }
  confirmUserdeatils()
  {
    this.showCustomerDetails = false;
    this.showOrderSummary = true;
  }
  Checkout()
  {
    this.bookService.PlaceOrder(this.CartList).subscribe(
      (result:any)=>{
        this.snackBar.open(`Order is placed `, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        this.router.navigate(['/Order-successfull']);
    });
  }
  showCustomerDetails = false;
  showOrderSummary = false;
  showCart = true;
  

  getAddress()
  {
    this.userService.GetUserAddress(this.userdetails.customerId)
    .subscribe((result:any)=>{
      console.log(result);
      this.data=result.data;
    });
  }
  changePage()
  {
    this.home.page = 'allBooks';
  }


  
  EditAddress(){
    this.userService.EditAddress(this.uniqueAddress, this.uniqueAddress.addressId,this.userdetails.customerId)
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

  Cancel(){
    this.data = this.addressdetails;
    this.openAddressDetail=!this.openAddressDetail;
    this.statusdata.changeStatus(true);
  }
  Close(){
    this.OpenAddressForm=false;
    this.statusdata.changeStatus(true);
  }


  AddAddress(){
    console.log(this.updateAddress);
    this.userService.addAddress(this.updateAddress,this.userdetails.customerId)
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

}
