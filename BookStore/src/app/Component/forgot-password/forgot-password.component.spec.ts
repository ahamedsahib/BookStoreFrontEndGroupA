import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ForgotPasswordComponent } from './forgot-password.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserModule 
      ],
      declarations: [ ForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('forgotPassword form should be invalid', async(() => {
    component.ForgotPasswordForm.controls['email'].setValue('');
    expect(component.ForgotPasswordForm.valid).toBeFalsy();
  }));

  it('forgotPassword form should be valid', async(() => {
    component.ForgotPasswordForm.controls['email'].setValue('karan@gmail.com');
    expect(component.ForgotPasswordForm.valid).toBeTruthy();
  }));

  it('should call the forgotPassword method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'ForgotPassword');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.ForgotPassword).toHaveBeenCalledTimes(1);
  }));
});
