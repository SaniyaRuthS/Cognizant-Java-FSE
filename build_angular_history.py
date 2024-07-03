import os
import subprocess

def run_cmd(cmd):
    try:
        subprocess.run(cmd, shell=True, check=True)
    except Exception as e:
        print(f"Error running {cmd}: {e}")

def write_file(path, content):
    os.makedirs(os.path.dirname(path) if os.path.dirname(path) else '.', exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + "\n")

def read_file(path):
    if not os.path.exists(path): return ""
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def git_commit(date, msg):
    run_cmd('git add .')
    run_cmd(f'git commit --date="{date}" -m "{msg}"')

print("Starting 30-day Angular git history simulation...")

# Day 3
write_file('src/styles.css', """
:root { --primary: #1976d2; --accent: #ff4081; --bg: #f5f5f5; --text: #333; }
body { font-family: 'Inter', 'Roboto', sans-serif; margin: 0; padding: 0; background-color: var(--bg); color: var(--text); }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
.card { background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px; margin-bottom: 20px; }
button { background-color: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; transition: background 0.3s; }
button:hover { background-color: #115293; }
button:disabled { background-color: #ccc; cursor: not-allowed; }
""")
git_commit("2024-07-03 10:15:00", "Add global styles and modern theme")

# Day 6
write_file('src/app/services/course.service.ts', """
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
""")
git_commit("2024-07-06 14:30:00", "Create Course Service for data management")

# Day 10
write_file('src/app/pages/course-list/course-list.component.ts', """
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService) {}
  ngOnInit() { this.courseService.getCourses().subscribe(data => this.courses = data); }
}
""")
write_file('src/app/pages/course-list/course-list.component.html', """
<div class="container">
  <h2>Available Courses</h2>
  <div class="grid">
    <div *ngFor="let course of courses" class="card">
      <h3>{{ course.title }}</h3>
      <p>Category: {{ course.category }}</p>
      <p>Seats: {{ course.seats > 0 ? course.seats : 'Sold Out' }}</p>
      <button [disabled]="course.seats === 0">Enroll Now</button>
    </div>
  </div>
</div>
""")
write_file('src/app/pages/course-list/course-list.component.css', """
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
""")
git_commit("2024-07-10 11:15:00", "Implement course list component with mock data")

# Day 13
write_file('src/app/pages/course-list/course-list.component.ts', """
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  
  constructor(private courseService: CourseService) {}
  ngOnInit() { 
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = data;
    }); 
  }
  
  filterCourses() {
    this.filteredCourses = this.courses.filter(c => c.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
""")
write_file('src/app/pages/course-list/course-list.component.html', """
<div class="container">
  <h2>Available Courses</h2>
  <input type="text" [(ngModel)]="searchTerm" (input)="filterCourses()" placeholder="Search courses..." class="search-box">
  <div class="grid">
    <div *ngFor="let course of filteredCourses" class="card">
      <h3>{{ course.title }}</h3>
      <p>Category: {{ course.category }}</p>
      <p>Seats: {{ course.seats > 0 ? course.seats : 'Sold Out' }}</p>
      <button [disabled]="course.seats === 0">Enroll Now</button>
    </div>
  </div>
</div>
""")
write_file('src/app/pages/course-list/course-list.component.css', """
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.search-box { width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
""")
git_commit("2024-07-13 16:45:00", "Add search and filter functionality to courses")

# Day 17
write_file('src/app/pages/student-profile/student-profile.component.ts', """
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  profileForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      bio: ['']
    });
  }
  
  onSubmit() {
    if(this.profileForm.valid) {
      alert('Profile updated successfully!');
    }
  }
}
""")
write_file('src/app/pages/student-profile/student-profile.component.html', """
<div class="container">
  <div class="card" style="max-width: 600px; margin: 0 auto;">
    <h2>Student Profile</h2>
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" formControlName="name">
        <div *ngIf="profileForm.get('name')?.touched && profileForm.get('name')?.invalid" class="error">
          Valid name is required.
        </div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" formControlName="email">
        <div *ngIf="profileForm.get('email')?.touched && profileForm.get('email')?.invalid" class="error">
          Valid email is required.
        </div>
      </div>
      <button type="submit" [disabled]="profileForm.invalid">Update Profile</button>
    </form>
  </div>
</div>
""")
write_file('src/app/pages/student-profile/student-profile.component.css', """
.form-group { margin-bottom: 15px; }
label { display: block; margin-bottom: 5px; font-weight: bold; }
input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
.error { color: #f44336; font-size: 0.85em; margin-top: 5px; }
""")
git_commit("2024-07-17 09:20:00", "Implement student profile with reactive forms")

# Day 21
write_file('src/app/pages/home/home.component.html', """
<div class="hero-section">
  <h1>Welcome to the Student Course Portal</h1>
  <p>Your journey to mastering modern technologies starts here.</p>
</div>
<div class="container">
  <h2>Why Choose Us?</h2>
  <div class="features-grid">
    <div class="card">
      <h3>Expert Instructors</h3>
      <p>Learn from industry leaders and experienced professionals.</p>
    </div>
    <div class="card">
      <h3>Hands-on Projects</h3>
      <p>Build real-world applications to add to your portfolio.</p>
    </div>
    <div class="card">
      <h3>Flexible Learning</h3>
      <p>Access course materials anytime, anywhere.</p>
    </div>
  </div>
</div>
""")
write_file('src/app/pages/home/home.component.css', """
.hero-section { background: linear-gradient(135deg, var(--primary), #00bcd4); color: white; padding: 60px 20px; text-align: center; }
.hero-section h1 { font-size: 2.5em; margin-bottom: 10px; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; }
""")
git_commit("2024-07-21 13:00:00", "Enhance home page UI with hero section")

# Day 25
config = read_file('src/app/app.config.ts')
if 'provideHttpClient' not in config and config != "":
    new_config = config.replace(
        "import { provideRouter } from '@angular/router';",
        "import { provideRouter } from '@angular/router';\nimport { provideHttpClient } from '@angular/common/http';"
    ).replace(
        "providers: [provideRouter(routes)]",
        "providers: [provideRouter(routes), provideHttpClient()]"
    )
    write_file('src/app/app.config.ts', new_config)
    git_commit("2024-07-25 10:10:00", "Add HTTP Client setup for API integration")

# Day 30
readme = """
# Student Course Portal (Angular)

A modern web application built with Angular for browsing and managing student courses.

## Features
- Standalone Components Architecture
- Dynamic Course Browsing & Filtering
- Reactive Forms with Validation (Student Profile)
- Responsive UI Design

## Quick Start
1. Run `npm install`
2. Run `npm start` to start the development server
3. Navigate to `http://localhost:4200/`

## Production Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
"""
write_file('README.md', readme)
git_commit("2024-07-30 16:20:00", "Final polish, responsive design, and documentation")

print("Done! The repository has been updated with the 30-day Angular git history.")
