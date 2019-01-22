import { TestBed } from '@angular/core/testing';

import { KstatusApiService } from './kstatus-api.service';

describe('KstatusApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KstatusApiService = TestBed.get(KstatusApiService);
    expect(service).toBeTruthy();
  });
});
