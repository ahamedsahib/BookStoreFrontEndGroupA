import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-order-successfull',
  templateUrl: './order-successfull.component.html',
  styleUrls: ['./order-successfull.component.scss']
})
export class OrderSuccessfullComponent implements OnInit {

  constructor(private home:HomeComponent) { }

  ngOnInit(): void {
  }

  ContinueShopping(){
    this.home.page='allBooks';
  }
}
