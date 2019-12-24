import {TestBed, async} from '@angular/core/testing';
import {Actions, NgxsModule, Store} from '@ngxs/store';
import {AppState} from './app.state';
import {
  AddPlayer1WinAction,
  AddPlayer2WinAction,
  CalculateResultAction,
  GetRandomChampionPairAction,
  GetRandomShipPairAction
} from './app.actions';
import {Observable, Observer} from 'rxjs';
import {ResourceListDTO} from './models/ResourceListDTO';
import {ChampionService} from '../../services/champion.service';
import {ShipService} from '../../services/ship.service';
import {appInit} from './inits/app.init';

class MockShipService {
  public getShipList(pageNr): Observable<ResourceListDTO> {
    return new Observable((observer: Observer<any>) => {
      observer.next({
        count: 1,
        next: null,
        previous: null,
        results: [strongerShip]
      });
      observer.complete();
    });
  }
}

class MockChampionService {
  public getChampionList(pageNr): Observable<ResourceListDTO> {
    return new Observable((observer: Observer<any>) => {
      observer.next({
        count: 1,
        next: null,
        previous: null,
        results: [strongerChampion]
      });
      observer.complete();
    });
  }
}

const strongerShip = {
  type: 'ship',
  name: 'test',
  model: 'Test model',
  manufacturer: 'Test Man',
  cost_in_credits: '2000',
  length: 'over 9000',
  max_atmosphering_speed: '42',
  crew: '42',
  passengers: '42',
  cargo_capacity: '42',
  consumables: '42',
  hyperdrive_rating: '42',
  MGLT: '42',
  starship_class: 'Destroyer',
  pilots: [],
  films: [],
  created: new Date(),
  edited: new Date(),
  url: ''
};

const weakerShip = {
  type: 'ship',
  name: 'test',
  model: 'Test model',
  manufacturer: 'Test Man',
  cost_in_credits: '2000',
  length: 'over 9000',
  max_atmosphering_speed: '42',
  crew: '1',
  passengers: '42',
  cargo_capacity: '42',
  consumables: '42',
  hyperdrive_rating: '42',
  MGLT: '42',
  starship_class: 'Destroyer',
  pilots: [],
  films: [],
  created: new Date(),
  edited: new Date(),
  url: ''
};

const invalidCrewShip = {
  type: 'ship',
  name: 'test',
  model: 'Test model',
  manufacturer: 'Test Man',
  cost_in_credits: '2000',
  length: 'over 9000',
  max_atmosphering_speed: '42',
  crew: undefined,
  passengers: '42',
  cargo_capacity: '42',
  consumables: '42',
  hyperdrive_rating: '42',
  MGLT: '42',
  starship_class: 'Destroyer',
  pilots: [],
  films: [],
  created: new Date(),
  edited: new Date(),
  url: ''
};

const strongerChampion = {
  type: 'champion',
  name: 'test',
  height: '42',
  mass: '42',
  hair_color: 'blond',
  skin_color: 'white',
  eye_color: 'blue',
  birth_year: '42',
  gender: 'male',
  homeworld: 'Tatooine',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: new Date(),
  edited: new Date(),
  url: ''
};

const weakerChampion = {
  type: 'champion',
  name: 'test',
  height: '42',
  mass: '1',
  hair_color: 'blond',
  skin_color: 'white',
  eye_color: 'blue',
  birth_year: '42',
  gender: 'male',
  homeworld: 'Tatooine',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: new Date(),
  edited: new Date(),
  url: ''
};

const invalidMassChampion = {
  type: 'champion',
  name: 'test',
  height: '42',
  mass: undefined,
  hair_color: 'blond',
  skin_color: 'white',
  eye_color: 'blue',
  birth_year: '42',
  gender: 'male',
  homeworld: 'Tatooine',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: new Date(),
  edited: new Date(),
  url: ''
};


describe('App actions', () => {
  let store: Store;
  let actions$: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])],
      providers: [{provide: ChampionService, useClass: MockChampionService},
        {provide: ShipService, useClass: MockShipService}]
    }).compileComponents();
    store = TestBed.get(Store);
    actions$ = TestBed.get(Actions);

    store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1
          }
        }
      });
  }));

  describe('GetRandomShipPairAction', () => {
    it('should set p1 currentResource as strongerShip', () => {
      store.dispatch(new GetRandomShipPairAction());

      const p1resource = store.selectSnapshot(state => state.app.player1.currentResource);
      expect(p1resource).toBe(strongerShip);
    });

    it('should set p2 currentResource as strongerShip', () => {
      store.dispatch(new GetRandomShipPairAction());

      const p2resource = store.selectSnapshot(state => state.app.player1.currentResource);
      expect(p2resource).toBe(strongerShip);
    });
  });

  describe('GetRandomChampionPairAction', () => {
    it('should set p1 currentResource as strongerChampion', () => {
      store.dispatch(new GetRandomChampionPairAction());

      const p1resource = store.selectSnapshot(state => state.app.player1.currentResource);
      expect(p1resource).toBe(strongerChampion);
    });

    it('should set p2 currentResource as strongerChampion', () => {
      store.dispatch(new GetRandomChampionPairAction());

      const p2resource = store.selectSnapshot(state => state.app.player1.currentResource);
      expect(p2resource).toBe(strongerChampion);
    });
  });

  describe('CalculateResultAction', () => {
    it('compare two identical champions should return draw', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerChampion
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerChampion
          },
          resourceType: 'champion'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('draw');
    });
    it('compare one invalid champions should return draw', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: invalidMassChampion
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerChampion
          },
          resourceType: 'champion'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('draw');
    });
    it('compare p1 stronger and p2 weaker champions should return p1 win', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerChampion
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: weakerChampion
          },
          resourceType: 'champion'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('p1');
    });
    it('compare p2 stronger and p1 weaker champions should return p2 win', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: weakerChampion
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerChampion
          },
          resourceType: 'champion'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('p2');
    });


    it('compare two identical ships should return draw', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerShip
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerShip
          },
          resourceType: 'ship'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('draw');
    });
    it('compare one invalid ships should return draw', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: invalidCrewShip
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerShip
          },
          resourceType: 'ship'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('draw');
    });
    it('compare p1 stronger and p2 weaker ships should return p1 win', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerShip
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: weakerShip
          },
          resourceType: 'ship'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('p1');
    });
    it('compare p2 stronger and p1 weaker ships should return p2 win', () => {
      store.reset({
        app: {
          ...appInit,
          player1: {
            ...appInit.player1,
            winCounter: 1,
            winStreak: 1,
            currentResource: weakerShip
          },
          player2: {
            ...appInit.player2,
            winCounter: 1,
            winStreak: 1,
            currentResource: strongerShip
          },
          resourceType: 'ship'
        }
      });

      store.dispatch(new CalculateResultAction());

      const currentWinner = store.selectSnapshot(state => state.app.currentWinner);
      expect(currentWinner).toBe('p2');
    });
  });

  describe('AddPlayer1WinAction', () => {
    it('should increase p1 WinCounter', () => {
      store.dispatch(new AddPlayer1WinAction());

      const p1WinCounter = store.selectSnapshot(state => state.app.player1.winCounter);
      expect(p1WinCounter).toBe(2);
    });

    it('should increase p1 WinStreak', () => {
      store.dispatch(new AddPlayer1WinAction());

      const p1WinStreak = store.selectSnapshot(state => state.app.player1.winStreak);
      expect(p1WinStreak).toBe(2);
    });

    it('should reset p2 WinStreak', () => {
      store.dispatch(new AddPlayer1WinAction());

      const p2WinStreak = store.selectSnapshot(state => state.app.player2.winStreak);
      expect(p2WinStreak).toBe(0);
    });
  });

  describe('AddPlayer2WinAction', () => {
    it('should increase p2 WinCounter', () => {
      store.dispatch(new AddPlayer2WinAction());

      const p2WinCounter = store.selectSnapshot(state => state.app.player2.winCounter);
      expect(p2WinCounter).toBe(2);
    });

    it('should increase p2 WinStreak', () => {
      store.dispatch(new AddPlayer2WinAction());

      const p2WinStreak = store.selectSnapshot(state => state.app.player2.winStreak);
      expect(p2WinStreak).toBe(2);
    });

    it('should reset p1 WinStreak', () => {
      store.dispatch(new AddPlayer2WinAction());

      const p1WinStreak = store.selectSnapshot(state => state.app.player1.winStreak);
      expect(p1WinStreak).toBe(0);
    });
  });
});
