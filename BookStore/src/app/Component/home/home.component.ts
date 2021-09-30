import { Component, Injectable, OnInit } from '@angular/core';
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
  bid:any;
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  constructor() { }
  ngOnInit(): void {
  }
show(){
  this.open=!this.open;
}

}
