import { TestBed } from '@angular/core/testing';

import { RaffleService } from './raffle.service';

describe('SorteioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaffleService = TestBed.get(RaffleService);
    expect(service).toBeTruthy();
  });
});
