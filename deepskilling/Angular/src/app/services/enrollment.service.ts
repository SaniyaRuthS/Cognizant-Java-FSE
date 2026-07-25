import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [1, 3];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    const index = this.enrolledCourseIds.indexOf(courseId);
    if (index !== -1) {
      this.enrolledCourseIds.splice(index, 1);
    }
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  getEnrolledCourses(): Course[] {
    const allCourses = this.courseService.getInitialMockCourses();
    return allCourses.filter(c => this.enrolledCourseIds.includes(c.id));
  }

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    const mockStudents: Student[] = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', enrolledCourseIds: [courseId] },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', enrolledCourseIds: [courseId] }
    ];
    return of(mockStudents);
  }
}
