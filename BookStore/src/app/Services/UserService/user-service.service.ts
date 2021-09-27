import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }
  Register(data:any)
  {
    const params = {
      FullName: data.FullName,
      EmailId: data.EmailId,
      Password: data.Password,
      Phone: data.Phone
    }
    return this.httpService.post(`${environment.baseUrl}/api/register`,params);
  }
  Login(data:any)
  {
    const params = {
      EmailId: data.EmailId,
      Password: data.Password
    }
    return this.httpService.post(`${environment.baseUrl}/api/login`,params);
  }
}
