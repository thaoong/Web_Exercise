import { TestBed } from '@angular/core/testing';

import { Ex88ProductService } from './ex88-product.service';

describe('Ex88ProductService', () => {
  let service: Ex88ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex88ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
