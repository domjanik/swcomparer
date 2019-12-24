import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ScoreBoardComponent} from './score-board.component';
import {NgxsModule, Store} from '@ngxs/store';
import {of} from 'rxjs';
import {By} from 'protractor';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-player-score',
  template: '<ng-content></ng-content>'
})
class MockPlayerScoreComponent {
  @Input() data: any;
}

describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;
  let store: Store;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj<Store>(['dispatch', 'selectSnapshot'] as any);
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [{provide: Store, useValue: storeSpy}],
      declarations: [ScoreBoardComponent, MockPlayerScoreComponent]
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
