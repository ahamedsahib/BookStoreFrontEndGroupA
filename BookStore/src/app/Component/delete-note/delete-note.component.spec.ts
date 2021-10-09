import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNoteComponent } from './delete-note.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

describe('DeleteNoteComponent', () => {
  let component: DeleteNoteComponent;
  let fixture: ComponentFixture<DeleteNoteComponent>;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
      declarations: [ DeleteNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the Close method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'Close');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.Close).toHaveBeenCalledTimes(0);
  }));
});
