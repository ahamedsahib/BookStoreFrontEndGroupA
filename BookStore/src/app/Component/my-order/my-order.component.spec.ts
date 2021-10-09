import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyOrderComponent } from './my-order.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyOrderComponent', () => {
  let component: MyOrderComponent;
  let fixture: ComponentFixture<MyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule 
      ],
      declarations: [ MyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getbook method', waitForAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'getBooks').and.callThrough;
    component.getBooks();
    expect(component.getBooks).toHaveBeenCalledTimes(1);
  }));
});
