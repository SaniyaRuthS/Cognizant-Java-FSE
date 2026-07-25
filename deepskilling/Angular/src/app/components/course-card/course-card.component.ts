import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone: false
})
export class CourseCardComponent implements OnChanges {
  @Input() course: Course = { id: 0, name: '', code: '', credits: 0, gradeStatus: 'pending' };
  @Input() appHighlight: string = 'yellow';
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;
  enrolledIds$: Observable<number[]>;

  constructor(
    private enrollmentService: EnrollmentService,
    private store: Store
  ) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course input changed. Previous:', changes['course'].previousValue, 'Current:', changes['course'].currentValue);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course ? this.course.credits >= 4 : false,
      'expanded': this.isExpanded
    };
  }

  get borderStyle() {
    if (!this.course) return { 'border-left': '5px solid grey' };
    let color = 'grey';
    if (this.course.gradeStatus === 'passed') color = 'green';
    else if (this.course.gradeStatus === 'failed') color = 'red';
    return { 'border-left': `5px solid ${color}` };
  }

  get isEnrolled(): boolean {
    return this.course ? this.enrollmentService.isEnrolled(this.course.id) : false;
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    if (this.course) {
      if (this.isEnrolled) {
        this.enrollmentService.unenroll(this.course.id);
        this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
      } else {
        this.enrollmentService.enroll(this.course.id);
        this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      }
      this.enrollRequested.emit(this.course.id);
    }
  }
}
