import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProductImageEventComponent } from './service-product-image-event.component';

describe('ServiceProductImageEventComponent', () => {
  let component: ServiceProductImageEventComponent;
  let fixture: ComponentFixture<ServiceProductImageEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventComponent]
    });
    fixture = TestBed.createComponent(ServiceProductImageEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
