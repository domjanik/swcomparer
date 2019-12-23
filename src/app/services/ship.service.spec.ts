import {TestBed} from '@angular/core/testing';

import {ShipService} from './ship.service';

describe('ShipServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipService = TestBed.get(ShipService);
    expect(service).toBeTruthy();
  });
});
