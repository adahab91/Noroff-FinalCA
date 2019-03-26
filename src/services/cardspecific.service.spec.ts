import { TestBed } from '@angular/core/testing';

import { CardspecificService } from './cardspecific.service';

describe('CardspecificService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardspecificService = TestBed.get(CardspecificService);
    expect(service).toBeTruthy();
  });
});
