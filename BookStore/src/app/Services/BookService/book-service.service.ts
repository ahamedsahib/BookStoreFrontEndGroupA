import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpService:HttpServiceService) { }
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  uid = this.userdetails.userId;
  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  GetBooks()
  {
    console.log("getBooks");
    
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetAllBooks`);
  }
  GetWishList()
  {
    //need to change api route
    return this.httpService.post(`${environment.baseUrl}/api/Book/getWishList=${this.uid}`);
  }
}
