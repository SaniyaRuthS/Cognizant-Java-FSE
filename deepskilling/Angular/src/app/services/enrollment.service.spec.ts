import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnrollmentService } from './enrollment.service';
import { CourseService } from './course.service';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrollmentService, CourseService]
    });
    service = TestBed.inject(EnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enroll and unenroll a course', () => {
    service.enroll(2);
    expect(service.isEnrolled(2)).toBeTrue();
    service.unenroll(2);
    expect(service.isEnrolled(2)).toBeFalse();
  });
});
