import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoreComponent } from './player-score.component';

describe('PlayerScoreComponent', () => {
  let component: PlayerScoreComponent;
  let fixture: ComponentFixture<PlayerScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoreComponent);
    component = fixture.componentInstance;
    component.data = {
      winStreak: 1,
      winCounter: 1,
      loading: false,
      currentResource: null
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set score to 1', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.score').textContent).toContain('Score : 1');
  });

  it('should set winStreak to 1', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.winstreak').textContent).toContain('WinStreak : 1');
  });
});
