import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PlayerResource} from '../../../state/app/models/PlayerResource';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionCardComponent implements OnInit {
  @Input() data: PlayerResource;
  constructor() { }

  ngOnInit() {
  }

}
