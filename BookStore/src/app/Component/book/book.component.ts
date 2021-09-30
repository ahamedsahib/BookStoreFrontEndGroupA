import { Component, Injectable, Input, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { GetBooksComponent } from '../get-books/get-books.component';
import { HomeComponent } from '../home/home.component';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bid:any;
  starRating = 0; 
  bookId:any;
 // book:any;
  constructor(private home:HomeComponent,private getBook:GetBooksComponent,private bookService:BookServiceService) { }
  changePage()
  {
    this.home.page = 'allBooks';
  }
  Rating=3;
  book=
    {
      "image": "../../../assets/Image 11@2x.png",
      "bookName": "Don't Make me Think",
      "authorName": "Ahamed",
      "rating":4.5,
      "price":1500,
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit accusantium esse quidem possimus mollitia, asperiores repellendus magnam qui expedita ad sit voluptatum dignissimos ex facere aliquid, suscipit vel similique eius?",
      "originalPrice":2000
    }

  ngOnInit(): void {
    console.log(this.bid,"bookId in books");
    console.log(this.getBook.bId,"asd");
  }
  getBooks()
  {
    this.bookService.GetBookDetails(this.bid).subscribe(
      (result:any)=>{
        this.book = result.data;
        console.log(this.book);
    });
  }

}
