import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
 book:any;
 userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  constructor(private home:HomeComponent,private snackBar:MatSnackBar,private getBook:GetBooksComponent,private bookService:BookServiceService,private router:Router) { }
  changePage()
  {
    this.home.page = 'allBooks';
  }
  Rating=3;
  

  ngOnInit(): void 
  {
    console.log(this.bid,"bookId in books");
    this.book = this.bid;
  }
  getBooks()
  {
    this.bookService.GetBookDetails(this.bid).subscribe(
      (result:any)=>
      {
        this.book = result.data;
        console.log(this.book);
    });
  }
  AddToWishList(book:any)
  {
    
    if(this.userdetails == null)
    {
      this.snackBar.open(`You need to login First`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      this.router.navigate(['/login']);
    }
    else
    {
      console.log(book,this.userdetails.customerId,"bc");
      
      this.bookService.AddToWishList(book,this.userdetails.customerId).subscribe(
        (result:any)=>{
          this.snackBar.open(`${result.message}`, '', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'left'
          });
      });
    }
  }
    AddToCart(book:any)
  {
    
    if(this.userdetails == null)
    {
      this.snackBar.open(`You need to login First`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      this.router.navigate(['/login']);
    }
    else
    {
      console.log(book,this.userdetails.customerId,"bc");
      
      this.bookService.AddToCart(book,this.userdetails.customerId).subscribe(
        (result:any)=>{
          this.snackBar.open(`${result.message}`, '', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'left'
          });
      });
    }
    
  }

}
