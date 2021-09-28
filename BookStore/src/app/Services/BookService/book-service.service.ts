import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpService:HttpServiceService) { }
  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  GetBooks()
  {
    return this.httpService.get(`${environment.baseUrl}/api/getBooks`,null,null,this.header);
  }
}
