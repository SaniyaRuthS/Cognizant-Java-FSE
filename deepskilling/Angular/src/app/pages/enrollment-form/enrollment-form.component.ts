import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnrollmentRequest } from '../../models/student.model';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css'],
  standalone: false
})
export class EnrollmentFormComponent {
  formData: EnrollmentRequest = {
    studentName: '',
    studentEmail: '',
    courseId: 1,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  submitted: boolean = false;

  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
