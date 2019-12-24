import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {PlayerData} from '../../state/app/models/PlayerData';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreBoardComponent implements OnInit {
  @Select('app.player1') player1: Observable<PlayerData>;
  @Select('app.player2') player2: Observable<PlayerData>;

  constructor() {
  }

  ngOnInit() {
  }

}
