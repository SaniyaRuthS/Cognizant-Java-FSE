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
