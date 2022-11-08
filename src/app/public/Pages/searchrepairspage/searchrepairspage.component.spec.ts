import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrepairspageComponent } from './searchrepairspage.component';

describe('SearchrepairspageComponent', () => {
  let component: SearchrepairspageComponent;
  let fixture: ComponentFixture<SearchrepairspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrepairspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchrepairspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
