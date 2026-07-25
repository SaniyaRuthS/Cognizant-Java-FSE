import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  standalone: false
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  enrolledStudents: Student[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const courseId = idParam ? Number(idParam) : null;

    if (courseId) {
      of(courseId).pipe(
        switchMap(id => {
          return this.courseService.getCourseById(id);
        }),
        switchMap(course => {
          this.course = course;
          return this.enrollmentService.getStudentsByCourse(course.id);
        })
      ).subscribe({
        next: (students) => {
          this.enrolledStudents = students;
        },
        error: (err) => {
          this.errorMessage = err.message || 'Error loading course details.';
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
