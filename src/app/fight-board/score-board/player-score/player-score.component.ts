import {Component, Input, OnInit} from '@angular/core';
import {PlayerData} from '../../../state/app/models/PlayerData';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss']
})
export class PlayerScoreComponent implements OnInit {
  @Input() data: PlayerData;

  constructor() {
  }

  ngOnInit() {
  }

}
