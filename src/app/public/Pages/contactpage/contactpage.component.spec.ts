import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpageComponent } from './contactpage.component';

describe('ContactpageComponent', () => {
  let component: ContactpageComponent;
  let fixture: ComponentFixture<ContactpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
