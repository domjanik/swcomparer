import {TestBed} from '@angular/core/testing';

import {ChampionServiceService} from './champion-service.service';

describe('ChampionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChampionServiceService = TestBed.get(ChampionServiceService);
    expect(service).toBeTruthy();
  });
});
