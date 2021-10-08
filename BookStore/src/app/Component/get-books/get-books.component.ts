import { Component, Injectable, Input, OnInit, Type } from '@angular/core';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { DataSharingServiceService } from 'src/app/Services/DataSharing/data-sharing-service.service';
import { HomeComponent } from '../home/home.component';
@Injectable({ 
  providedIn: 'root'
})
@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  @Input() bookName:any;
  p: number = 1;
  outColor="#E8E8E8";
  defaultColor = "#FFF";
  display=1;
  reviewLength:any;
  res:any;
  constructor(private bookService:BookServiceService,private home:HomeComponent,
    private statusdata: DataSharingServiceService) {
   }
  ngOnInit(): void {
    this.getBooks();
    //this.Search();
    this.statusdata.currentStatus.subscribe((status:boolean) => 
    {
      if(status)
      {
      
        this.statusdata.changeStatus(false);
        this.getBooks();
        this.ngOnInit();
        //this.bookName = "asdffs";
        //this.Search();
      }
    })
    this.statusdata.currentSearchStatus.subscribe((status:boolean) => 
    {
      if(status)
      {
      
        this.statusdata.changeSearchStatus(false);
        this.Search();
      }
    })
    }
  books:any = [];
  returnedBooks:any = [];
  arr:any = [];
  bId:any;
  ViewBook(bookC:any)
  {
    this.bId = bookC.bookId;
    console.log(this.bId,"book");
    this.home.page = 'viewBook';
    this.home.bid = bookC;
  }
  Search()
  {
    console.log("seach");
    console.log(this.bookName);
   
    this.books = this.books.filter((res:any)=>{ 
          return res.bookName.toLowerCase().match(this.bookName);
        });
    
  }

  getBooks()
  {
    this.bookService.GetBooks().subscribe(
      (result:any)=>{
        this.returnedBooks = result.data;
        console.log(this.returnedBooks);
        this.ChangeOrder(0);
        return result.status;
    });
  }
  getReviewCount(id:any)
  {
    console.log(id,"bookId");
    
    this.bookService.GetCustomerFeedBack(id).subscribe((result:any)=>{
      console.log(result.data,"getCustomer");
      //console.log();
      
      return result.data.length;
    });
  }
  ChangeOrder(num:any)
  {
    console.log(this.returnedBooks,"retbooks");
    if(num==0)
    {
      this.books = this.returnedBooks;
    }
    else if(num==1)
    {
      this.books = this.returnedBooks.sort((a:any, b:any) => (a.price < b.price ? -1 : 1));
    }
    else if(num==2){
      this.books = this.returnedBooks.sort((a:any, b:any) => (a.price > b.price ? -1 : 1));
    }
    else{
      this.books = this.returnedBooks.reverse();
    }
    console.log(this.returnedBooks,"after sort");
    
  }
}
