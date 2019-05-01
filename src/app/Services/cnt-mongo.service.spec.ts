import { TestBed } from '@angular/core/testing';

import { CntMongoService } from './cnt-mongo.service';

describe('CntMongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CntMongoService = TestBed.get(CntMongoService);
    expect(service).toBeTruthy();
  });
});
