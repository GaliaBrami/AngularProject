import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourseComponent } from './full-course.component';

describe('FullCourseComponent', () => {
  let component: FullCourseComponent;
  let fixture: ComponentFixture<FullCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullCourseComponent]
    });
    fixture = TestBed.createComponent(FullCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
