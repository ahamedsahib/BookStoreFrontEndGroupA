import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { LoginRegisterComponent } from './login-register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginRegisterComponent', () => {
  let component: LoginRegisterComponent;
  let fixture: ComponentFixture<LoginRegisterComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserModule
      ],
      declarations: [ LoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login form should be invalid', async(() => {
    component.LoginForm.controls['EmailId'].setValue('');
    component.LoginForm.controls['Password'].setValue('');
    expect(component.LoginForm.valid).toBeFalsy();
  }));

  it('login form should be valid', async(() => {
    component.LoginForm.controls['EmailId'].setValue('karan@gmail.com');
    component.LoginForm.controls['Password'].setValue('Karan@123');
    expect(component.LoginForm.valid).toBeTruthy();
  }));

  it('should call the login method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'Login');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.Login).toHaveBeenCalledTimes(0);
  }));

  it('register form should be invalid', async(() => {
    component.RegisterForm.controls['FullName'].setValue('');
    component.RegisterForm.controls['EmailId'].setValue('');
    component.RegisterForm.controls['Password'].setValue('');
    component.RegisterForm.controls['Phone'].setValue('');
    expect(component.RegisterForm.valid).toBeFalsy();
  }));

  it('register form should be valid', async(() => {
    component.RegisterForm.controls['FullName'].setValue('Lahari');
    component.RegisterForm.controls['EmailId'].setValue('lahari@gmail.com');
    component.RegisterForm.controls['Password'].setValue('Lahari@123');
    component.RegisterForm.controls['Phone'].setValue('9898989898');
    expect(component.RegisterForm.valid).toBeTruthy();
  }));

  it('should call the register method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'Register');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.Register).toHaveBeenCalledTimes(0);
  }));
});
