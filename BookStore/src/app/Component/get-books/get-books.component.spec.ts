

import { async, ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { GetBooksComponent } from './get-books.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';


describe('GetBooksComponent', () => {
  let component: GetBooksComponent;
  let fixture: ComponentFixture<GetBooksComponent>;
  let userService:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule ,
        RouterTestingModule,
        NgxPaginationModule
      ],
      providers: [
        BookServiceService
      ],
      declarations: [ GetBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(inject([BookServiceService], (s: any) => {
    userService = s;
    fixture = TestBed.createComponent(GetBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getbook method', waitForAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'getBooks');
    expect(component.getBooks).toHaveBeenCalledTimes(0);
  }));

});

