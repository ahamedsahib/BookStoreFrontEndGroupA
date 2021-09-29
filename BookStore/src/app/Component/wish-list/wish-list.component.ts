import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private home:HomeComponent,private bookService:BookServiceService) { }
  //wishList:any = [];
  ngOnInit(): void {
  }
  changePage()
  {
    this.home.page = 'allBooks';
  }
  getBooks()
  {
    this.bookService.GetWishList().subscribe(
      (result:any)=>{
        this.wishList = result.data;
        console.log(this.wishList);
        
    });
  }
  wishList:any=[
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
