import { TestBed } from '@angular/core/testing';

import { SorteioService } from './sorteio.service';

describe('SorteioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SorteioService = TestBed.get(SorteioService);
    expect(service).toBeTruthy();
  });
});
