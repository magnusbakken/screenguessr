import { TestBed } from '@angular/core/testing';

import { SeedGeneratorService } from './seed-generator.service';

describe('SeedGeneratorService', () => {
  let service: SeedGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
