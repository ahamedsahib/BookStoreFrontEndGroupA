import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBookComponent>) { }
  data:any;
  imageSrc:string | undefined;
  ngOnInit(): void {
  }
  Close()
  {
    this.dialogRef.close();
  }
  
  onFileChanged(event: any)
  {
    var files: File=event.target.files.item(0);
      console.log(event.target.files.item(0));
      const form = new FormData();
      form.append('imageProps',files,files.name);
      console.log(form);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files.item(0));
      console.log(this.imageSrc,"src");
      
      // console.log(this.note.noteId);
      // this.noteService.addImage(this.note.noteId,form).
      // subscribe((result:any)=>{
      //   this.datasharing.changeMessage(true);
      //   console.log(result);
      // });
  }
}
