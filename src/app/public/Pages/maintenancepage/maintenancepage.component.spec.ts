import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancepageComponent } from './maintenancepage.component';

describe('MaintenancepageComponent', () => {
  let component: MaintenancepageComponent;
  let fixture: ComponentFixture<MaintenancepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenancepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
