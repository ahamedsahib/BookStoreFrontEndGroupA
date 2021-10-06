import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { DataSharingServiceService } from 'src/app/Services/DataSharing/data-sharing-service.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteNoteComponent } from '../delete-note/delete-note.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  @Input() bookName: any;
  p: number = 1;
  outColor = "#E8E8E8";
  defaultColor = "#FFF";
  display = 1;
  reviewLength: any;
  res: any;
  books: any = [];
  arr: any = [];
  bId: any;
  editable = false;

  constructor(private router: Router, private bookService: BookServiceService, private home: HomeComponent,
    private statusdata: DataSharingServiceService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();

    this.statusdata.currentStatus.subscribe((status: boolean) => {
      if (status) {

        this.statusdata.changeStatus(false);
        this.getBooks();
        this.ngOnInit();
      }
    })
    this.statusdata.currentSearchStatus.subscribe((status: boolean) => {
      if (status) {

        this.statusdata.changeSearchStatus(false);
        this.Search();
      }
    })
  }
  Logout() {
    this.router.navigate(['/login']);
  }

  ViewBook(bookC: any) {
    this.bId = bookC.bookId;
    console.log(this.bId, "book");
    this.home.page = 'viewBook';
    this.home.bid = bookC;
  }
  Search() {
    console.log("seach");
    console.log(this.bookName);

    this.books = this.books.filter((res: any) => {
      return res.bookName.toLowerCase().match(this.bookName);
    });
  }

  getBooks() {
    this.bookService.GetBooks().subscribe(
      (result: any) => {
        this.books = result.data;
        console.log(this.books);
      });
  }
  getReviewCount(id: any) {
    console.log(id, "bookId");

    this.bookService.GetCustomerFeedBack(id).subscribe((result: any) => {
      console.log(result.data, "getCustomer");
      return result.data.length;
    });
  }
  AddBook()
  {
    this.dialog.open(AddBookComponent, {
      panelClass: 'dialog-container-custom-add'
    });
  }
  editBook(book:any) {
    this.dialog.open(EditBookComponent, {
      panelClass: 'dialog-container-custom-edit',
      data: book
    });
  }
  deleteBook(book:any) {
    this.dialog.open(DeleteNoteComponent, {
      panelClass: 'dialog-container-custom-delete',
      data: book
    });
  }

}
