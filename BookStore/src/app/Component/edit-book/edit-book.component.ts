import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditBookComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private bookService:BookServiceService, public snackBar:MatSnackBar,) { }
  EditBookForm !: FormGroup
  ngOnInit(): void {
    console.log(this.data);
    
  }
  Close()
  {
    this.dialogRef.close();
  }
  Save()
  {
    this.bookService.UpdateBook(this.data)
    .subscribe((result:any)=>{
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      this.dialogRef.close();
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
  }

}
