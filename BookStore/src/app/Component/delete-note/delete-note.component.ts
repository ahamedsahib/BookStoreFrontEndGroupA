import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookServiceService } from 'src/app/Services/BookService/book-service.service';
import { DataSharingServiceService } from 'src/app/Services/DataSharing/data-sharing-service.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss']
})
export class DeleteNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteNoteComponent>,
    private bookService:BookServiceService,@Inject(MAT_DIALOG_DATA) public data:any,
    private snackBar:MatSnackBar,
    private statusdata: DataSharingServiceService) { }

  ngOnInit(): void {
  }
  Delete()
  {
    console.log(this.data);
    this.bookService.DeleteTheBook(this.data.bookId).subscribe(
      (result:any)=>{
        this.snackBar.open(`Book deleted`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        this.statusdata.changeStatus(true);
    this.dialogRef.close();

    });
    
  }
  Close()
  {
    this.dialogRef.close();
  }
}
