import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMechPageComponent } from './modify-mech-page.component';

describe('ModifyMechPageComponent', () => {
  let component: ModifyMechPageComponent;
  let fixture: ComponentFixture<ModifyMechPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMechPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyMechPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
