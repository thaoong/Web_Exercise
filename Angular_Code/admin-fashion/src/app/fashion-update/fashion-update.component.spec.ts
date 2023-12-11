import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionUpdateComponent } from './fashion-update.component';

describe('FashionUpdateComponent', () => {
  let component: FashionUpdateComponent;
  let fixture: ComponentFixture<FashionUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionUpdateComponent]
    });
    fixture = TestBed.createComponent(FashionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
