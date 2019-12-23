import {TestBed} from '@angular/core/testing';

import {ShipService} from './ship.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ShipServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ShipService = TestBed.get(ShipService);
    expect(service).toBeTruthy();
  });
});
