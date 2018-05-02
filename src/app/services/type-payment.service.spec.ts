import { TestBed, inject } from '@angular/core/testing';

import { TypePaymentService } from './type-payment.service';

describe('TypePaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypePaymentService]
    });
  });

  it('should be created', inject([TypePaymentService], (service: TypePaymentService) => {
    expect(service).toBeTruthy();
  }));
});
