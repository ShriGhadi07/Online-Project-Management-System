import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { techprimelabGuard } from './techprimelab.guard';

describe('techprimelabGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => techprimelabGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
