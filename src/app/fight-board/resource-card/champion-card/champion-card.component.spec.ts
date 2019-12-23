import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChampionCardComponent} from './champion-card.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ChampionCardComponent', () => {
  let component: ChampionCardComponent;
  let fixture: ComponentFixture<ChampionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionCardComponent);
    component = fixture.componentInstance;

    Object.defineProperty(component, 'data', {writable: true});
    component.data = {
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
