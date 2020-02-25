import { TestBed, inject } from '@angular/core/testing';

import { SimpleServiceService } from './simple-service.service';

describe('SimpleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleServiceService]
    });
  });

  it('should be created', inject([SimpleServiceService], (service: SimpleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
