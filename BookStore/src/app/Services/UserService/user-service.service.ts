import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }
  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  Register(data:any)
  {
    console.log(data);
    const params = {
      CustomerName: data.FullName,
      Email: data.EmailId,
      Password: data.Password,
      PhoneNumber: data.Phone
    }
    console.log(params);
    return this.httpService.post(`${environment.baseUrl}/api/User/register`,params);
  }
  Login(data:any)
  {
    const params = {
      Email: data.EmailId,
      Password: data.Password
    }
    console.log(params);
    return this.httpService.post(`${environment.baseUrl}/api/User/login`,params);
  }
  CheckEmailExists(data:any)
  {
    return this.httpService.get(`${environment.baseUrl}/api/checkEmailExists`,null,null,this.header);
  }
  ForgotPassword(data:any){
    const email = data.email;
    console.log(email);
    return this.httpService.post(`${environment.baseUrl}/api/User/forgetPassword?email=${email}`);
  }
  ResetPassword(data: any,formData:any){
    const params = {
     UserId: JSON.parse(data!).CustomerId,
     NewPassword: formData.password
    }
    console.log(params);
    return this.httpService.put(`${environment.baseUrl}/api/User/resetpassword`,params);
  }
  GetUserAddress(userId:any){
    return this.httpService.get(`${environment.baseUrl}/api/User/getUserAddress?userId=${userId}`)
  }
}
