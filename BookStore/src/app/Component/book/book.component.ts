import { Component, Injectable, Input, OnInit } from '@angular/core';
import { GetBooksComponent } from '../get-books/get-books.component';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bid:any;
  starRating = 0; 
  bookId:any;
  constructor(private home:HomeComponent,private getBook:GetBooksComponent) { }
  changePage()
  {
    this.home.page = 'allBooks';
  }
  ngOnInit(): void {
    console.log(this.bid,"bookId in books");
    console.log(this.getBook.bId,"asd");
  }

}
