import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakejobpageComponent } from './brakejobpage.component';

describe('BrakejobpageComponent', () => {
  let component: BrakejobpageComponent;
  let fixture: ComponentFixture<BrakejobpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrakejobpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrakejobpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
