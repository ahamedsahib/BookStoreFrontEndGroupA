import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingServiceService } from 'src/app/Services/DataSharing/data-sharing-service.service';
import { GetBooksComponent } from '../get-books/get-books.component';
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open=false;
  hide=true;
  page = 'allBooks';
  bookName:any;
  bid:any;
  isBadgeHidden=true;
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  constructor(private router:Router,private statusdata: DataSharingServiceService) { }
  ngOnInit(): void {
  }
show(){
  this.open=!this.open;
}
Logout()
{
  localStorage.removeItem('userDetails');
  this.router.navigate(['/login']);
}
Search()
{
  console.log(this.bookName,"home");
  if(this.bookName=="")
  {
    
      this.statusdata.changeStatus(true);
      // this.bookName=" ";
   
  }
  else{
    this.statusdata.changeSearchStatus(true);
  }
  
}
}
