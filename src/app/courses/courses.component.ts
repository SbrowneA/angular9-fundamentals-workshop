import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Complete remote update call
  // STEP 02: Complete remote delete call
  // STEP 03: Fix UI on completed operation

  selectedCourse = null;

  courses = null;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.refreshCourses();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course).subscribe((res) => {
        console.log(res);
        this.refreshCourses();
      });
    } else {
      this.coursesService.create(course).subscribe((res) => this.refreshCourses());
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId).subscribe(res => {
      console.log(res);
      this.refreshCourses();
    });


  }

  cancel() {
    this.resetSelectedCourse();
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }
}
