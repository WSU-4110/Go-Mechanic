import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginpageComponent } from './loginpage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DebugElement } from '@angular/core';
import { screen } from '@testing-library/angular';


describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let el: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports: [MatFormFieldModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form container displayed', () => {
    const sendButton = screen.getByText('form container');
    expect(component).toBeTruthy();
  });

  it('email field displayed', () => {
    const sendButton = screen.getByText('email');
    expect(component).toBeTruthy();
  });

  it('password field displayed', () => {
    const sendButton = screen.getByText('password');
    expect(component).toBeTruthy();
  });

  it('Login button should display', () => {
    const sendButton = screen.getByText('Login');
    expect(component).toBeTruthy();
  });

  it('should create register redirect', () => {
    const sendButton = screen.getByText('Register');
    expect(component).toBeTruthy();
  });
});
