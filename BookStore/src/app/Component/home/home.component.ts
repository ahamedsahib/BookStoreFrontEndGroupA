import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  constructor(private router:Router) { }
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
}
