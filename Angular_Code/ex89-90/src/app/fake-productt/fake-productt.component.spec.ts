import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeProducttComponent } from './fake-productt.component';

describe('FakeProducttComponent', () => {
  let component: FakeProducttComponent;
  let fixture: ComponentFixture<FakeProducttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeProducttComponent]
    });
    fixture = TestBed.createComponent(FakeProducttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
