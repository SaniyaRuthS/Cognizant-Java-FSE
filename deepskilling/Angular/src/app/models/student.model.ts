export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourseIds: number[];
}

export interface EnrollmentRequest {
  id?: number;
  studentName: string;
  studentEmail: string;
  courseId: number;
  preferredSemester: 'Odd' | 'Even';
  agreeToTerms: boolean;
  additionalCourses?: string[];
}
