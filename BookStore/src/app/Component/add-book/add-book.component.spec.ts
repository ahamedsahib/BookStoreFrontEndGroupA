import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AddBookComponent } from './add-book.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
      declarations: [ AddBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the addBook method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'AddBook');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.AddBook).toHaveBeenCalledTimes(0);
  }));

  it('should call the close method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'Close');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.Close).toHaveBeenCalledTimes(1);
  }));
});
