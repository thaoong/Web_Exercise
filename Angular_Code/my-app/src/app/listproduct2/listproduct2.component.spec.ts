import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduct2Component } from './listproduct2.component';

describe('Listproduct2Component', () => {
  let component: Listproduct2Component;
  let fixture: ComponentFixture<Listproduct2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduct2Component]
    });
    fixture = TestBed.createComponent(Listproduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
