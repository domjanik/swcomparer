import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PlayerResource} from '../../../state/app/models/PlayerResource';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipCardComponent implements OnInit {
  @Input() data: PlayerResource;
  constructor() { }

  ngOnInit() {
  }

}
