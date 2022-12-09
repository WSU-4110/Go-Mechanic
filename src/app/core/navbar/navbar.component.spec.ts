import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { screen } from '@testing-library/angular';
import '@testing-library/angular'

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [MatMenuModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });


   //Testing buttons this way due to how Bulma works and could not find a way to test them anymore deeply. - Anthony
   it('should have a Home button rendered', () => {
    const homeButton = screen.getByText('Home');
    expect(homeButton.innerHTML).toContain('Home');
   });

   it('should have a Services button rendered', () =>{
    const servicesButton = screen.getByText('Services');
    expect(servicesButton.innerHTML).toContain('Services');
   });

   it('should have a More button rendered', () =>{
    const moreButton = screen.getByText('More');
    expect(moreButton.innerHTML).toContain('More');
   });

   it('should have a Maintenance button rendered under Services', () =>{
    const maintenanceButton = screen.getByText('Maintenance');
    expect(maintenanceButton.innerHTML).toContain('Maintenance');
   });

   it('should have a Engine Light button rendered under Services', () =>{
      const enginelightButton = screen.getByText('Engine Light');
      expect(enginelightButton.innerHTML).toContain('Engine Light');
   });

   it ('should have a Brake Job button rendered under Services', () => {
    const brakejobButton = screen.getByText('Brake Job');
    expect(brakejobButton.innerHTML).toContain('Brake Job');
   });


});
