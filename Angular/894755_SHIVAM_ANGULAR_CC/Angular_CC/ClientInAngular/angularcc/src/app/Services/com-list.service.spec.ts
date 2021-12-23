import { TestBed } from '@angular/core/testing';

import { ComListService } from './com-list.service';

describe('ComListService', () => {
  let service: ComListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
