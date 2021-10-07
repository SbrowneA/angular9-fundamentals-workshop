import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit{
  @Output() saved = new EventEmitter();
  @Output() cancel = new EventEmitter();
  selectedCourse;
  originalTitle;
  @Input() set course(value){
    console.log('set');
    console.log(value);
    if (value){
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }
  ngOnInit(): void {
  }
}
