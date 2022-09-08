import { TestBed } from '@angular/core/testing';

import { DbSetupService } from './db-setup.service';

describe('DbSetupService', () => {
  let service: DbSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
