import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsComponent } from './repairs.component';

describe('RepairsComponent', () => {
  let component: RepairsComponent;
  let fixture: ComponentFixture<RepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
