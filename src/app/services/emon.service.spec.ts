import { TestBed, inject } from '@angular/core/testing';

import { EmonService } from './emon.service';

describe('EmonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmonService]
    });
  });

  it('should ...', inject([EmonService], (service: EmonService) => {
    expect(service).toBeTruthy();
  }));
});
