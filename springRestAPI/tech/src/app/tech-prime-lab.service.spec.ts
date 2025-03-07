import { TestBed } from '@angular/core/testing';

import { TechPrimeLabService } from './tech-prime-lab.service';

describe('TechPrimeLabService', () => {
  let service: TechPrimeLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechPrimeLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
