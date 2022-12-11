import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';
import { Router } from '@angular/router';
import {Location} from "@angular/common";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      providers: [
        {
          provide: Router, useValue: routerSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
    const start = Date.now();
    tick(100);
    const end = Date.now();
    expect(end - start).toBe(100);
  }));

  //Testing links in footer - Alex
  it('should have a Home link rendered', () => {
    const homeLink = screen.getByText('Home');
    expect(homeLink.innerHTML).toContain('Home');
  });

  it(`should navigate to Home page`, () => {
    routerSpy.navigate(["/home"]);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  });


  it('should have a About link rendered', () =>{
    const aboutLink = screen.getByText('About');
    expect(aboutLink.innerHTML).toContain('About');
  });

  it(`should navigate to About page`, () => {
    routerSpy.navigate(["/about"]);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/about']);
  });


  it('should have a Contact Us link rendered', () =>{
    const contactLink = screen.getByText('Contact Us');
    expect(contactLink.innerHTML).toContain('Contact Us');
  });

  it(`should navigate to Contact Us page`, () => {
    routerSpy.navigate(["/contact-us"]);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/contact-us']);
  });


  it('should have a Login link rendered', () =>{
    const loginLink = screen.getByText('Login');
    expect(loginLink.innerHTML).toContain('Login');
  });

  it(`should navigate to Login page`, () => {
    routerSpy.navigate(["/login"]);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });


  it('should have a Report an issue link rendered', () =>{
    const reportLink = screen.getByText('Report an issue');
    expect(reportLink.innerHTML).toContain('Report an issue');
  });

  it(`should navigate to Report an issue page`, () => {
    routerSpy.navigate(["/report-issue"]);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/report-issue']);
  });

});
