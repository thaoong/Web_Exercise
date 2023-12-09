import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDeleteComponent } from './fashion-delete.component';

describe('FashionDeleteComponent', () => {
  let component: FashionDeleteComponent;
  let fixture: ComponentFixture<FashionDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionDeleteComponent]
    });
    fixture = TestBed.createComponent(FashionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
