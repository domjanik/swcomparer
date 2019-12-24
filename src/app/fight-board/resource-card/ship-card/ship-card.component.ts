import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ResourceShip} from '../../../state/app/models/ResourceShip';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipCardComponent implements OnInit {
  @Input() data: ResourceShip;

  constructor() {
  }

  ngOnInit() {
  }

}
