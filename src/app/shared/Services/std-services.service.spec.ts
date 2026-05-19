import { TestBed } from '@angular/core/testing';

import { StdServicesService } from './std-services.service';

describe('StdServicesService', () => {
  let service: StdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
