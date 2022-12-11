import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAccountInfoComponent } from './my-account-info.component';

describe('MyAccountInfoComponent', () => {
  let component: MyAccountInfoComponent;
  let fixture: ComponentFixture<MyAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
