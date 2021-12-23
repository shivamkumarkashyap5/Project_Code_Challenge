import { TestBed } from '@angular/core/testing';

import { StockauthService } from './stockauth.service';

describe('StockauthService', () => {
  let service: StockauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
