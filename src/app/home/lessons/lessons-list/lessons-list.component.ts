import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
  courseLessons;

  @Output() selected = new EventEmitter();
  @Input() set lessons(lessonList) {
    if (lessonList) {
      this.courseLessons = Object.assign(lessonList);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
