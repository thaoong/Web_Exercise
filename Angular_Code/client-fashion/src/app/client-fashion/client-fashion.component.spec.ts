import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFashionComponent } from './client-fashion.component';

describe('ClientFashionComponent', () => {
  let component: ClientFashionComponent;
  let fixture: ComponentFixture<ClientFashionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFashionComponent]
    });
    fixture = TestBed.createComponent(ClientFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
