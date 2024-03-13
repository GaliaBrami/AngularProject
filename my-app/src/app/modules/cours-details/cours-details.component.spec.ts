import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursDetailsComponent } from './cours-details.component';

describe('CoursDetailsComponent', () => {
  let component: CoursDetailsComponent;
  let fixture: ComponentFixture<CoursDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursDetailsComponent]
    });
    fixture = TestBed.createComponent(CoursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
