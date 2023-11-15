import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise88Component } from './exercise88.component';

describe('Exercise88Component', () => {
  let component: Exercise88Component;
  let fixture: ComponentFixture<Exercise88Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise88Component]
    });
    fixture = TestBed.createComponent(Exercise88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
