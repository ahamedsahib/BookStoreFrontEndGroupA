import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  constructor(private home:HomeComponent,private bookService:BookServiceService) { }
  ngOnInit(): void {
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

  }
  showCustomerDetails = false;
  showOrderSummary = false;
  showCart = true;
  cartBooks:any=[
    {
      "image": "../../../assets/book.png",
      "bookName": "Don't Make me Think",
      "authorName": "Diwakar",
      "rating":4.5,
      "price":1200,
      "bookCount":5,
      "originalPrice":1500
    },
    {
      "image": "../../../assets/book.png",
      "bookName": "Don't Make me Think",
      "authorName": "Diwakar",
      "rating":4.5,
      "price":1200,
      "bookCount":5,
      "originalPrice":1500
    }
  ]
  changePage()
  {
    this.home.page = 'allBooks';
  }

}
