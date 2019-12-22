import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightBoardComponent} from './fight-board.component';

describe('FightBoardComponent', () => {
  let component: FightBoardComponent;
  let fixture: ComponentFixture<FightBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightBoardComponent]
    })
      .compileComponents();
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
