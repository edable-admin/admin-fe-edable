import { TestBed } from '@angular/core/testing';

import { InfographicsService } from './infographics.service';

describe('InfographicsService', () => {
  let service: InfographicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfographicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
