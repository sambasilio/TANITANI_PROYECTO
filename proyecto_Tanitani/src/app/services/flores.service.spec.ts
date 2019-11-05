import { TestBed } from '@angular/core/testing';

import { FloresService } from './flores.service';

describe('FloresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloresService = TestBed.get(FloresService);
    expect(service).toBeTruthy();
  });
});
