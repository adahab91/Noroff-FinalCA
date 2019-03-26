import { TestBed } from '@angular/core/testing';

import { MtgcardsService } from './mtgcards.service';

describe('MtgcardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtgcardsService = TestBed.get(MtgcardsService);
    expect(service).toBeTruthy();
  });
});
