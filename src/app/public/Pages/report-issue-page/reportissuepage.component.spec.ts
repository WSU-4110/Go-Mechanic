import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportissuepageComponent } from './reportissuepage.component';

describe('ReportissuepageComponent', () => {
  let component: ReportissuepageComponent;
  let fixture: ComponentFixture<ReportissuepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportissuepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportissuepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
