import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  outColor="#E8E8E8";
  defaultColor = "#FFF";
  constructor(private bookService:BookServiceService) { }
  ngOnInit(): void {
    //this.getBooks();
  }
  books:any=[
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
      "Price":1200,
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
        this.books = result.data;
    });
  }
}
