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
    headers:{ Authorization:"Bearer " + JSON.parse(localStorage.getItem('token')!)}
  };
  GetBooks()
  {
    
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetAllBooks`,null,true,this.header);
  }
  GetWishList()
  {
    return this.httpService.get(`${environment.baseUrl}/api/WishList/getwishlist?userId=${this.userdetails.customerId}`,null,true,this.header);
  }
  GetCartItem()
  {
    console.log('token:',this.header);
    return this.httpService.get(`${environment.baseUrl}/api/Cart/GetCartItem?userId=${this.userdetails.customerId}`,null,true,this.header);
  }
  GetBookDetails(id:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetBooks`,id,true,this.header);
  }
  AddToWishList(book:any,uid:any)
  {
    const params ={
      BookId:book.bookId,
      UserId:uid
    }
    console.log("wishlist:"+params);
    return this.httpService.post(`${environment.baseUrl}/api/WishList/AddToWishList`,params,true,this.header);
  }
  AddToCart(book:any,uid:any)
  {
    const params={
      BookID:book.bookId,
      UserId:uid,
      BookOrderCount:1
    }
    console.log("wishlist:"+params);
    return this.httpService.post(`${environment.baseUrl}/api/Cart/AddToCart`,params,true,this.header);
  }
  RemoveFromWishList(wishListId:any)
  {
    console.log(wishListId,"remove from wishlist");
    
    return this.httpService.delete(`${environment.baseUrl}/api/WishList/RemoveFromWishList?wishListId=${wishListId}`,null,true,this.header);
  }
  RemoveCartItem(cartId:any)
  {
    return this.httpService.delete(`${environment.baseUrl}/api/Cart/RemoveFromCart?cartId=${cartId}`,null,true,this.header);
  }
  UpdateOrderCount(type:any,id:any)
  {
    const params={
      CartID:id,
      type:type
    }
    return this.httpService.put(`${environment.baseUrl}/api/Cart/UpadetOrderCount`,params,true,this.header);
  }
  PlaceOrder(CartList:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Order/PlaceOrders`,CartList,true,this.header);
  }
  GetCustomerFeedBack(bookId:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetFeedback?bookid=${bookId}`);
  }
  AddCustomerFeedBack(param:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/AddCustomerFeedBack`,param,true,this.header);
  }
}
