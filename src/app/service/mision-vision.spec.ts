import { TestBed } from '@angular/core/testing';

import { MisionVision } from './mision-vision';

describe('MisionVision', () => {
  let service: MisionVision;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisionVision);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
