import { TestBed } from '@angular/core/testing';

import { RestService1Service } from './rest-service1.service';

describe('RestService1Service', () => {
  let service: RestService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
