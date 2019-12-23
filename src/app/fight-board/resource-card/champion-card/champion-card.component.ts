import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ResourceChampions} from '../../../state/app/models/ResourceChampions';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionCardComponent implements OnInit {
  @Input() data: ResourceChampions;
  constructor() { }

  ngOnInit() {
  }

}
