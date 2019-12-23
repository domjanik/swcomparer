import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightBoardComponent} from './fight-board.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngxs/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('FightBoardComponent', () => {
  let component: FightBoardComponent;
  let fixture: ComponentFixture<FightBoardComponent>;
  let store: Store;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj<Store>(['dispatch', 'selectSnapshot'] as any);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [FightBoardComponent],
      providers: [{provide: Store, useValue: storeSpy}],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
