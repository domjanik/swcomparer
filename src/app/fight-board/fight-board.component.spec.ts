import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightBoardComponent} from './fight-board.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Actions, NgxsModule, ofActionDispatched, Store} from '@ngxs/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Observable, Observer, of} from 'rxjs';
import {GetRandomChampionPairAction, GetRandomShipPairAction} from '../state/app/app.actions';
import {AppState} from '../state/app/app.state';
import {ChampionService} from '../services/champion.service';
import {ShipService} from '../services/ship.service';
import {ResourceListDTO} from '../state/app/models/ResourceListDTO';
import {PlayerResource} from '../state/app/models/PlayerResource';

class MockShipService {
  public getShipList(pageNr): Observable<ResourceListDTO> {
    return new Observable((observer: Observer<any>) => {
      observer.next({
        count: 1,
        next: null,
        previous: null,
        results: [{
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
        }]
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
        results: [{
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
        }]
      });
      observer.complete();
    });
  }
}

describe('FightBoardComponent', () => {
  let component: FightBoardComponent;
  let fixture: ComponentFixture<FightBoardComponent>;
  let store: Store;
  let actions$: Observable<any>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, NgxsModule.forRoot([AppState])],
      declarations: [FightBoardComponent],
      providers: [{provide: ChampionService, useClass: MockChampionService}, {provide: ShipService, useClass: MockShipService}],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'select').and.returnValue(of(null)); // be sure to mock the implementation here
    spyOn(store, 'selectSnapshot').and.returnValue(null); // same here
    actions$ = TestBed.get(Actions);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetRandomShipPairAction after TryAgain with type = ship', (done) => {
    Object.defineProperty(component, 'type', {writable: true});
    component.type = of('ship');
    fixture.detectChanges();

    actions$.pipe(ofActionDispatched(GetRandomShipPairAction)).subscribe((data) => {
      expect(data).toBeDefined();
      done();
    });

    component.tryAgain();
  });

  it('should dispatch GetRandomShipPairAction after TryAgain with type = champion', (done) => {
    Object.defineProperty(component, 'type', {writable: true});
    component.type = of('champion');
    fixture.detectChanges();

    actions$.pipe(ofActionDispatched(GetRandomChampionPairAction)).subscribe((data) => {
      expect(data).toBeDefined();
      done();
    });

    component.tryAgain();
  });
});
