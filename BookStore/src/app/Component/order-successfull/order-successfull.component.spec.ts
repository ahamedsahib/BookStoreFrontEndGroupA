import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessfullComponent } from './order-successfull.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderSuccessfullComponent', () => {
  let component: OrderSuccessfullComponent;
  let fixture: ComponentFixture<OrderSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule 
      ],
      declarations: [ OrderSuccessfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
