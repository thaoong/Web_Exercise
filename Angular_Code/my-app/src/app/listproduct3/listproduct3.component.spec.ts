import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduct3Component } from './listproduct3.component';

describe('Listproduct3Component', () => {
  let component: Listproduct3Component;
  let fixture: ComponentFixture<Listproduct3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduct3Component]
    });
    fixture = TestBed.createComponent(Listproduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
