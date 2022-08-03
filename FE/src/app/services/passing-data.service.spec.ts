import { TestBed } from '@angular/core/testing';

import { PassingDataService } from './passing-data.service';

describe('PassingDataService', () => {
  let service: PassingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
