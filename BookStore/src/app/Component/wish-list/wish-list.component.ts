import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private home:HomeComponent,private bookService:BookServiceService , private snackBar:MatSnackBar) { }
  wishList:any = [];
  ngOnInit(): void {
    this.getBooks();
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
  RemoveFromWishList(wishListId:any)
  {
    console.log(wishListId,"wishlistid");
    this.bookService.RemoveFromWishList(wishListId).subscribe(
      (result:any)=>{
        this.snackBar.open(`Removed From WishList`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        
    });
    
  }
  // wishList:any=[
  //   {
  //     "image": "../../../assets/book.png",
  //     "bookName": "Don't Make me Think",
  //     "authorName": "Diwakar",
  //     "rating":4.5,
  //     "price":1200,
  //     "bookCount":5,
  //     "originalPrice":1500
  //   },
  //   {
  //     "image": "../../../assets/book.png",
  //     "bookName": "Don't Make me Think",
  //     "authorName": "Diwakar",
  //     "rating":4.5,
  //     "price":1200,
  //     "bookCount":5,
  //     "originalPrice":1500
  //   }
  // ]
}
