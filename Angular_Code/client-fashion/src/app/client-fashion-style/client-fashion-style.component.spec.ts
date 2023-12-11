import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFashionStyleComponent } from './client-fashion-style.component';

describe('ClientFashionStyleComponent', () => {
  let component: ClientFashionStyleComponent;
  let fixture: ComponentFixture<ClientFashionStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFashionStyleComponent]
    });
    fixture = TestBed.createComponent(ClientFashionStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
