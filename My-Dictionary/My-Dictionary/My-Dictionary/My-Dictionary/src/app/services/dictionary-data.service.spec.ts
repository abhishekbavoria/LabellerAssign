import { TestBed } from '@angular/core/testing';

import { DictionaryDataService } from './dictionary-data.service';

describe('DictionaryDataService', () => {
  let service: DictionaryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
