import { Component, Injectable, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { HomeComponent } from '../home/home.component';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {

  constructor(
    private home:HomeComponent,
    private bookService:BookServiceService
  ) { }
  CartList:any = [];

  ngOnInit(): void {
  }

  changePage()
  {
    this.home.page = 'allBooks';
  }
  getBooks()
  {
    this.bookService.GetCartItem().subscribe(
      (result:any)=>{
        
    });
  }
  order:any=[
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
}

