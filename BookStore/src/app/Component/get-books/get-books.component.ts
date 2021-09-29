import { Component, OnInit, Type } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  outColor="#E8E8E8";
  defaultColor = "#FFF";
  display=1;
  constructor(private bookService:BookServiceService) { }
  ngOnInit(): void {
    this.getBooks();
  }
  books:any = [];
  returnedBooks:any = [];
  arr:any = [];
  
  cooks:any=[
    {
      "Image": "../../../assets/book.png",
      "BookName": "Don't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1500,
      "BookCount":0
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    },
    {
      "Image": "../../../assets/book.png",
      "BookName": "Dont't Make me Think",
      "AuthorName": "Diwakar",
      "Rating":4.5,
      "Price":1200,
      "BookCount":5
    }
  ];

  getBooks()
  {
    this.bookService.GetBooks().subscribe(
      (result:any)=>{
        this.returnedBooks = result.data;
        console.log(this.returnedBooks);
        this.ChangeOrder(1);
    });
  }
  ChangeOrder(num:any)
  {
    console.log(this.returnedBooks,"retbooks");
    if(num==1)
    {
      this.books = this.returnedBooks.sort((a:any, b:any) => (a.price < b.price ? -1 : 1));
    }
    else if(num==2){
      this.books = this.returnedBooks.sort((a:any, b:any) => (a.price > b.price ? -1 : 1));
    }
    else{
      this.books = this.returnedBooks.reverse();
    }
    console.log(this.returnedBooks,"after sort");
    
  }
}
