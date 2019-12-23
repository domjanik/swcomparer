import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreBoardComponent } from './score-board.component';
import {NgxsModule, Store} from '@ngxs/store';
import {AppState} from '../../state/app/app.state';
import {of} from 'rxjs';

fdescribe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;
  let store: Store;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj<Store>(['dispatch', 'selectSnapshot']  as any);
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [{provide: Store, useValue: storeSpy}],
      declarations: [ ScoreBoardComponent ]
    })
    .compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    Object.defineProperty(component, 'player1', {writable: true});
    Object.defineProperty(component, 'player2', {writable: true});
    component.player1 = of(null);
    component.player2 = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
