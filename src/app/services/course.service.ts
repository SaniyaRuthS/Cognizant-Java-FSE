import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Course { id: number; title: string; category: string; seats: number; }

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [
    { id: 1, title: 'Angular Basics', category: 'Frontend', seats: 20 },
    { id: 2, title: 'Spring Boot Microservices', category: 'Backend', seats: 15 },
    { id: 3, title: 'React Masterclass', category: 'Frontend', seats: 0 },
    { id: 4, title: 'Advanced CSS', category: 'Design', seats: 10 }
  ];
  
  getCourses(): Observable<Course[]> { return of(this.courses); }
}
