import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPublicComponent } from './view-public.component';

describe('ViewPublicComponent', () => {
  let component: ViewPublicComponent;
  let fixture: ComponentFixture<ViewPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
