import { TestBed } from '@angular/core/testing';

import { BookServiceService } from './book-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('BookServiceService', () => {
  let service: BookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule 
      ],
    });
    service = TestBed.inject(BookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
