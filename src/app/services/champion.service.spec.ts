import {TestBed} from '@angular/core/testing';

import {ChampionService} from './champion.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChampionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ChampionService = TestBed.get(ChampionService);
    expect(service).toBeTruthy();
  });
});
