import { TestBed } from '@angular/core/testing';

import { SortitionService } from './sortition.service';

describe('SorteioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortitionService = TestBed.get(SortitionService);
    expect(service).toBeTruthy();
  });
});
