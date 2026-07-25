import { ComponentFixture, TestBed } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentProfileComponent } from './student-profile.component';
import { NotificationComponent } from '../../components/notification/notification.component';

describe('StudentProfileComponent', () => {
  let component: StudentProfileComponent;
  let fixture: ComponentFixture<StudentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileComponent, NotificationComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
