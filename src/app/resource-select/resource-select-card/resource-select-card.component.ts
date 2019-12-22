import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resource-select-card',
  templateUrl: './resource-select-card.component.html',
  styleUrls: ['./resource-select-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceSelectCardComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;

  constructor() {
  }

  ngOnInit() {
  }

}
