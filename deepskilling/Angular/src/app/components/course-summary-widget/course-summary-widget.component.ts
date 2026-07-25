import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  templateUrl: './course-summary-widget.component.html',
  styleUrls: ['./course-summary-widget.component.css'],
  standalone: false
})
export class CourseSummaryWidgetComponent implements OnInit {
  courseCount: number = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courseCount = courses.length;
      },
      error: () => {
        this.courseCount = this.courseService.getInitialMockCourses().length;
      }
    });
  }
}
