import { TestBed } from '@angular/core/testing';

import { TokenisationService } from './tokenisation.service';

describe('TokenisationService', () => {
  let service: TokenisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
