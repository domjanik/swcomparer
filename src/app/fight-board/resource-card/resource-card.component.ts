import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {PlayerResource} from '../../state/app/models/PlayerResource';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceCardComponent implements OnInit {
  @Input() data: PlayerResource;

  @Input() type: string;

  @HostBinding('class.wins')
  @Input() win: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
