import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-layout',
  template: `<div class="courses-layout"><router-outlet></router-outlet></div>`,
  styles: [`.courses-layout { padding: 10px 0; }`],
  standalone: false
})
export class CoursesLayoutComponent {}
