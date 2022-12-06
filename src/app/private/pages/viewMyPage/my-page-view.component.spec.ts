import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageViewComponent } from './my-page-view.component';

describe('MyPageViewComponent', () => {
  let component: MyPageViewComponent;
  let fixture: ComponentFixture<MyPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
