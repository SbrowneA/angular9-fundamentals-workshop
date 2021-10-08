import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson = null;
  @Input() lessons;
  @Output() lessonSelected = new EventEmitter();
  // CHALLENGE
  // STEP 01: Create a LessonsList component
  // STEP 02: Create the appropriate inputs and outputs
  // STEP 03: Render LessonsList component

  courseLessons = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
}
