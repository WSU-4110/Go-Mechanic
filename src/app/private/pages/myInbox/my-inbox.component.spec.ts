import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { screen } from '@testing-library/angular';



import { MyInboxComponent } from './my-inbox.component';

describe('MyInboxComponent', () => {
  let component: MyInboxComponent;
  let fixture: ComponentFixture<MyInboxComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInboxComponent ],
      imports: [MatFormFieldModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInboxComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

   it('should create page', () => {
     expect(component).toBeTruthy();
    });


  it('should have a search button rendered', () => {
    const searchButton = screen.getByText('Search');
    expect(searchButton.innerHTML).toContain('Search');
   });

   it('should have a create chat rendered', () => {
    const createButton = screen.getByText('Create');
    expect(createButton.innerHTML).toContain('Create');
   });

   it('should have messages rendered', () => {
    const messageButton = screen.getByText('Messages');
    expect(messageButton.innerHTML).toContain('Messages');
   });

   it('should have end of chat area rendered', () => {
    const EndofchatWarn = screen.getByText('EndofChat');
    expect(EndofchatWarn.innerHTML).toContain('EndofChat');
   });

   it('should have send message button rendered', () => {
    const sendButton = screen.getByText('send');
    expect(sendButton.innerHTML).toContain('send');
   });

  });
//describe('MyInboxComponent', () => {
//  let component: MyInboxComponent;
//  let fixture: ComponentFixture<MyInboxComponent>;
//
//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ MyInboxComponent ]
//    })
//    .compileComponents();
//
//    fixture = TestBed.createComponent(MyInboxComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });
//
//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
//});
