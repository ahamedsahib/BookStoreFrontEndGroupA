import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpService:HttpServiceService , private router:Router) { }
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  //uid = this.userdetails.userId;
  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  GetBooks()
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetAllBooks`);
  }
  GetWishList()
  {
    return this.httpService.get(`${environment.baseUrl}/api/WishList/getwishlist?userId=${this.userdetails.customerId}`);
  }
  GetBookDetails(id:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetBooks`,id);
  }
  AddToWishList(book:any,uid:any)
  {
    const params ={
      BookId:book.bookId,
      UserId:uid
    }
    console.log("wishlist:"+params);
    return this.httpService.post(`${environment.baseUrl}/api/WishList/AddToWishList`,params);
  }
  RemoveFromWishList(wishListId:any)
  {
    console.log(wishListId,"remove from wishlist");
    
    return this.httpService.delete(`${environment.baseUrl}/api/WishList/RemoveFromWishList?wishListId=${wishListId}`);
  }
}
