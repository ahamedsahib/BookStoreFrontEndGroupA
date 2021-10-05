import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditBookComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
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

  }

}
