import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open=false;
  hide=true;
  userdetails=JSON.parse(localStorage.getItem('userDetails')!);
  constructor() { }
  ngOnInit(): void {
  }
show(){
  this.open=!this.open;
}
}
