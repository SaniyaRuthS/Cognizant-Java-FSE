import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/" class="btn btn-primary">Return to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container { text-align: center; margin-top: 50px; }
    h1 { font-size: 3rem; color: #dc3545; }
    p { margin-bottom: 20px; font-size: 1.2rem; }
    .btn-primary { background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; }
  `],
  standalone: false
})
export class NotFoundComponent {}
