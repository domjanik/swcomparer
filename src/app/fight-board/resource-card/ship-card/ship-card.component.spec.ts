import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShipCardComponent} from './ship-card.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ShipCardComponent', () => {
  let component: ShipCardComponent;
  let fixture: ComponentFixture<ShipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShipCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipCardComponent);
    component = fixture.componentInstance;

    Object.defineProperty(component, 'data', {writable: true});
    component.data = {
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "test"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('test');
  });

  it('should have content "42"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('42');
  });
});
