import { TestBed, inject } from '@angular/core/testing';

import { FitterResolverService } from './fitter-resolver.service';

describe('FitterResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FitterResolverService]
    });
  });

  it('should be created', inject([FitterResolverService], (service: FitterResolverService) => {
    expect(service).toBeTruthy();
  }));
});
