import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  constructor(private home:HomeComponent,private bookService:BookServiceService,private snackBar:MatSnackBar) { }
  CartList:any = [];
  ngOnInit(): void {
    this.getBooks();  
  }

  getBooks()
  {
    this.bookService.GetCartItem().subscribe(
      (result:any)=>{
        this.CartList = result.data;
        console.log(this.CartList);
        
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
        })
    });
  }
  PlaceOrder()
  {
    this.showCustomerDetails = true;
    this.showCart = false;
  }
  confirmUserdeatils()
  {
    this.showCustomerDetails = false;
    this.showOrderSummary = true;
  }
  Checkout()
  {
    //pass cart
  }
  showCustomerDetails = false;
  showOrderSummary = false;
  showCart = true;
  changePage()
  {
    this.home.page = 'allBooks';
  }

}
