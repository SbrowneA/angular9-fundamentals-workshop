import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the correct title', () => {
    expect(component.title).toBe('Users');
    expect(Array.isArray(component.allUsers)).toBeTruthy();
  });
  it('should create empty users array', () => {
    expect(component.allUsers.length).toEqual(0);
    expect(Array.isArray(component.allUsers)).toBeTruthy();
  });
  it('should render the correct title', () => {
    expect(component.allUsers.length).toEqual(0);
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe(component.title);
    const newTitle = 'AAA';
    component.title = newTitle;
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe(newTitle);
  });
});
