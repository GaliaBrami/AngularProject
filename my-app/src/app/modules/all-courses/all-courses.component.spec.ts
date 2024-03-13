import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllCourses } from './all-courses.component';

// import { AllCoursesComponent } from './all-courses.component';

describe('AllCoursesComponent', () => {
  let component: AllCourses;
  let fixture: ComponentFixture<AllCourses>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCourses]
    });
    fixture = TestBed.createComponent(AllCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
