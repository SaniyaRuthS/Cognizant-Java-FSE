import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [NotificationService],
  standalone: false
})
export class NotificationComponent implements OnInit {
  notificationMessage: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationMessage = this.notificationService.getMessage();
  }
}
