import { TestBed, inject } from '@angular/core/testing';

import { FitterService } from './fitter.service';

describe('FitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FitterService]
    });
  });

  it('should be created', inject([FitterService], (service: FitterService) => {
    expect(service).toBeTruthy();
  }));
});
