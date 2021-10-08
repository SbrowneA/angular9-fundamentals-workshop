import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLessonComponent } from './selected-lesson.component';

describe('SelectedLessonComponent', () => {
  let component: SelectedLessonComponent;
  let fixture: ComponentFixture<SelectedLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
