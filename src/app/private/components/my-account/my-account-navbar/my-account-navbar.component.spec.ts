import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountNavbarComponent } from './my-account-navbar.component';

describe('MyAccountNavbarComponent', () => {
  let component: MyAccountNavbarComponent;
  let fixture: ComponentFixture<MyAccountNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
