import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginelightpageComponent } from './enginelightpage.component';

describe('EnginelightpageComponent', () => {
  let component: EnginelightpageComponent;
  let fixture: ComponentFixture<EnginelightpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginelightpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnginelightpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
