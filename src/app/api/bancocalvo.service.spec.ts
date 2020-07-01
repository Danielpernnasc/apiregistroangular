import { TestBed } from '@angular/core/testing';

import { BancocalvoService } from './bancocalvo.service';

describe('BancocalvoService', () => {
  let service: BancocalvoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancocalvoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
