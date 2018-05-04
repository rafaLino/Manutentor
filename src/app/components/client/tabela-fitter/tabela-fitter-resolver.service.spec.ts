import { TestBed, inject } from '@angular/core/testing';

import { TabelaFitterResolverService } from './tabela-fitter-resolver.service';

describe('TabelaFitterResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabelaFitterResolverService]
    });
  });

  it('should be created', inject([TabelaFitterResolverService], (service: TabelaFitterResolverService) => {
    expect(service).toBeTruthy();
  }));
});
