import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selected-lesson',
  templateUrl: './selected-lesson.component.html',
  styleUrls: ['./selected-lesson.component.scss']
})
export class SelectedLessonComponent {
  selectedLesson;
  @Input() set lesson(lesson){
    if (lesson){
      this.selectedLesson = Object.assign({}, lesson);
    }
  }

}
