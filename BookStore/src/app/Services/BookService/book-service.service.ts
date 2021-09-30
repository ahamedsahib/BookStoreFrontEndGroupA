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
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetAllBooks`);
  }
  GetWishList()
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/getWishList=${this.uid}`);
  }
  GetBookDetails(id:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Book/GetBooks`,id);
  }
}
